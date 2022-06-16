
const SearchBox = ({ onSearchChange }) => (
  <div className="pa2 tc">
    <input className="pa3 ba b--green bg-lightest-blue" type="text" placeholder="Search for Robots" onChange={onSearchChange} />
  </div>
)

export default SearchBox