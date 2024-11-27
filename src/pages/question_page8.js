import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';
import MultiOptionsSelector from '../components/selector/multi_options_selector';

const QuestionPage8 = () => {
  const navigate = useNavigate();
  const { questionMap, setQuestionMap, username, tag } = useQuestionContext();
  const intro = "나의 조별과제 스타일은?";
  const options = [
    "무조건 리더",
    "답답하면 리더",
    "그냥.. 열심히 해요",
    "버스타고 싶은데요? ㅎㅎ"
  ];

  const handleButtonClick = (option) => {
    // Update questionMap with the answer for q8
    setQuestionMap({
      ...questionMap,
      q8: option,
    });
    navigate('/new_result');
  };

  useEffect(() => {
    // Check if q8 has been set in questionMap before sending to backend
    if (questionMap.q8) {
      const sendQuestionMap = async () => {
      try {
          console.log(questionMap);
          const response = await fetch(
          `http://3.35.3.104:3000/api/answers/${username}${tag}`, {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(questionMap)
            }
          );
          const data = await response.json();
          console.log(data);
          navigate('/new_result');
        } catch (error) {
          console.error('Error sending data:', error);
      }
      };

      sendQuestionMap();
    }
  }, [questionMap, username, tag, navigate]);

  return (
    <MultiOptionsSelector
      title={intro}
      options={options}
      handleButtonClick={handleButtonClick}
      idx={8}
    />
  );
};

export default QuestionPage8;
