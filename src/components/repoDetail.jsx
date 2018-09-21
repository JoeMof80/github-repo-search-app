import React from "react";
import moment from "moment";

const RepoDetail = ({ repo }) => {
  if (!repo)
    return (
      <div className="text-center text-grey">
        <h2>Select a repository</h2>
        <h1>
          <i className="fa fa-arrow-left" />
        </h1>
      </div>
    );
  return (
    <React.Fragment>
      <h2 className="text-center mb-4">Repository Details</h2>
      <ul className="list-group">
        {repo.name && (
          <li className="list-group-item">
            <h5 className="mb-1">Name</h5>
            {repo.name}
          </li>
        )}
        {repo.owner.login && (
          <li className="list-group-item">
            <h5 className="mb-1">Owner</h5>
            {repo.owner.login}
          </li>
        )}
        {repo.html_url && (
          <li className="list-group-item">
            <h5 className="mb-1">URL</h5>
            <a href={repo.html_url}>{repo.html_url}</a>
          </li>
        )}
        {repo.description && (
          <li className="list-group-item">
            <h5 className="mb-1">Description</h5>
            {repo.description}
          </li>
        )}
        {repo.created_at && (
          <li className="list-group-item">
            <h5 className="mb-1">Created</h5>
            {moment(repo.created_at).format("Do MMM YYYY")}
          </li>
        )}
        {repo.updated_at && (
          <li className="list-group-item">
            <h5 className="mb-1">Updated</h5>
            {moment(repo.updated_at).format("Do MMM YYYY")}
          </li>
        )}
        {repo.pushed_at && (
          <li className="list-group-item">
            <h5 className="mb-1">Pushed</h5>
            {moment(repo.pushed_at).format("Do MMM YYYY")}
          </li>
        )}
        {repo.language && (
          <li className="list-group-item">
            <h5 className="mb-1">Language</h5>
            {repo.language}
          </li>
        )}
        {repo.forks_count && (
          <li className="list-group-item">
            <h5 className="mb-1">Forks</h5>
            {repo.forks_count}
          </li>
        )}
        {repo.forks_count && (
          <li className="list-group-item">
            <h5 className="mb-1">Open Issues</h5>
            {repo.open_issues}
          </li>
        )}
        {repo.license && (
          <li className="list-group-item">
            <h5 className="mb-1">License</h5>
            {repo.license.name}
          </li>
        )}
        {repo.default_branch && (
          <li className="list-group-item">
            <h5 className="mb-1">Default Branch</h5>
            {repo.default_branch}
          </li>
        )}
        {repo.score && (
          <li className="list-group-item">
            <h5 className="mb-1">Score</h5>
            {repo.score}
          </li>
        )}
      </ul>
    </React.Fragment>
  );
};

export default RepoDetail;
