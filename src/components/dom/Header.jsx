import React from 'react';

const Header = () => {
	return (
		<header className='w-full py-12'>
			<div className='container mx-auto px-6'>
				<div className='flex items-center justify-between'>
					<div className='text-lg'>Fictional Studio</div>
					<ul className='flex items-center justify-end gap-10'>
						<li>About Us</li>
						<li>Work</li>
						<li>Contact Us</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
