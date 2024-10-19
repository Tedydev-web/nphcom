import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import ServiceHero from '@/components/hero/ServiceHero';
import Service1 from '@/components/service/Service1';
import DigitalMarketingService from '@/components/service/DigitalMarketingService';
import DigitalAgencyBrand from '@/components/brand/DigitalAgencyBrand';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

const ServiceV5 = () => {
	return (
		<>
			<Head>
				<title>Dịch vụ | NPH Digital</title>
				<meta
					name="description"
					content="Khám phá dịch vụ của NPH Digital - Giải pháp kỹ thuật số toàn diện, bao gồm phát triển ứng dụng, thiết kế website, marketing số và nhiều hơn nữa."
				/>
				<meta
					name="keywords"
					content="Dịch vụ NPH Digital, Giải pháp kỹ thuật số, Phát triển ứng dụng, Thiết kế website, Marketing số"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="NPH Digital | Dịch vụ"
				/>
				<meta
					property="og:description"
					content="Khám phá dịch vụ của NPH Digital - Giải pháp kỹ thuật số toàn diện, bao gồm phát triển ứng dụng, thiết kế website, marketing số và nhiều hơn nữa."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://nphdigital.com/dich-vu"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
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
					content="NPH Digital | Dịch vụ"
				/>
				<meta
					name="twitter:description"
					content="Khám phá dịch vụ của NPH Digital - Giải pháp kỹ thuật số toàn diện, bao gồm phát triển ứng dụng, thiết kế website, marketing số và nhiều hơn nữa."
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
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
					href="https://nphdigital.com/dich-vu"
				/>

				{/* Favicon */}
				<link
					rel="icon"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon.png"
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
					http-equiv="Content-Type"
					content="text/html; charset=UTF-8"
				/>
				<meta
					name="application-name"
					content="NPH Digital"
				/>
				<meta
					name="theme-color"
					content="#5468A9"
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
					<ServiceHero />
					{/* <Service1 /> */}
					<DigitalMarketingService />
					<DigitalAgencyBrand />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
		</>
	);
};

export default ServiceV5;
