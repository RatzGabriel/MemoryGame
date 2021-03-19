import React, { useState } from "react";
import Display from "./components/Display";
import "./App.css";

const App = () => {
  const imageDB = [
    {
      url: "/images/30.jpeg",
      id: 0,
    },
    {
      url: "/images/1.jpeg",
      id: 1,
    },
    {
      url: "/images/2.jpeg",
      id: 2,
    },
    {
      url: "/images/3.jpeg",
      id: 3,
    },
    {
      url: "/images/4.jpeg",
      id: 4,
    },
    {
      url: "/images/5.jpeg",
      id: 5,
    },
    {
      url: "/images/6.jpeg",
      id: 6,
    },
    {
      url: "/images/7.jpeg",
      id: 7,
    },
    {
      url: "/images/8.jpeg",
      id: 8,
    },
    {
      url: "/images/9.jpeg",
      id: 9,
    },
    {
      url: "/images/10.jpeg",
      id: 10,
    },
    {
      url: "/images/11.jpeg",
      id: 11,
    },
    {
      url: "/images/12.jpeg",
      id: 12,
    },
    {
      url: "/images/13.jpeg",
      id: 13,
    },
    {
      url: "/images/14.jpeg",
      id: 14,
    },
    {
      url: "/images/15.jpeg",
      id: 15,
    },
    {
      url: "/images/16.jpeg",
      id: 16,
    },
    {
      url: "/images/17.jpeg",
      id: 17,
    },
    {
      url: "/images/18.jpeg",
      id: 18,
    },
    {
      url: "/images/19.jpeg",
      id: 19,
    },
    {
      url: "/images/20.jpeg",
      id: 20,
    },
    {
      url: "/images/21.jpeg",
      id: 21,
    },
    {
      url: "/images/22.jpeg",
      id: 22,
    },
    {
      url: "/images/23.jpeg",
      id: 23,
    },
    {
      url: "/images/24.jpeg",
      id: 24,
    },
    {
      url: "/images/25.jpeg",
      id: 25,
    },
    {
      url: "/images/26.jpeg",
      id: 26,
    },
    {
      url: "/images/27.jpeg",
      id: 27,
    },
    {
      url: "/images/28.jpeg",
      id: 28,
    },
    {
      url: "/images/29.jpeg",
      id: 29,
    },
  ];

  const [images, setImages] = useState(imageDB);
  const [clickedImg, setclickedImg] = useState([35]);
  const [highScore, setHighScore] = useState(0);
  const [counter, setCounter] = useState(0);
  let rand = [];

  const higher = () => {
    setHighScore(counter);
  };

  const won = () => {
    setCounter(0);
    setImages(imageDB);
    if (counter > highScore) {
      higher();
    }
  };

  const updateImages = (e) => {
    if (clickedImg.includes(e)) {
      won();
      alert("ALREADY CLICKED, GAME LOST");
      return;
    }
    setCounter((item) => {
      return item + 1;
    });
    setclickedImg((item) => {
      return [...item, e];
    });
  };

  const rando = () => {
    while (rand.length < 30) {
      const randItem = imageDB[Math.floor(Math.random() * imageDB.length)];
      if (rand.includes(randItem)) {
        continue;
      }
      rand.push(randItem);
    }

    return rand.map((item) => {
      return (
        <Display
          item={item.id}
          updateImages={updateImages}
          setImages={setImages}
          images={images}
        />
      );
    });
  };

  return (
    <div>
      <div class="text">
        <h1>Score:{counter}</h1>
        <h1>HighScore: {highScore}</h1>
      </div>
      <div className="cont">{rando()}</div>
    </div>
  );
};

export default App;
