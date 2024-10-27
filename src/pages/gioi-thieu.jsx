import DigitalAgencyBrand from '@/components/brand/DigitalAgencyBrand';
import RootLayout from '@/components/common/layout/RootLayout';
import AboutCounter from '@/components/counter/AboutCounter';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';
import ModernAgencySingleImage from '@/components/hero/ModernAgencySingleImage';
import CreativeAgencyAbout from '@/components/story/CreativeAgencyAbout';
// import AboutTeam from '@/components/team/AboutTeam';
import AboutTestimonial from '@/components/testimonial/AboutTestimonial';
import Head from 'next/head';

const About = () => {
	return (
		<div className="dark-theme">
			<Head>
				<title>Giới thiệu | NPH Digital</title>
				<meta
					name="description"
					content="Tìm hiểu về NPH Digital - Giải pháp kỹ thuật số toàn diện với đội ngũ chuyên nghiệp và nhiều năm kinh nghiệm trong ngành."
				/>
				<meta
					name="keywords"
					content="Giới thiệu NPH Digital, Giải pháp kỹ thuật số, Đội ngũ chuyên nghiệp, Kinh nghiệm ngành"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="NPH Digital | Giới thiệu"
				/>
				<meta
					property="og:description"
					content="Tìm hiểu về NPH Digital - Giải pháp kỹ thuật số toàn diện với đội ngũ chuyên nghiệp và nhiều năm kinh nghiệm trong ngành."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://nphdigital.com/gioi-thieu"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
				/>
				<meta
					property="og:image:alt"
					content="Hình ảnh đại diện cho NPH Digital"
				/>
				<meta
					property="og:locale"
					content="vi_VN"
				/>
				<meta
					property="og:site_name"
					content="NPH Digital"
				/>

				{/* Twitter Card Meta Tags */}
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="NPH Digital | Giới thiệu"
				/>
				<meta
					name="twitter:description"
					content="Tìm hiểu về NPH Digital - Giải pháp kỹ thuật số toàn diện với đội ngũ chuyên nghiệp và nhiều năm kinh nghiệm trong ngành."
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
				/>
				<meta
					name="twitter:image:alt"
					content="Hình ảnh đại diện cho NPH Digital"
				/>
				<meta
					name="twitter:site"
					content="@NPHDigital"
				/>
				<meta
					name="twitter:creator"
					content="@NPHDigital"
				/>

				{/* Viewport and Mobile Optimization */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* Canonical URL */}
				<link
					rel="canonical"
					href="https://nphdigital.com/gioi-thieu"
				/>

				{/* Favicon */}
				<link
					rel="icon"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon.ico"
					sizes="16x16"
					type="image/x-icon"
				/>
				<link
					rel="apple-touch-icon"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/apple-touch-icon.png"
					sizes="180x180"
				/>
				<link
					rel="icon"
					type="image/png"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon-32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon-16x16.png"
					sizes="16x16"
				/>

				{/* Preload important resources */}
				<link
					rel="preload"
					as="image"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
				/>

				{/* Other Meta Tags */}
				<meta
					name="robots"
					content="index, follow"
				/>
				<meta
					httpEquiv="Content-Type"
					content="text/html; charset=UTF-8"
				/>
				<meta
					name="application-name"
					content="NPH Digital"
				/>
				<meta
					name="theme-color"
					content="#121212"
				/>
				<meta
					name="copyright"
					content="NPH Digital"
				/>

				{/* Schema Markup */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'http://schema.org',
							'@type': 'Organization',
							name: 'NPH Digital',
							url: 'https://nphdigital.com',
							logo: 'https://res.cloudinary.com/tedydev/image/upload/nphdigital/logo.png',
							sameAs: ['https://www.facebook.com/nphdigital838', 'https://twitter.com/NPHDigital'],
						}),
					}}
				/>
			</Head>

			<main>
				<RootLayout
					header="header3"
					footer="footer3">
					<ModernAgencySingleImage />
					<CreativeAgencyAbout />
					<AboutCounter />
					{/* <AboutTeam /> */}
					<DigitalAgencyBrand />
					<AboutTestimonial />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</div>
	);
};

export default About;
