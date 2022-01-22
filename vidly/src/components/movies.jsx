import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { toast } from "react-toastify";
import Pagination from "./pagination";
import MoviesTable from "./moviesTable";
import paginate from "../utils/paginate";
import ListGroup from "./listGroups";
import SearchBox from "./searchBox";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "",
    searchQuery: null,
    selectedColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];
    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;
    // optimistic update so a try catch block to revert to previous state if anything goes wrong.
    this.setState({
      movies: originalMovies.filter((m) => m._id !== movie._id),
    });
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("could not delete a movie");
        toast.error("This movie has already been deleted");
      }
      this.setState({ movies: originalMovies });
    }
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

  getPagedData() {
    const { movies, selectedGenre, selectedColumn, searchQuery } = this.state;
    console.log(selectedGenre);
    let filteredMovies = movies;

    filteredMovies = searchQuery
      ? movies.filter((movie) => {
          return movie.title
            .toLowerCase()
            .startsWith(searchQuery.toLowerCase());
        })
      : movies;

    filteredMovies =
      selectedGenre && selectedGenre._id
        ? filteredMovies.filter(
            (movie) => movie.genre._id === selectedGenre._id
          )
        : filteredMovies;

    const sorted = _.orderBy(
      filteredMovies,
      [selectedColumn.path],
      [selectedColumn.order]
    );

    return { totalCount: filteredMovies.length, sorted };
  }

  handleSearch = (searchQuery) => {
    this.setState({ searchQuery, selectedGenre: null, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, selectedColumn } = this.state;
    if (count === 0) return <p>There are no movies in the database.</p>;
    const { sorted, totalCount } = this.getPagedData();
    const subMovies = paginate(sorted, currentPage, pageSize);
    const { user } = this.props;
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
          <div className="row">
            {user && (
              <React.Fragment>
                <Link
                  to="/movies/new"
                  className="btn btn-primary"
                  style={{ marginBottom: 20 }}
                >
                  New Movie
                </Link>
                <br />
                <br />
              </React.Fragment>
            )}
          </div>
          <div className="row">
            <p>There are {totalCount} movies in the database.</p>
            <SearchBox onChange={this.handleSearch}></SearchBox>
            <MoviesTable
              movies={subMovies}
              onLike={this.handleLikeButton}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              selectedColumn={selectedColumn}
            />
            <Pagination
              totalCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
