import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import http from "./services/httpService";
import { apiUrl } from "./config.json";
import RepoList from "./components/repoList";
import RepoSearchForm from "./components/repoSearchForm";

import "./App.css";

class App extends Component {
  state = {
    repos: [],
    selectedRepo: "",
    pageSize: 10,
    searchQuery: "",
    totalCount: 0
  };

  handleSearch = async (data, currentPage = 1) => {
    this.setState({ searchQuery: data });

    const { data: repos } = await http.get(
      `${apiUrl}?q=${data.query}&sort=${data.sort}&order=${
        data.order
      }&page=${currentPage}&per_page=${this.state.pageSize}`
    );
    this.setState({
      repos: repos.items,
      selectedRepo: "",
      totalCount: repos.total_count
    });
  };

  handlePageChange = currentPage => {
    this.handleSearch(this.state.searchQuery, currentPage);
  };

  handleClear = () => {
    this.setState({ repos: [], selectedRepo: "", searchQuery: "" });
  };

  renderRepos = () => {
    const { repos, pageSize, totalCount, selectedRepo } = this.state;

    return (
      <RepoList
        repos={repos}
        pageSize={pageSize}
        totalCount={totalCount}
        selectedRepo={selectedRepo}
        onPageChange={this.handlePageChange}
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center mb-5">Github Repository Search App</h1>
        <main className="container">
          <div className="row">
            <div className="col-3 border-right">
              <RepoSearchForm
                onClick={this.handleSearch}
                onClear={this.handleClear}
              />
            </div>
            <Switch>
              <Route path="/repos" render={this.renderRepos} />
              <Redirect from="/" exact to="/repos" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
