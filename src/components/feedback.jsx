export const Feedback = ({ onClickBad, onClickNeutral, onClickGoog, totalClick }) => {
    return (
        <>
            <div>
                <p>Please leave Feedback</p>
            </div>
            <div>
                <button onClick={() => { onClickGoog(); totalClick(); }}>Good</button>
                <button onClick={() => { onClickNeutral(); totalClick(); }}>Neutral</button>
                 <button onClick={() => { onClickBad(); totalClick(); }}>Bad</button>
            </div>
        </>
    )
}