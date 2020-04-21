import React, {useState} from "react";

const QuestionBox = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="container mt-5">
    <div className="modal-dialog">
      <div className="modal-content">
         <div className="modal-header">
          <h3><span className="label label-warning" id="qid">1</span> {question}</h3>
        </div>
       {answer.map((text, index) => (
        <div className="quiz" id="quiz" data-toggle="buttons">
        <label className="element-animation1 btn btn-lg btn-primary btn-block" 
        style={{backgroundColor: "#3395d2"}}>
        <span className="btn-label"
          key={index}
          className="answerBtn"
          onClick={() => {
          setAnswer([text]);
          selected(text);
        }}>
        <i className="glyphicon glyphicon-chevron-right"></i>{text}
        </span>        
        </label>
        </div> 

      ))}                
      </div>
      </div>
      </div>
  );
};

export default QuestionBox;
