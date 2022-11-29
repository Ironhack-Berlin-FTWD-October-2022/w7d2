import "./App.css"
import { useState } from "react"
import MoviesList from "./MoviesList"

const moviesData = [
    {
        _id: "1ae23ef1",
        title: "The Godfather",
        director: "Francis Coppola",
        hasOscars: true,
        IMDBRating: 9.2,
    },
    {
        _id: "1ae23ef2",
        title: "Star Wars",
        director: "George Lucas",
        hasOscars: true,
        IMDBRating: 8.7,
    },
    {
        _id: "1ae23ef3",
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        hasOscars: false,
        IMDBRating: 9.3,
    },
    {
        _id: "1ae23ef4",
        title: "Jurassic Park",
        director: "Steven Spielberg",
        hasOscars: false,
        IMDBRating: 8.0,
    },
    {
        _id: "1ae23ef5",
        title: "Sharknado",
        director: "Anthony C. Ferrante",
        hasOscars: false,
        IMDBRating: 5.2,
    },
    {
        _id: "1ae23ef6",
        title: "Titanic",
        director: "James Cameron",
        hasOscars: true,
        IMDBRating: 8.9,
    },
]

function App() {
    const [movies, setMovies] = useState(moviesData)

    // Add "Interstellar" to the list
    const addMovie = () => {
        const newMovie = {
            _id: "1ae23ef7",
            title: "Interstellar",
            director: "Christopher Nolan",
            hasOscars: true,
            IMDBRating: 8.6,
        }

        setMovies([newMovie, ...movies])

        // You can also use slice():
        // const moviesCopy = movies.slice()
        // moviesCopy.push(newMovie)
        // setmovies(moviesCopy)
    }

    const deleteMovie = (id) => {
        const filteredMovies = movies.filter(movie => {
            return movie._id !== id
        })

        setMovies(filteredMovies)
    }

    return (
        <div className="App">
			<section>
				{movies
                .map((movie) => (
					<div key={movie._id}>
						<h3>{movie.title}</h3>
						<h5>{movie.director}</h5>
                        <button onClick={() => deleteMovie(movie._id)}>Delete</button>
					</div>
				))}

            	<button onClick={addMovie}>Add a movie</button>
			</section>

			<section>
            	<MoviesList movies={movies} />
			</section>
        </div>
    )
}

export default App
