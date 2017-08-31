var React = require("react");
var PropTypes = require("prop-types");
var Popular = require("./Popular");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Header = require("./Header");
var Home = require("./Home");
var Battle = require("./Battle");

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="appComponent">
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/popular" component={Popular} />
						<Route exact path="/battle" component={Battle} />
						<Route
							render={function() {
								return <p>Page Not Found</p>;
							}}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

module.exports = App;
