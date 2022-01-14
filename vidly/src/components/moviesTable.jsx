import React, { Component } from "react";
import Like from "./like";

class MoviesTable extends Component {
  raiseSort(path) {
    const selectedColumn = { ...this.props.selectedColumn };
    if (selectedColumn.path === path)
      selectedColumn.order = selectedColumn.order === "asc" ? "desc" : "asc";
    else {
      selectedColumn.path = path;
      selectedColumn.order = "asc";
    }
    this.props.onSort(selectedColumn);
  }

  render() {
    const { movies, onLike, onDelete, onSort } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
