import "./App.css";

function App() {
  return (
    <div>
      <h3>HEy</h3>
      <Header />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="header">
      <nav className="nav ">
        <ul>
          <li>Top</li>
        </ul>
        <ul className="type-nav">
          <li>Comedy</li>
          <li>SIFI</li>
          <li>Thriller</li>
        </ul>
      </nav>
    </header>
  );
}
function Movies() {}
function Footer() {}
