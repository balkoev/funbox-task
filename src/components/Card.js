import React, {useEffect, useState} from "react";
import "../App.scss";
import {declension} from "../helpers";

function Card({data}) {
  const [isSelected, setIsSelected] = useState(false);
  const [cardType, setCardType] = useState("default");
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const [firstSelect, setFirstSelect] = useState(false);

  useEffect(() => {
    if (isSelected && data.inStock > 0) {
      setCardType("selected");
    } else if (!isSelected && data.inStock > 0) {
      setCardType("default");
    } else {
      setCardType("disabled");
    }
  }, [isSelected, data]);

  const handleClick = (event) => {
    setIsSelected(!isSelected);
    setFirstSelect(true);
  };

  const enterMouse = () => {
    setMouseOnCard(true);
  };

  const leaveMouse = () => {
    setMouseOnCard(false);
    setFirstSelect(false);
  };

  const buy = (
    <>
      Чего сидишь? Порадуй котэ,{" "}
      <span className="card__humor--link" onClick={handleClick}>
        купи
      </span>
      .
    </>
  );

  return (
    <article className="main__card">
      <div
        className={`card card--${cardType}`}
        onClick={handleClick}
        onPointerEnter={enterMouse}
        onPointerLeave={leaveMouse}>
        <header className="card__header">
          <div className="card__corner"></div>
          <div className="card__rectangle">
            {isSelected &&
            mouseOnCard &&
            !firstSelect &&
            cardType !== "disabled" ? (
              <p className={"card__slogan card__slogan--selected"}>
                Котэ не одобряет?
              </p>
            ) : (
              <p className={"card__slogan"}>Сказочное заморское яство</p>
            )}
          </div>
        </header>
        <div className="card__body">
          <header className="card__body-header">
            <h2 className="card__title">{data.title}</h2>
            <p className="card__taste">{data.taste}</p>
            <p className="card__portions">
              <span className="card__portions--bold">{data.portions}</span>{" "}
              порций
            </p>
            <p className="card__present">
              {data.present > 1 && data.present < 5
                ? data.present + " " + declension(data.present)
                : data.present >= 5
                ? data.present +
                  " " +
                  declension(data.present) +
                  " " +
                  "заказчик доволен"
                : declension(data.present)}
            </p>
          </header>
          <footer className="card__footer">
            <div className="card__weight card__weigth--default">
              <p className="card__count">{data.count}</p>
              <p className="card__measure">{data.measure}</p>
            </div>
          </footer>
        </div>
      </div>

      {cardType === "disabled" ? (
        <p className="card__humor card__humor--disabled">
          Печалька, {data.taste} закончился.
        </p>
      ) : (
        <p className="card__humor">{isSelected ? data.description : buy}</p>
      )}
    </article>
  );
}

export default Card;
