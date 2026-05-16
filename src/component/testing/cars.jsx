import { useEffect, useState } from "react";
import { sliderProducts } from "../../data/woodProducts";
import "./cars.css";

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);

  const totalCards = sliderProducts.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex((i) =>
      Math.min(i, Math.max(0, totalCards - visibleCards))
    );
  }, [visibleCards, totalCards]);

  const next = () => {
    setCurrentIndex((i) =>
      i < totalCards - visibleCards ? i + 1 : 0
    );
  };

  const prev = () => {
    setCurrentIndex((i) =>
      i > 0 ? i - 1 : totalCards - visibleCards
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) =>
        i < totalCards - visibleCards ? i + 1 : 0
      );
    }, 3500);
    return () => clearInterval(interval);
  }, [totalCards, visibleCards]);

  return (
    <div
      className="slider-container"
      style={{
        "--slides-visible": visibleCards,
        "--total": totalCards,
        "--index": currentIndex,
      }}
    >
      <button type="button" className="arrow left" onClick={prev} aria-label="Previous">
        &#8249;
      </button>

      <div className="slider-view">
        <div
          className="slider-track"
          style={{
            transform:
              "translateX(calc(-1 * var(--index) * 100% / var(--total)))",
          }}
        >
          {sliderProducts.map((product) => (
            <article className="card" key={product.id}>
              <img src={product.image} alt={product.name} loading="lazy" />
              <h4>{product.name}</h4>
              <p className="card__price">{product.price}</p>
            </article>
          ))}
        </div>
      </div>

      <button type="button" className="arrow right" onClick={next} aria-label="Next">
        &#8250;
      </button>
    </div>
  );
};

export default CardSlider;
