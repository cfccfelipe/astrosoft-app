import CardRol from './CardRol';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header>
			<nav className='Navbar navbar navbar-expand-md fixed-top navbar-light bg-light'>
				<div className='container-fluid'>
					<img
						src='logoblue.png'
						width={100}
						class='img-fluid'
						alt='Astro'
					></img>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>

					<div
						className='collapse navbar-collapse row justify-content-end'
						id='navbarSupportedContent'
					>
						<ul className='navbar-nav me-auto mb-2 mb-md-0'>
							<li className='nav-item nav-link active c-ponter'>
								<Link to='/'>Home</Link>
							</li>
							<li className='nav-item nav-link active c-ponter'>
								<Link to='/dashboard'>Dashboard</Link>
							</li>
							<li className='nav-item nav-link active c-ponter'>
								<Link to='/projects'>Projects</Link>
							</li>
							<li className='nav-item dropdown align-items-center'>
								<a
									className='nav-link dropdown-toggle justify-content-center'
									id='navbarScrollingDropdown'
									data-bs-toggle='dropdown'
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

								<ul
									className='dropdown-menu'
									aria-labelledby='navbarScrollingDropdown'
								>
									<li>First Name Last Name</li>
									<li>
										<hr class='dropdown-divider' />
									</li>
									<li>
										<Link to='/projects'>Edit Profile</Link>
									</li>
									<li>
										<li>
											<Link to='/projects'>Sing out</Link>
										</li>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
