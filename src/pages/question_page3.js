import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';
import AnswerSelector from '../components/selector/answer_selector';

const QuestionPage3 = () => {
  const navigate = useNavigate();
  const { questionMap, setQuestionMap } = useQuestionContext();

  const intro = "어떤 챔피언을 하고 싶나요?"
  const options = [
    "공격적인\n챔피언",
    "수비적인\n챔피언"
  ];

  const handleButtonClick = (option) => {
    setQuestionMap({
      ...questionMap,
      q3: option,
    });
    navigate('/question4');
  };

  return (
    <AnswerSelector
      title={intro}
      options={options}
      handleButtonClick={handleButtonClick}
      idx={3}
    />
  );
};

export default QuestionPage3;