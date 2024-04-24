function Conversation({ question, answer }: any) {
    return (
        <div>
            <div className="bg-[#382c64] p-3 rounded-xl text-white m-4">
                {question}
            </div>

            <div className="bg-[#382c64] p-3 rounded-xl text-white m-4">
                {answer}
            </div>
        </div>
    );
}

export default Conversation;
