import CardList from './components/cardlist/CardList'
import { robots } from './Robots'


const App = () => (
  <>
    <h1 className='tc bg-blue red'>RoboFriends</h1>
    <CardList robots={robots} />
  </>
)

export default App