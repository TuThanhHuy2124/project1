import './Box.css';

// eslint-disable-next-line react/prop-types
const Box = ({title, image}) => {

  return (
    <div className="Box">
        <h2>{title}</h2>
        <img src={image}></img>
    </div>
  )
}

export default Box