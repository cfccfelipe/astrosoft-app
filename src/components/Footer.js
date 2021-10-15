const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className='footer mt-auto py-3 fixed-bottom sticky-botoom'>
			<div className='container'>
				<p className='text-center rounded-3 border-top text-muted'>
					© {year} AstroSoft
				</p>
			</div>
		</footer>
	);
};

export default Footer;
