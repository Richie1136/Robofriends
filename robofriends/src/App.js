import Card from './components/card/Card'
import { robots } from './Robots'

console.log(robots.name)

const App = () => (
  <>
    <h1 className='tc bg-blue red'>RoboFriends</h1>
    {robots.map((robot) => (
      <Card key={robot.id} name={robot.name} email={robot.email} />
    ))}
  </>
)

export default App