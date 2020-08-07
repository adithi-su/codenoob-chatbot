import React from "react";
import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "DSA", 
      handler: props.actionProvider.handleDSAList,
      id: 1 },
    { text: "Competitive Programming",
      handler: props.actionProvider.handleCPList, 
      id: 2 },
    { text: "APIs",
     handler: props.actionProvider.handleAPIList, 
     id: 3 },
    { text: "Javascript",
     handler: props.actionProvider.handleJavascriptList, 
     id: 4 },
    { text: "Machine Learning", 
    handler: props.actionProvider.handleMLList, 
    id: 5 },
  ];
const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));
return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default  LearningOptions;