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


# Load the text from the PDF and save it to a .txt file
def extract_text_from_pdf(pdf_path):
    text = extract_text(pdf_path)
    with open('Attention_is_all_you_need.txt', 'w', encoding='utf-8') as f:
        f.write(text)


# Train the model with the .txt file
def train_model():
    template = """Use the following pieces of context to answer the question at the end.
    If you don't know the answer, just say that you don't know, don't try to make up an answer.
    Use three sentences maximum and keep the answer as concise as possible.
    Always say "thanks for asking!" at the end of the answer.
    
    {context}
    
    Question: {question}
    
    Helpful Answer:"""

    loader = TextLoader("Attention_is_all_you_need.txt", encoding='utf-8')

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

    return rag_chain


# Ask the model a question
def model_response(question):
    rag_chain = train_model()
    response = rag_chain.invoke(question)
    return response


if __name__ == '__main__':
    print(model_response("De que trata el documento?"))
