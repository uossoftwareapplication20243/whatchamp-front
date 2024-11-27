import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';
import AnswerSelector from '../components/selector/answer_selector';


const QuestionPage6 = () => {
  const navigate = useNavigate();
  const { questionMap, setQuestionMap } = useQuestionContext();

  const intro = "심리싸움 좋아하십니까"
  const options = [
    "네! 심리싸움 이기면\n너무 재밌죠",
    "아뇨. 저한테만\n집중하고 싶어요"
  ];

  const handleButtonClick = (option) => {
    setQuestionMap({
      ...questionMap,
      q6: option,
    });
    navigate('/question7');
  };

  return (
    <AnswerSelector
      title={intro}
      options={options}
      handleButtonClick={handleButtonClick}
      idx={6}
    />
  );
};

export default QuestionPage6;