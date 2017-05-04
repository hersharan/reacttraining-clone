var React = require('react');
var PropTypes = require('prop-types');

class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            selectedLang :'All'
        };
    }
    updateLanguage(lang){
        this.setState(function(){
            return{
             selectedLang : lang   
            }   
        }) 
    }
	render() {
	var languages = ["All","JavaScript","Java","Python","Ruby"];
        return ( < div className="appComponent"> 
        	<ul className="langList">
        { languages.map((lang)=>{
        	return(
        		<li key={lang} style={lang===this.state.selectedLang?{color:'red'}:null} onClick={this.updateLanguage.bind(this,lang)}>{lang}</li>
        		)
        })} 
        </ul>
        < /div>)
    }
}

module.exports = Popular;