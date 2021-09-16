import React from 'react';
import {Link} from 'react-router-dom';

const MenuBar = () => {
	return (
	  <section className="Menubar-container">
		<Link to="/"> <button> btn1 </button> </Link>
		<button> btn2 </button>
		<button> btn3 </button>
		<button> btn4 </button>
	  </section>
	);
};

export default MenuBar;
