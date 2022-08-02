import { useState, useEffect, useRef } from 'react'

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}


export default function Home() {
  const [spins, setSpins] = useState('0')
  const [startSpin, setStartSpin] = useState(false)

  useInterval(() => {
    console.log('hit')
    if (startSpin) {
      setSpins(s => parseInt(s) + 1)
    }
  }, 500)


  return (
    <div className="meatspin">

      {!startSpin && (
        <div>
          <p>18+ Adults Only Content</p>
          <p 
            style={{ cursor: 'pointer'}}
            onClick={() => setStartSpin(true)}>
            Click Here To View
          </p>
        </div>
      )}

      {startSpin && (
        <div>
          <video width="500" height="300" autoPlay loop>
            <source type="video/mp4" src="spin.mp4" />
            <source type="video/webm" src="spin.webm" />
            <source type="video/ogg" src="spin.ogv" />
            Sorry, you can not play meatspin because your browser does not support video tag :(
          </video>

          <p className="text">You have sat through {spins} spins!</p>
        </div>

      )}


    </div>
  )
}
