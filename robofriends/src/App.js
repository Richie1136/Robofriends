import CardList from './components/cardlist/CardList'
import { robots } from './Robots'
import SearchBox from './components/searchbox/SearchBox'
import { useState } from 'react'

console.log(robots)

const App = () => {
  const [Robots, setRobots] = useState(robots)
  const [searchField, setSearchField] = useState("")

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  return (
    <>
      <h1 className='tc bg-blue red'>RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList robots={Robots} />
    </>
  )
}

export default App