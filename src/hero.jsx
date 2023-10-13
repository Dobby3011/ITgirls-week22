//import ' ./hero.css';

function Hero(props) {
    return (
        <div className="hero">
            <h2>{props.name}</h2>
            <p> Вселенная: {props.universe}</p>
            <p> Альтер Эго: {props.alterego}</p>
            <p> Род деятельности: {props.occupation}</p>
            <p> Друзья: {props.friends}</p>
            <div className="info">{props.info}</div>
            <img src={props.url} />

        </div>
    );
}

export default Hero;