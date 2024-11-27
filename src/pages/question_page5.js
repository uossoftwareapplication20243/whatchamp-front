import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';
import AnswerSelector from '../components/selector/answer_selector';

const QuestionPage5 = () => {
  const navigate = useNavigate();
  const { questionMap, setQuestionMap } = useQuestionContext();

  const intro = "어떤 챔피언을 하고 싶나요?"
  const options = [
    "많이 쓰는\n챔피언",
    "유니크한\n챔피언"
  ];

  const handleButtonClick = (option) => {
    setQuestionMap({
      ...questionMap,
      q5: option,
    });
    navigate('/question6');
  };

  return (
    <AnswerSelector
      title={intro}
      options={options}
      handleButtonClick={handleButtonClick}
      idx={5}
    />
  );
};

export default QuestionPage5;