import Card from '../Card/Card'

function Column({ title }) {
  const cards = [1, 2, 3, 4, 5]

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((item) => (
          <Card key={item} />
        ))}
      </div>
    </div>
  )
}

export default Column