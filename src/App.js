import React, {useState} from "react";
import Card from "./components/Card";
import "./App.scss";

function App() {
  const [data] = useState([
    {
      id: "1",
      title: "Нямушка",
      taste: "с фуарга",
      portions: "10",
      present: "1",
      count: "0,5",
      measure: "кг",
      description: "Печень утки разварная с артишоками.",
      inStock: 1,
    },
    {
      id: "2",
      title: "Нямушка",
      taste: "с рыбой",
      portions: "40",
      present: "2",
      count: "2",
      measure: "кг",
      description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      inStock: 1,
    },
    {
      id: "3",
      title: "Нямушка",
      taste: "с курой",
      portions: "100",
      present: "5",
      count: "5",
      measure: "кг",
      description: "Филе из цыплят с трюфелями в бульоне.",
      inStock: 0,
    },
  ]);

  return (
    <main className="main">
      <h1 className="main__title">Ты сегодня покормил кота?</h1>
      <section className="main__cards">
        {data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
