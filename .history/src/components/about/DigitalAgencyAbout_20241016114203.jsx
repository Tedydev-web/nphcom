import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollSmoother } from '@/plugins';
import Link from 'next/link';
import Image from 'next/image';
import About12 from '../../../public/assets/imgs/about/1/3.png';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DigitalAgencyAbout = () => {
	const videoRef = useRef(null);

	// Scroll Smoother setup
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const device_width = window.innerWidth;
			const smootherInstance = ScrollSmoother.create({
				smooth: 1.35,
				effects: device_width < 1025 ? false : true,
				smoothTouch: false,
				normalizeScroll: false,
				ignoreMobileResize: true,
			});

			return () => smootherInstance.revert();
		}
	}, []);

	// Intersection Observer to control video playback
	useEffect(() => {
		const videoElement = videoRef.current;

		if (!videoElement) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						videoElement.play().catch((error) => {
							console.error('Không thể phát video:', error);
						});
					} else {
						videoElement.pause();
					}
				});
			},
			{
				root: null, // Quan sát trong toàn bộ cửa sổ trình duyệt
				rootMargin: '0px', // Không thêm khoảng cách
				threshold: 0.3, // Bắt đầu phát khi 30% video xuất hiện
			}
		);

		observer.observe(videoElement);

		return () => observer.unobserve(videoElement);
	}, []);

	return (
		<section className="about__area">
			<div className="container line g-0 pt-140 pb-130">
				<span className="line-3"></span>
				<div className="row">
					<div className="col-xxl-12">
						<div className="about__title-wrapper">
							<h3 className="sec-title title-anim">
								NPH DIGITAL <br className="responsive-br" />
								Công nghệ chuyển đổi số tối ưu hóa quy trình và trải nghiệm, gia tăng giá trị cho bạn.
							</h3>
						</div>

						<div className="about__content-wrapper">
							<div className="about__img">
								<div className="img-anim about__img_left">
									<video
										ref={videoRef}
										src="/assets/video/NPHdigital-01.mp4"
										playsInline
										style={{ width: '100%', height: 'auto' }}
										data-speed="0.3"
									/>
								</div>
								<div className="about__img-right">
									<Image
										priority
										width={220}
										style={{ height: 'auto', marginRight: '40px' }}
										src={About12}
										alt="About Image Right"
										data-speed="0.5"
									/>
									<div className="shape">
										<div
											className="secondary"
											data-speed="0.9"></div>
										<div className="primary"></div>
									</div>
								</div>
							</div>
							<div className="about__content text-anim">
								<p>Chúng tôi cam kết cung cấp các giải pháp phần mềm chuyển đổi số vượt trội, đem lại sự ấn tượng và hiệu quả, đồng thời đảm bảo chi phí phát triển tối ưu nhất. Sự hoàn hảo không chỉ trong sản phẩm mà còn trong ngân sách của bạn là ưu tiên hàng đầu của chúng tôi.</p>
								<div className="cursor-btn btn_wrapper">
									<Link
										className="btn-item wc-btn-primary btn-hover"
										href="/gioi-thieu">
										<span></span> Giới thiệu <br /> về chúng tôi <i className="fa-solid fa-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DigitalAgencyAbout;