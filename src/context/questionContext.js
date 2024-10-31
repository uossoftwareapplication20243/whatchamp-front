import { createContext, useContext, useState } from "react";

const QuestionContext = createContext(null);

export default function QuestionProvider ({children}) { 
    const [questionMap, setQuestionMap] = useState({})
    const [line, setLine] = useState({})

    return (
        <QuestionContext.Provider value={{questionMap, setQuestionMap, line, setLine}}>
            {children}
        </QuestionContext.Provider>
    )
}

export function useQuestionContext() {
    return useContext(QuestionContext);
}
