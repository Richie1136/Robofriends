import Card from '../card/Card'

const CardList = ({ robots }) => (
  <>
    {robots.map((robot, i) => (
      <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    ))}
  </>
)

export default CardList