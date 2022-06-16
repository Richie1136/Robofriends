import CardList from './components/cardlist/CardList'
import { robots } from './Robots'
import SearchBox from './components/searchbox/SearchBox'


const App = () => (
  <>
    <h1 className='tc bg-blue red'>RoboFriends</h1>
    <SearchBox />
    <CardList robots={robots} />
  </>
)

export default App