import CardList from './components/cardlist/CardList'
import SearchBox from './components/searchbox/SearchBox'
import { useState, useEffect } from 'react'
import Scroll from './components/scroll/Scroll'
import './App.css'

const App = () => {
  const [searchField, setSearchField] = useState("")

  const [getData, setgetData] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setgetData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])

  let filtered = getData.filter((ro) => ro.name.toLowerCase().includes(searchField.toLowerCase()))

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  return (
    <>
      <h1 className='tc bg-blue black'>RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filtered} />
      </Scroll>
    </>
  )
}

export default App