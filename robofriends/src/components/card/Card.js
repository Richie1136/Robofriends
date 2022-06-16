
const Card = ({ name, email, id }) => (
  <>
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}`} alt="Card img" height="200px" width="200px" />
      <div>
        <h2>{name} </h2>
        <p>{email}</p>
      </div>
    </div>
  </>
)

export default Card