import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products

    // takes to products page and when user presses back one can still go back to previous page
    this.props.history.push("/products");
    // takes to products page but user will not be able to go back to previous page if back button is pressed.
    // eg application: after redirecting to home page after login the user shudn't be allowed to go back to login page.
    //this.props.history.replace("/products");
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
