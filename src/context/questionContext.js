import { createContext, useContext, useState } from "react";

const QuestionContext = createContext(null);

export default function QuestionProvider ({children}) { 
    const [questionMap, setQuestionMap] = useState({})

    return (
        <QuestionContext.Provider value={{questionMap, setQuestionMap}}>
            {children}
        </QuestionContext.Provider>
    )
}

export function useQuestionContext() {
    return useContext(QuestionContext);
}
