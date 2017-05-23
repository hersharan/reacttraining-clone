var React = require("react");
var PropTypes = require("prop-types");

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
class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: "All"
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState({
      selectedLang: lang
    });
  }
  render() {
    return (
      <SelectedLanguage
        updateLanguage={this.updateLanguage}
        selectedLang={this.state.selectedLang}
      />
    );
  }
}

module.exports = Popular;
