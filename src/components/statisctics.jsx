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
                <p>Value: {value}</p>
                <p>Result: {result}</p>
            </div>
        )
    }
}