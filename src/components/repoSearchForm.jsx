import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class repoSearchForm extends Form {
  state = {
    data: { query: "", sort: "", order: "" },
    sortOptions: ["stars", "forks", "updated"],
    orderOptions: ["asc", "desc"],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    query: Joi.string()
      .required()
      .label("Query"),
    sort: Joi.string()
      .label("Sort")
      .allow(""),
    order: Joi.string()
      .label("Order")
      .allow("")
  };

  doSubmit = () => {
    this.props.onClick(this.state.data);
  };

  clearRepos = () => {
    this.setState({ data: { query: "", sort: "", order: "" } });
    this.props.onClear();
  };

  render() {
    const { sortOptions, orderOptions } = this.state;

    return (
      <React.Fragment>
        <h2 className="text-center mb-4">Search</h2>
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.handleSubmit} className="mb-2">
              {this.renderInput("query", "Query")}
              {this.renderSelect("sort", "Sort", sortOptions)}
              {this.renderSelect("order", "Order", orderOptions)}
              {this.renderButton("Search")}
            </form>
            <button
              onClick={this.clearRepos}
              className="btn btn-warning btn-block"
            >
              Clear
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default repoSearchForm;
