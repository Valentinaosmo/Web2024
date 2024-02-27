// En el componente Movies
export function Movies(props) {
  const { url, title , text , price} = props;
  return (
    <div className='movie-box'>
      <img src={url} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <strong>{price}</strong>
    </div>
  );
}
