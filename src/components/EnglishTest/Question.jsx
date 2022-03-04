const Question = (props) => {
  <>
    <h1>{props.question}</h1>
    <ul>
      {props.answers.map((answer, index) => {
        return props.activeIndex === index ? (
          <li
            key={index}
            style={{ color: "blue" }}
            onClick={() => {
              props.onSelectAnswer(index);
            }}
          >
            {answer}
          </li>
        ) : (
          <li
            key={index}
            onClick={() => {
              props.onSelectAnswer(index);
            }}
          >
            {answer}
          </li>
        );
      })}
    </ul>
    <button onClick={props.onSubmitAnswer}>Send</button>
  </>;
};
export default Question;
