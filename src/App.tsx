import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Pipit</div>
        <nav className="nav">
          <button className="nav-button">Button 1</button>
          <button className="nav-button">Button 2</button>
          <button className="nav-button">Button 3</button>
          <button className="nav-button">Button 4</button>
        </nav>
      </header>
      <main className="main">
        <h1 className="title">Welcome to the Pipit App</h1>
        <p className="description">
          Explore the app and see the minimalist design in action.
        </p>
      </main>
    </div>
  );
}

export default App;
