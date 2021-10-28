import "./card.css";

export const Card = (props) => {
  const cssClass = props.title.toLowerCase();
  console.log(cssClass);

  return (
    <div className={`card ${cssClass}`}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <button className={`${cssClass}-btn`}>Learn More</button>
    </div>
  );
};
