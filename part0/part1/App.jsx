import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
          <div>
      <StatisticLine text="good" value={" "} />
      <StatisticLine text="neutral" value={" "} />
      <StatisticLine text="bad" value={" "} />
      
    </div>
    </div>
  )
}

export default App