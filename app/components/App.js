var React = require('react');
var PropTypes = require('prop-types');
var Popular = require('./Popular');

class App extends React.Component {
	render() {
        return ( < div className="appComponent"> 
        	<Popular/>
        < /div>)
    }
}

module.exports = App;