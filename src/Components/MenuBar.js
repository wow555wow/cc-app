import React from 'react';
import {Link} from 'react-router-dom';
import './MenuBar.css'

const MenuBar = () => {
	return (
	  <section>
		<div className="Menubar-container">
			<div className="Button-style"><Link to="/"><i className="far fa-user fa-4x"></i></Link></div>
			<div className="Button-style"><Link to="/"><i className="fas fa-qrcode fa-4x"></i></Link></div>
			<div className="Button-style"><Link to="/"><i className="far fa-comments fa-4x"></i></Link></div>
			<div className="Button-style"><Link to="/"><i className="far fa-window-restore fa-4x"></i></Link></div>
		</div>
	  </section>
	);
};

export default MenuBar;
