var React = require("react");
var Link = require("react-router-dom").Link;

class PlayerInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerOneName : '',
			playerTwoName : '',
			playerOneImage : null,
			playerTwoImage : null
		};
	}
	handleSubmit(id , username){
		this.setState(function(){
			var newState = {};
			newState[id+'Name'] = username;
			newState[id+'Image'] = 'https://github.com/'+username+'.png?size=200';
			return newState;
		});
	}
	render() {
		return (
			<div className="home-container">
				INPUT
			</div>
		);
	}
}
PlayerInput.propTypes
module.exports = PlayerInput;
