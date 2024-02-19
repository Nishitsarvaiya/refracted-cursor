'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Suspense } from 'react';

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
	ssr: false,
	loading: () => (
		<div className='flex h-96 w-full flex-col items-center justify-center'>
			<svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
				<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
				<path
					className='opacity-75'
					fill='currentColor'
					d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
				/>
			</svg>
		</div>
	),
});

export default function Page() {
	return (
		<main>
			<section className='container mx-auto px-6'>
				<h1 className='hero-title leading-none font-medium grid grid-cols-12 mt-10'>
					<div className='col-start-1 col-end-13 flex items-center justify-center gap-10'>
						<span className='inline-block'>We are</span>
						<div className='inline-block flex-grow h-[12vw] lg:h-[8vw] bg-slate-400 rounded-full relative overflow-clip'>
							<Image src='/img/hero-1.jpg' fill style={{ objectFit: 'cover' }} />
						</div>
					</div>
					<div className='col-start-1 col-end-13 flex items-center justify-center gap-10'>
						<div className='inline-block flex-grow h-[12vw] lg:h-[8vw] bg-slate-400 rounded-full relative overflow-clip'>
							<Image src='/img/hero-2.jpg' fill style={{ objectFit: 'cover' }} />
						</div>
						<span className='inline-block'>creative</span>
					</div>
					<div className='col-start-1 col-end-6'>design</div>
					<div className='col-start-7 col-end-13 text-end'>studio</div>
				</h1>
			</section>
		</main>
	);
}
