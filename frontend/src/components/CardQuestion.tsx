

const CardQuestion = () => {
    // Suponiendo que tengas las imágenes importadas o las rutas listas
     const cardInfo = [
       {
         question: 'Do you offer data solutions?',
         answer: 'Yes, we offer a wide range of data solutions that are designed to innovate your digital landscape. Unleash the power of information...'
       },
       {
         question: 'What are the prdocuts that you offer?',
         answer: 'We offer a wide range of products that are designed to innovate your digital landscape. Unleash the power of information...'
       },
       
     ];
   
     return (
        <div className="card-container">
            {cardInfo.map((card, index) => (
                <div className="card" key={index}>
                    <div className="question">{card.question}</div>
                    <div className="answer">{card.answer}</div>
                </div>
            ))}
        </div>
    );
};
   
   export default CardQuestion;