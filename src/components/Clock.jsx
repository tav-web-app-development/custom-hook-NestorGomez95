import useTime from "./useTime";

function Clock() {
    const currentTime = useTime();
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  
    return (
      <div>
        <h1>Montreal hour:</h1>
        <p>{formattedTime}</p>
      </div>
    );
  }
  
  export default Clock;