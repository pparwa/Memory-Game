import './Card.css'

export default function Card({src , handelChoice , card ,fliped}) {

  return (
    <div className="Card">
      <img src={src} alt="" />
      <img
        src="image/cover.png"
        onClick={() => handelChoice(card)}
        alt=""
        className={fliped ? "hide" : ""}
      />
    </div>
  );
}
