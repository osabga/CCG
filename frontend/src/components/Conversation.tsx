const Conversation = ({ question, answer }: { question: string, answer: string }) => {
    return (
      <div className="mb-4 flex flex-col">
        <div className="self-end bg-[#382c64] text-white rounded-xl p-3 mb-2 inline-block max-w-full text-lg">
          {question}
        </div>
        <div className="self-start bg-[#5346A2] text-white rounded-xl p-3 mb-2 inline-block max-w-full text-lg">
          {answer}
        </div>
      </div>
    );
  };
  
  export default Conversation;
  