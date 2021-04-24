import React from 'react';

import styles from './Content.module.scss';

import { isMobile } from 'mobile-device-detect';

import editorDesktopSvg from './../../images/Content/illustrationEditorDesktop.svg';

import editorMobileSvg from './../../images/Content/illustrationEditorMobile.svg';

import laptopDesktopSvg from './../../images/Content/illustrationLaptopDesktop.svg';

import laptopMobileSvg from './../../images/Content/illustrationLaptopMobile.svg';

import phonesSvg from './../../images/Content/illustrationPhones.svg';

// const Content = () => {
// 	return (
// 		<main className={styles.main}>
// 			<section>
// 				<h3>Designed for future </h3>
// 				<img
// 					src={isMobile ? editorMobileSvg : editorDesktopSvg}
// 					alt='editor img'
// 				/>
// 			</section>

// 			<section>
// 				<h4> Introducing an extensible editor</h4>
// 				<p>
// 					Blogr features an exceedingly intuitive interface which lets you focus
// 					on one thing: creating content. The editor supports management of
// 					multiple blogs and allows easy manipulation of embeds such as images,
// 					videos, and Markdown. Extensibility with plugins and themes provide
// 					easy ways to add functionality or change the looks of a blog.
// 				</p>
// 			</section>
// 			<section>
// 				<h4> Robust content management</h4>
// 				<p>
// 					Flexible content management enables users to easily move through
// 					posts. Increase the usability of your blog by adding customized
// 					categories, sections, format, or flow. With this functionality, you’re
// 					in full control.
// 				</p>
// 			</section>

// 			<section className={styles.sectionWithCircles}>
// 				<img src={phonesSvg} alt='phones img' />

// 				<h4> State of the Art Infrastructure</h4>
// 				<p>
// 					With reliability and speed in mind, worldwide data centers provide the
// 					backbone for ultra-fast connectivity. This ensures your site will load
// 					instantly, no matter where your readers are, keeping your site
// 					competitive.
// 				</p>
// 			</section>
// 			<section>
// 				<img
// 					src={isMobile ? laptopMobileSvg : laptopDesktopSvg}
// 					alt='laptop img'
// 				/>
// 				<h4>Free, open, simple</h4>
// 				<p>
// 					Blogr is a free and open source application backed by a large
// 					community of helpful developers. It supports features such as code
// 					syntax highlighting, RSS feeds, social media integration, third-party
// 					commenting tools, and works seamlessly with Google Analytics. The
// 					architecture is clean and is relatively easy to learn.
// 				</p>
// 			</section>
// 			<section>
// 				<h4> Powerful tooling</h4>
// 				<p>
// 					Batteries included. We built a simple and straightforward CLI tool
// 					that makes customization and deployment a breeze, but capable of
// 					producing even the most complicated sites.
// 				</p>
// 			</section>
// 		</main>
// 	);
// };

const Content = () => {
	return (
		<main className={styles.main}>
			<section className={styles.editorSection}>
				<h3>Designed for future </h3>
				<img
					src={isMobile ? editorMobileSvg : editorDesktopSvg}
					alt='editor img'
				/>
				<div>
					<h4> Introducing an extensible editor</h4>
					<p>
						Blogr features an exceedingly intuitive interface which lets you
						focus on one thing: creating content. The editor supports management
						of multiple blogs and allows easy manipulation of embeds such as
						images, videos, and Markdown. Extensibility with plugins and themes
						provide easy ways to add functionality or change the looks of a
						blog.
					</p>
				</div>

				<div>
					<h4> Robust content management</h4>
					<p>
						Flexible content management enables users to easily move through
						posts. Increase the usability of your blog by adding customized
						categories, sections, format, or flow. With this functionality,
						you’re in full control.
					</p>
				</div>
			</section>

			<section className={styles.phonesSection}>
				<img src={phonesSvg} alt='phones img' />

				<div>
					<h4> State of the Art Infrastructure</h4>
					<p>
						With reliability and speed in mind, worldwide data centers provide
						the backbone for ultra-fast connectivity. This ensures your site
						will load instantly, no matter where your readers are, keeping your
						site competitive.
					</p>
				</div>
			</section>
			<section className={styles.laptopSection}>
				<img
					src={isMobile ? laptopMobileSvg : laptopDesktopSvg}
					alt='laptop img'
				/>
				<div>
					<h4> Powerful tooling</h4>
					<p>
						Batteries included. We built a simple and straightforward CLI tool
						that makes customization and deployment a breeze, but capable of
						producing even the most complicated sites.
					</p>
				</div>
				<div>
					<h4>Free, open, simple</h4>
					<p>
						Blogr is a free and open source application backed by a large
						community of helpful developers. It supports features such as code
						syntax highlighting, RSS feeds, social media integration,
						third-party commenting tools, and works seamlessly with Google
						Analytics. The architecture is clean and is relatively easy to
						learn.
					</p>
				</div>
			</section>
		</main>
	);
};
export default Content;
