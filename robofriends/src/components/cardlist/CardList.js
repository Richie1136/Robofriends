import Card from '../card/Card'

const CardList = ({ robots }) => (
  <>
    {robots.map((robot) => (
      <Card key={robot.id} name={robot.name} email={robot.email} />
    ))}
  </>
)

export default CardList