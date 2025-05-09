export default function Timer() {
    const handleStart = () => {
      console.log("🔄 Timer started at", new Date().toISOString());
    };
  
    return (
      <button onClick={handleStart}>Start Timer</button>
    );
  }
  // Timer placeholder
