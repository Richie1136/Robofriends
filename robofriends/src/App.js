import React from 'react'
import Card from './components/card/Card'
import { robots } from './Robots'

const App = () => (
  <>
    {robots.map((robot) => (

      <Card key={robot.id} name={robot.name} email={robot.email} />
    ))}
  </>
)

export default App