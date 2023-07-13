import { useEffect } from 'react';
import { useState } from 'react';

export default function Carousel({ images }) {
  const [pokemonIndx, setPokemonIndx] = useState(0);

  function pokemonSlider() {
    const intervalId = setInterval(
      () => setPokemonIndx((pokemonIndx + 1) % images.length),
      3000
    );
    return () => clearInterval(intervalId);
  }
  useEffect(pokemonSlider, [pokemonIndx, images]);

  // render a list of dots
  const dotArr = [];
  for (let i = 0; i < images.length; i++) {
    const circleType = images[i].id === pokemonIndx ? 'fa-solid' : 'fa-regular';
    dotArr.push(
      <i
        key={images[i].id}
        onClick={() => setPokemonIndx(images[i].id)}
        className={`dot fa-circle ${circleType}`}
      />
    );
  }

  console.log(dotArr);
  return (
    <div className="container">
      <h2 className="name">{images[pokemonIndx].name}</h2>
      <div className="image-arrows">
        <i
          className="arrow left-arrow fa-solid fa-chevron-left"
          onClick={() =>
            setPokemonIndx((pokemonIndx + images.length - 1) % images.length)
          }></i>
        <img src={images[pokemonIndx].src} alt={images[pokemonIndx].alt} />
        <i
          className="arrow right-arrow fa-solid fa-chevron-right"
          onClick={() => setPokemonIndx((pokemonIndx + 1) % images.length)}></i>
      </div>

      <div className="dot-bar">{dotArr}</div>
    </div>
  );
}
