import React from 'react';
import PropTypes from 'prop-types';


export const Feedback = ({ onClickBad, onClickNeutral, onClickGood }) => {
    return (
        <>
            <div>
                <p>Please leave Feedback</p>
            </div>
            <div>
                <button onClick={onClickGood}>Good</button>
                <button onClick={onClickNeutral}>Neutral</button>
                <button onClick={onClickBad}>Bad</button>
            </div>
        </>
    );
};

Feedback.propTypes = {
    onClickBad: PropTypes.func.isRequired,
    onClickNeutral: PropTypes.func.isRequired,
    onClickGood: PropTypes.func.isRequired,
};
