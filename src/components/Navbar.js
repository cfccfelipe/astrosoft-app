import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className='NavbarComp navbar navbar-expand-lg navbar-light '>
				<a className='navbar-brand' href='#'>
					<img
						src='logoblue.png'
						width={100}
						className='img-fluid'
						alt='Astro'
					/>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div
					className='collapse navbar-collapse pr-5'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav ml-auto'>
						<Link to='/'>
							<li className='nav-item nav-link active'>
								Inicio
							</li>
						</Link>

						<Link to='/projects'>
							<li className='nav-item nav-link active'>
								Proyectos
							</li>
						</Link>
						<Link to='/users'>
							<li className='nav-item nav-link active'>
								Usuarios
							</li>
						</Link>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								<img
									src='https://th.bing.com/th/id/OIP.V0lOa_0dCA2k2dvZHSZeNwHaHv?pid=ImgDet&rs=1'
									className='img-fluid rounded '
									alt='Avatar'
									width={20}
									height={20}
								/>
							</a>
							<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<a className='dropdown-item' href='#'>
									First Name Last Name
								</a>
								<a className='dropdown-item' href='#'>
									Editar perfil
								</a>
								<div className='dropdown-divider'></div>
								<a className='dropdown-item' href='#'>
									Cerrar Sesión
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
