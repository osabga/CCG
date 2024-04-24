import bs4
from langchain import hub
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.vectorstores import Chroma
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from pdfminer.high_level import extract_text
from langchain_core.prompts import PromptTemplate
from langchain_community.document_loaders import TextLoader
import os
from dotenv import dotenv_values

config = dotenv_values(".env")

# Set the API key
os.environ[
    "OPENAI_API_KEY"] = config["OPENAI_API_KEY"]

# Global variable to store the trained model instance
rag_chain = None


# Load the text from the PDF and save it to a .txt file
def extract_text_from_pdf(pdf_path) -> None:
    """
    Extract text from a PDF file and save it to a .txt file
    :param pdf_path: Path to the PDF file
    :return: None
    """
    contenido = os.listdir(pdf_path)
    for fichero in contenido:
        text = extract_text(os.path.join(pdf_path, fichero))
        with open('train_data/NEORIS.txt', 'a', encoding='utf-8') as f:
            f.write(text)


# Train the model with the .txt file
def train_model():
    """
    Train the model with the text from the .txt file
    :return: Model trained with the text
    """

    global rag_chain

    template = """Use the following pieces of context to answer the question at the end.
    If you don't know the answer, just say that you don't know, don't try to make up an answer.
    Use three sentences maximum and keep the answer as concise as possible.
    Always say "thanks for asking!" at the end of the answer.
    When asked in spanish the answer should be in spanish. When asked in english the answer should be in english.
    If the user greets the bot, the bot should greet back."
    
    
    {context}
    
    Question: {question}
    
    Helpful Answer:"""

    loader = TextLoader("train_data/NEORIS.txt", encoding='utf-8')

    docs = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000,
                                                   chunk_overlap=200)
    splits = text_splitter.split_documents(docs)
    vectorstore = Chroma.from_documents(documents=splits,
                                        embedding=OpenAIEmbeddings())

    retriever = vectorstore.as_retriever()
    llm = ChatOpenAI(model_name="gpt-3.5-turbo-0125", temperature=0)

    custom_rag_prompt = PromptTemplate.from_template(template)

    rag_chain = (
            {"context": retriever, "question": RunnablePassthrough()}
            | custom_rag_prompt
            | llm
            | StrOutputParser()
    )


# Ask the model a question
def model_response(question) -> str:
    """
    Ask the model a question
    :param question: Question to ask the model
    :return: Answer from the model
    """
    global rag_chain
    if rag_chain is None:
        train_model()
    response = rag_chain.invoke(question)
    return response


if __name__ == '__main__':
    # extract_text_from_pdf("data")
    # print(model_response("What is NEORIS?"))
    # print(model_response("What services does NEORIS offer?"))
    train_model()
    print(model_response("Cuales son los servicios de la NUBE de NEORIS?"))
