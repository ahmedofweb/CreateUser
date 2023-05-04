import "./Card.css";
function Card({ events , setEvents }) {
  console.log(events);

  const handleDelete = (cardId) => {
    const newEvents = events.filter((event) => {
      return event.id !== cardId
    })
    setEvents(newEvents)
  }
  return (
    <div className="card-container">
      {events.map((event) => {
        const { url, name, name2, age, from, job, gender, id } = event;
        console.log("CCCCCCCCCC", url);
        return (
          <div className="card" key={id}>
            <div>
              <img
                className="image"
                src={`${url ? url : "../photo_profil.jpg"}`}
                alt=""
              />
              <button className="delete-card" onClick={() => handleDelete(id)}>🗑</button>
            </div>
            <h1 className="name">{name}</h1>
            <h3>
              Last name: <span>{name2}</span>
            </h3>
            <h3>
              Age : <span>{age}</span>
            </h3>
            <h3>
              From : <span>{from}</span>
            </h3>
            <h3>
              Job : <span>{job}</span>
            </h3>
            <h3>
              Gender : <span>{gender}</span>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
