import CardList from './components/cardlist/CardList'
import { robots } from './Robots'
import SearchBox from './components/searchbox/SearchBox'
import { useState } from 'react'

const App = () => {
  const [robot, setRobot] = useState(robots)
  const [searchField, setSearchField] = useState("")

  let filtered = robot.filter((ro) => ro.name.toLowerCase().includes(searchField.toLowerCase()))

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  return (
    <>
      <h1 className='tc bg-blue red'>RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList robots={filtered} />
    </>
  )
}

export default App