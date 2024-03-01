import './Box.css';

// eslint-disable-next-line react/prop-types
const Box = ({title, subtitle, image, link}) => {

  return (
    <div className="Box">
        <p>{title}<br></br>{subtitle}</p>
        <img src={image}></img>
        <br></br>
        <a href={link} target='_blank'>
            <button>Buy Game</button>
        </a>
    </div>
  )
}

export default Box