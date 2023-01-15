function CardDish({ dish }) {
  return (
    <div className="dish-card">
      <h1>{dish.name}</h1>
      <img className="dish-img" src={dish.img} alt="dish"></img>
      <p className="dish-description">{dish.description}</p>
    </div>
  );
}

export default CardDish;
