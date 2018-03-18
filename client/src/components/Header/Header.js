import React from 'react';
import './Header.css';

const Header = () => (
  <header className="container-fluid">
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<h1>New York Times Search</h1>
					<p>Search for and annotate articles of interest</p>
				</div>
			</div>
		</div>
	</header>
);

export default Header;