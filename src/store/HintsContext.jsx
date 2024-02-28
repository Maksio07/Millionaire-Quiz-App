import { createContext, useState } from "react";

export const HintsContext = createContext({
    filterAnswers: () => {},
    fiftyPercent: '',
    fiftyPercBtnDisabled: ''
})

export default function HintsContextProvider ({children}) {
    const [fiftyPercIsClicked, setFiftyPercIsClicked] = useState('')

	function handleFiftyPercIsClicked() {
		setFiftyPercIsClicked('clicked')
	}

    const ctxValue = {
        filterAnswers: handleFiftyPercIsClicked,
        fiftyPercent: fiftyPercIsClicked,
        fiftyPercBtnDisabled: fiftyPercIsClicked === 'clicked' ? 'disabled' : ''
    }

    console.log(ctxValue.fiftyPercBtnDisabled);

    return <HintsContext.Provider value={ctxValue}>{children}</HintsContext.Provider>
}