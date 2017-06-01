var axios = require("axios");

module.exports = {
	fetchPoprularRepos: function(language) {
		var url = window.encodeURI(
			"https://api.github.com/search/repositories?q=stars:>1+language:" +
				language +
				"&sort=star&order=dessc&type=Repositories"
		);

		return axios.get(url).then(function(response) {
			return response.data;
		});
	}
};

