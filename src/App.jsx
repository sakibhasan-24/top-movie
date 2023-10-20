import "./App.css";

const movieList = [
  {
    id: 1,
    movieName: "The Shawshank Redemption",
    imdbRating: 9.3,
    pictureUrl:
      "https://ntvb.tmsimg.com/assets/p15987_v_h8_ac.jpg?w=1280&h=720",
    title: "Drama Behind Bars",
    casting: ["Tim Robbins", "Morgan Freeman"],
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    isOscar: true,
    category: "thriller",
  },
  {
    id: 2,
    movieName: "The Godfather",
    imdbRating: 9.2,
    pictureUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
    title: "The Mafia Saga",
    casting: ["Marlon Brando", "Al Pacino"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    isOscar: true,
  },
  {
    id: 3,
    movieName: "The Dark Knight",
    imdbRating: 9.0,
    pictureUrl:
      "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    title: "Gotham's Guardian",
    casting: ["Christian Bale", "Heath Ledger"],
    description:
      "When the Joker wreaks havoc on Gotham City, the caped crusader must confront one of his greatest psychological and physical tests.",
    isOscar: true,
    category: "thriller",
  },
  {
    id: 4,
    movieName: "Inception",
    imdbRating: 8.8,
    pictureUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/26677df38123a3a1553d704477c100af81b641e1d539bc1991f99f89935f18b0.jpg",
    title: "Dreams Within Dreams",
    casting: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    description:
      "A thief who enters the dreams of others to steal their secrets is given a final job that involves planting an idea into the mind of a CEO.",
    isOscar: true,
  },
  {
    id: 5,
    movieName: "Pulp Fiction",
    imdbRating: 8.9,
    pictureUrl:
      "https://www.hollywoodreporter.com/wp-content/uploads/2015/02/pulp_fiction_a_h.jpg?w=3000",
    title: "Crime and Redemption",
    casting: ["John Travolta", "Samuel L. Jackson"],
    description:
      "Various interconnected stories of crime and redemption play out in the criminal underworld of Los Angeles.",
    isOscar: true,
  },
  {
    id: 6,
    movieName: "Schindler's List",
    imdbRating: 8.9,
    pictureUrl:
      "https://i.guim.co.uk/img/media/208d00c732eeed823ec55afe35faf252843e0c59/0_47_2520_1512/master/2520.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2afc817c2c585aa9342fa808b7b4decd",
    title: "A Holocaust Hero",
    casting: ["Liam Neeson", "Ralph Fiennes"],
    description:
      "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    isOscar: true,
    category: "thriller",
  },
  {
    id: 7,
    movieName: "Forrest Gump",
    imdbRating: 8.8,
    pictureUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/707d3da8c5a899ae82416fbec4a26bef3420d95b674bb2093745eecf615a3d47.jpg",
    title: "Life is Like a Box of Chocolates",
    casting: ["Tom Hanks", "Robin Wright"],
    description:
      "The life story of a man with low intelligence who inadvertently influences several historical events in the 20th century.",
    isOscar: true,
  },
  {
    id: 8,
    movieName: "The Matrix",
    imdbRating: 8.7,
    pictureUrl:
      "https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF1000,1000_QL80_.jpg",
    title: "A World of Illusion",
    casting: ["Keanu Reeves", "Laurence Fishburne"],
    description:
      "A computer hacker discovers a dystopian world ruled by machines and joins a rebellion to break free from the simulated reality known as the Matrix.",
    isOscar: false,
    category: "thriller",
  },
  {
    id: 9,
    movieName: "Avatar",
    imdbRating: 7.8,
    pictureUrl:
      "https://hips.hearstapps.com/hmg-prod/images/index-avatar-1665421955.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=1200:*",
    title: "Journey to Pandora",
    casting: ["Sam Worthington", "Zoe Saldana"],
    description:
      "A paraplegic marine is dispatched to the moon Pandora on a unique mission and becomes torn between following orders and protecting the world he feels is his home.",
    isOscar: true,
  },
  {
    id: 10,
    movieName: "Interstellar",
    imdbRating: 8.6,
    pictureUrl:
      "https://static1.squarespace.com/static/5a78ab8490badee028bef0e9/t/5d840e597d51593a02b10357/1568935527866/Interstellar.jpg?format=1500w",
    title: "Exploring the Stars",
    casting: ["Matthew McConaughey", "Anne Hathaway"],
    description:
      "A group of explorers leaves Earth to travel through a wormhole in search of a new habitable planet as humanity faces a global food crisis.",
    isOscar: false,
  },
  {
    id: 11,
    movieName: "The Social Network",
    imdbRating: 7.7,
    pictureUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
    title: "The Facebook Revolution",
    casting: ["Jesse Eisenberg", "Andrew Garfield"],
    description:
      "The story of the creation and rise of Facebook, as well as the legal battles that followed its success.",
    isOscar: true,
    category: "thriller",
  },
  {
    id: 12,
    movieName: "The Revenant",
    imdbRating: 8.0,
    pictureUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/The_Revenant_2015_film_poster.jpg/220px-The_Revenant_2015_film_poster.jpg",
    title: "Survival in the Wilderness",
    casting: ["Leonardo DiCaprio", "Tom Hardy"],
    description:
      "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    isOscar: true,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Progress />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;

function Progress() {
  return (
    <section className="progress">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="learning">
        <h2>step : LOg in</h2>
      </div>
      <div className="btn">
        <button style={{ backgroundColor: "purple" }}>Prev</button>
        <button style={{ backgroundColor: "purple", color: "#000" }}>
          Next
        </button>
      </div>
    </section>
  );
}

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
function Movie(props) {
  // movie thriller
  return (
    <div
      className={`movie ${
        props.movie.category === "thriller" ? "thriller" : ""
      }`}
    >
      <div className="img-container">
        <img src={props.movie.pictureUrl} alt="images" />
      </div>
      <div className="info">
        <h1 className="movie-name">{props.movie.movieName}</h1>
        <h3 className="title">{props.movie.title}</h3>
        <p className="description">{props.movie.description}</p>
        <h1 className="rating">
          IMDB: <span>{props.movie.imdbRating}</span>
        </h1>
      </div>
    </div>
  );
}
function Movies() {
  return (
    // 12 movie
    <main className="main-container">
      <div className="movies">
        {movieList.map((movie) => (
          <Movie key={movie.id} movie={movie}></Movie>
        ))}
      </div>
    </main>
  );
}
function Footer() {
  const date = new Date();
  const footerStyle = {
    textAlign: "center",
    fontSize: "4rem",
    color: "#fff",
    letterSpacing: ".9rem",
  };
  return (
    <footer className="footer">
      <h3 style={footerStyle}>
        last updated <span>{date.getFullYear()}</span>
      </h3>
    </footer>
  );
}

/* 

what is our goal
how to watch-> title
step 1 log in
step 2 select category
step three pay

*/
