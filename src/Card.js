import React from 'react';

class Card extends React.Component {
	render() {
  	const profile = this.props;
    console.log(profile);
  	return (
    	<a href={profile.html_url} target="_blank">
        <div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name} <i className="loginName">({profile.login})</i></div>
          <div className="repos">Repositories: {profile.public_repos}</div>
          <div className="location">{profile.location}</div>
        </div>
    	</div>
      </a>
    );
  }
}

export default Card;