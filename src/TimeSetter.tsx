import {FaArrowDown, FaArrowUp} from 'react-icons/fa'

interface TimeSetterProps {
    time: number
    setTime: (time: number) => void
    min: number;
    max: number;
    interval: number;
    type: "break" | "session";
}

const TimeSetter: React.FC<TimeSetterProps> = ({
    time,
    setTime,
    min,
    max,
    interval,
    type,

}) => {
    return(
        <div>
            <button onClick={() => (time > min ? setTime(time - interval) : null)}
            id={`${type}-decrement`}
            >
                <FaArrowDown />
            </button>
            <span id={`${type} - Length`}>{time / interval}</span>
            <button onClick={() => (time < max ? setTime(time + interval) : null)}
            id={`${type}-increment`}
            >
                <FaArrowUp />
            </button>
        </div>
    )
}

export default TimeSetter