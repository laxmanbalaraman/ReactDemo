import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./like";
import Table from "./table";
import auth from "../services/authService";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movies) => (
        <Link to={`/movies/${movies._id}`}>{movies.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };
  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }
  render() {
    const { movies, onSort, selectedColumn } = this.props;
    return (
      <Table
        data={movies}
        onSort={onSort}
        selectedColumn={selectedColumn}
        columns={this.columns}
      />
    );
  }
}

export default MoviesTable;
