import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
// CSS FILE LINK
import "./App.css"

function App() {
  return (
    <section className="container">
      <div className="clock_content">
        <h1>Hello, I'm Vivek</h1>
        <h3>Stay tuned for something amazing.</h3>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + 144 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        {/* <button className="button">Notify Me</button> */}
      </div>
    </section>
  );
}

export default App;
