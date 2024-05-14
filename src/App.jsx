import React, { useState } from 'react';
import { Feedback } from './components/Feedback';
import { Statistics } from './components/Statistics';

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [value, setValue] = useState(0);

    const onClickGood = () => {
        setGood(prevValue => prevValue + 1);
        countTotalFeedback();
    };

    const onClickNeutral = () => {
        setNeutral(prevValue => prevValue + 1);
        countTotalFeedback();
    };

    const onClickBad = () => {
        setBad(prevValue => prevValue + 1);
        countTotalFeedback();
    };

    const countTotalFeedback = () => {
        setValue(prevValue => prevValue + 1);
    };

    return (
        <>
            <Feedback
                onClickGood={onClickGood}
                onClickNeutral={onClickNeutral}
                onClickBad={onClickBad}
            />
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                value={value}
            />
        </>
    );
};