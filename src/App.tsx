import React from "react";
import "./App.css";
import Select from "./components/Select";
import {
  RED,
  YELLOW,
  BLUE,
  GRAY,
  PURPLE,
  PINK,
  OTHER,
} from "./components/Select";

const width = window.innerWidth;
const height = window.innerHeight;
const MARGIN = 20;

function App() {
  const [colors, setColor] = React.useState([""]);
  const [category, setCategory] = React.useState("");

  function exportColor() {
    let colorArray = [];
    for (let c = 0; c < 40; c++) {
      colorArray.push(randomColorRgb());
    }
    setColor(colorArray);
  }
  React.useEffect(() => {
    exportColor();
    console.log("Color", colors);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Gallery App</p>
        <div
          className="App-header-box"
          style={{ marginLeft: MARGIN, marginBottom: MARGIN / 4 }}
        >
          <Select value={category} onChange={handleOnChange} />
          {category}
          <div />
        </div>
        <div className="App-header-container">
          {colors.map((color, index) => {
            return (
              <div className="App-color-components">
                <div
                  className="App-color-image"
                  style={{
                    ...styles.image,
                    backgroundColor: color,
                    marginRight: MARGIN / 4,
                    marginBottom: MARGIN / 4,
                  }}
                />
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

function randomColorRgb() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${blue}, ${green})`;
}

const styles = {
  image: {
    marginHorizontal: MARGIN,
    width: width / 5 - MARGIN,
    height: height / 9 - (MARGIN / 4) * 1.5,
  },
};

export default App;
