import { useState } from 'react'
import './App.css'
import WetherActioneSection from './Componate/WetherActioneSection'
import WetherSearchSection from './Componate/WetherSearchSection'

function App() {
  const [chang, setChang] = useState(true);

  return (
    <>
      <div>
        {
          chang ? <WetherSearchSection setChang={setChang} /> :
            <WetherActioneSection />
        }
      </div>

    </>
  )
}

export default App
