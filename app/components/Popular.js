var React = require("react");
var PropTypes = require("prop-types");
var api = require("../utils/api");

function SelectedLanguage(props) {
  var languages = ["All", "JavaScript", "Java", "Python", "Ruby"];
  return (
    <div className="appComponent">
      <ul className="langList">
        {languages.map(lang => {
          return (
            <li
              key={lang}
              style={lang === props.selectedLang ? { color: "red" } : null}
              onClick={props.updateLanguage.bind(null, lang)}
            >
              {lang}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
SelectedLanguage.PropTypes = {
  selectedLang: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired
};

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map(function(repo, index) {
        return (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-item">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt={"Avatar for " + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
RepoGrid.PropTypes = {
  repos: PropTypes.array.isRequired
};
class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: "All",
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState({
      selectedLang: lang,
      repos: null
    });
    api.fetchPoprularRepos(lang).then(
      function(response) {
        this.setState({
          repos: response.items
        });
        console.log(this.state.repos);
      }.bind(this)
    );
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLang);
  }
  render() {
    return (
      <div>
        <SelectedLanguage
          updateLanguage={this.updateLanguage}
          selectedLang={this.state.selectedLang}
        />
        {!this.state.repos
          ? <p>Loading..</p>
          : <RepoGrid repos={this.state.repos} />}

      </div>
    );
  }
}

module.exports = Popular;
