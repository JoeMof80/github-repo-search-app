import React, { Component } from "react";
import RepoDetail from "./repoDetail";
import Pagination from "./common/pagination";
import reposImg from "../repos.svg";

class Repos extends Component {
  state = {
    selectedRepo: "",
    currentPage: 1
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedRepo: nextProps.selectedRepo });
  }

  selectRepo = id => {
    const selectedRepo = this.props.repos.find(repo => repo.id === id);
    this.setState({ selectedRepo });
  };

  setCurrentPage = page => {
    this.setState({ currentPage: page }, () =>
      this.props.onPageChange(this.state.currentPage)
    );
  };

  render() {
    const { selectedRepo, currentPage } = this.state;
    const { loading, repos, totalCount, pageSize } = this.props;

    if (loading)
      return (
        <div className="col-4 border-right">
          <img src={reposImg} alt="repos" />
        </div>
      );
    if (!repos.length)
      return (
        <div className="col-4 border-right">
          <div className="text-center text-grey">
            <h2>Search for a repository</h2>
            <h1>
              <i className="fa fa-arrow-left" />
            </h1>
          </div>
        </div>
      );
    return (
      <React.Fragment>
        <div id="repos" className="col-4 border-right">
          <h2 className="text-center mb-4">Repositories</h2>
          <div className="list-group mb-2">
            {this.props.repos.map(repo => (
              <a
                key={repo.id}
                onClick={() => this.selectRepo(repo.id)}
                className={
                  repo.id === selectedRepo.id
                    ? "list-group-item list-group-item-action active"
                    : "list-group-item list-group-item-action"
                }
              >
                {repo.name}
              </a>
            ))}
          </div>
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onCurrentPage={this.setCurrentPage}
          />
        </div>
        <div className="col-5">
          <RepoDetail repo={selectedRepo} />
        </div>
      </React.Fragment>
    );
  }
}

export default Repos;
