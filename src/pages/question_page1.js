import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestionContext } from '../context/questionContext';
import MultiSelector from '../components/selector/multi_selector';

const QuestionPage1 = () => {
  const [selectedJobs, setSelectedJobs] = useState([]);
  const navigate = useNavigate();
  const {questionMap, setQuestionMap} = useQuestionContext()
  const intro = "좋아하는 직업군은?";

  const jobs = [
    '전사', '마법사', '암살자',
    '원거리 딜러', '탱커', '서포터'
  ];

  const handleJobToggle = (job) => {
    setSelectedJobs(prev => 
      prev.includes(job) ? prev.filter(j => j !== job) : [...prev, job]
    );
  };

  const handleNext = () => {
    setQuestionMap({
      ...questionMap,
      q1: selectedJobs,
    })
    navigate('/question2');
  };

  return (
    <MultiSelector
      title={intro}
      options={jobs}
      handleNext={handleNext}
      handleJobToggle={handleJobToggle}
      selectedJobs = {selectedJobs}
      idx={1}
    />
  );
};

export default QuestionPage1;