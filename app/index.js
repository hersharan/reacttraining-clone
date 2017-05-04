var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
var App = require('./components/App');


ReactDOM.render(<App/>,document.getElementById('app'));
// class Avatar extends React.Component {
//   render() {
//     return (
//       <img src={this.props.img} />
//     )
//   }
// }

// class Label extends React.Component {
//   render() {
//     return (
//       <h1>Name: {this.props.name}</h1>
//     )
//   }
// }

// class ScreenName extends React.Component {
//   render() {
//     return (
//       <h3>Username: {this.props.username}</h3>
//     )
//   }
// }

// class Badge extends React.Component {
//   render() {
//     return (
//       <div>
//         <Avatar img={this.props.user.img}/>
//         <Label name={this.props.user.name}/>
//         <ScreenName username={this.props.user.username}/>
//       </div>
//     )
//   }
// }
//  Badge.propTypes = {
//  	user : PropTypes.shape({
//  		name : PropTypes.string.isRequired,
//  		img:PropTypes.string.isRequired,
//  		username: PropTypes.string.isRequired
//  	})
//  }

// ReactDOM.render(
//   <Badge user={{
//     name: 'Tyler McGinnis',
//     img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
//     username: 'tylermcginnis'
//   }} />,
//   document.getElementById('app')
// );

// class FriendsContainer extends React.Component {
//   render() {
//     var name = 'React Js';
//     var friends = ['AngularJs', 'VueJs', 'NodeJs'];
//     return (
//       <div>
//         <h3> Name: {name} </h3>
//         <ShowList names={friends} />
//       </div>
//     )
//   }
// }
// class ShowList extends React.Component {
//   render() {
//     return (
//       <div>
//         <h3> Friends </h3>
//         <ul>
//           {this.props.names.map(function(friend){
//             return <li key={friend}> {friend} </li>;
//           })}
//         </ul>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <FriendsContainer/>,
//   document.getElementById('app')
// );
