function CarouselCard(props) {
  let {name, image} = props;

  return (
    <div class="card" style={{
      background: `url(${image})`,
      backgroundSize: "cover"
    }}>
      <div>{name}</div>
    </div>
  )
}

export default CarouselCard;
