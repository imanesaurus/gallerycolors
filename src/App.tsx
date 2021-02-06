import "./App.css";

const width = window.innerWidth;
const height = window.innerHeight;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Gallery App</p>
        <div className="App-color-components" style={styles.container}></div>
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
  container: {
    backgroundColor: randomColorRgb(),
    width: width / 5,
    height: height / 8,
  },
};

export default App;
