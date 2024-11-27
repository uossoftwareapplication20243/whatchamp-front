import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';
import AnswerSelector from '../components/selector/answer_selector';


const QuestionPage7 = () => {
  const navigate = useNavigate();
  const { questionMap, setQuestionMap } = useQuestionContext();

  const intro = "자신의 마인드는?"
  const options = [
    "일단 내가 잘해야 한다",
    "내가 지더라도\n팀이 이기면 괜찮다"
  ];

  const handleButtonClick = (option) => {
    setQuestionMap({
      ...questionMap,
      q7: option,
    });
    navigate('/question8');
  };

  return (
    <AnswerSelector
      title={intro}
      options={options}
      handleButtonClick={handleButtonClick}
      idx={7}
    />
  );
};

export default QuestionPage7;