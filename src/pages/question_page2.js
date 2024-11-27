import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';
import AnswerSelector from '../components/selector/answer_selector';

const QuestionPage2 = () => {
  const navigate = useNavigate();
  const { questionMap, setQuestionMap } = useQuestionContext();

  const intro = "어떤 챔피언을 하고 싶나요?"
  const options = [
    "즐길 수 있는\n챔피언",
    "이길 수 있는\n챔피언"
  ];

  const handleButtonClick = (option) => {
    setQuestionMap({
      ...questionMap,
      q2: option,
    });
    navigate('/question3');
  };

  return (
    <AnswerSelector
      title={intro}
      options={options}
      handleButtonClick={handleButtonClick}
      idx={2}
    />
  );
};

export default QuestionPage2;