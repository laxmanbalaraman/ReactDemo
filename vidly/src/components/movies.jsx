import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./pagination";
import MoviesTable from "./moviesTable";
import paginate from "../utils/paginate";
import ListGroup from "./listGroups";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter((m) => m._id !== movie._id),
    });
  };

  handleLikeButton = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    const { currentPage } = this.state;
    const currPage = currentPage !== page ? page : currentPage;
    this.setState({ currentPage: currPage });
  };

  handleItemSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (selectedColumn) => {
    this.setState({ selectedColumn });
  };
  render() {
    const { length: count } = this.state.movies;
    const { movies, currentPage, pageSize, selectedGenre, selectedColumn } =
      this.state;
    if (count === 0) return <p>There are no movies in the database.</p>;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? movies.filter((movie) => movie.genre._id === selectedGenre._id)
        : movies;
    // console.log(filteredMovies);

    const sorted = _.orderBy(
      filteredMovies,
      [selectedColumn.path],
      [selectedColumn.order]
    );

    const subMovies = paginate(sorted, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleItemSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>There are {filteredMovies.length} movies in the database.</p>
          <MoviesTable
            movies={subMovies}
            onLike={this.handleLikeButton}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            selectedColumn={selectedColumn}
          />
          <Pagination
            totalCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
