import React from 'react';

class Card extends React.Component {
	render() {
  	const profile = this.props;
    console.log(profile);
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="location">{profile.location}</div>
        </div>
    	</div>
    );
  }
}

export default Card;