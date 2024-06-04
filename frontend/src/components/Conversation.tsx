
const Conversation = ({ question, answer }: { question: string, answer: string }) => {
  return (
    <div className="mb-4 flex flex-col">
      {question && (
        <div className="flex justify-end mb-2">
          <div className="bg-[#382c64] text-white rounded-xl p-3 max-w-xl text-lg">
            {question}
          </div>
        </div>
      )}
      {answer && (
        <div className="flex justify-start mb-2">
          <div className="bg-[#5346A2] text-white rounded-xl p-3 max-w-xl text-lg">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default Conversation;
