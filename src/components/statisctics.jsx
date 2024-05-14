import React from 'react';
import PropTypes from 'prop-types';


export const Statistics = ({ good, neutral, bad, value, result }) => {
    result = 0;

    if (good !== 0) {
        result = (good / value) * 100;
        result = (result.toFixed(2))
    }

    if (value === 0) {
        return (
            <div>
                No Feedback given
            </div>
        )
    }
    else {
        return (
            <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {value}</p>
                <p>Positive feedback: {result}</p>
            </div>
        )
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};