import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from '@/plugins';
import Image from 'next/image';
import A1 from '../../../public/assets/imgs/home-7/a1.png';
import Shape4 from '../../../public/assets/imgs/home-7/shape-4.png';
import SVGstar from '../../../public/assets/imgs/home-7/svgstar.png';
import A2 from '../../../public/assets/imgs/home-7/a2.png';
import A3 from '../../../public/assets/imgs/home-7/a3.jpg';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const CreativeAgencyAbout = () => {
	const videoRef = useRef(null);
	const [isPopupVisible, setIsPopupVisible] = useState(true); // Quản lý trạng thái popup

	useEffect(() => {
		if (typeof window !== 'undefined') {
			let device_width = window.innerWidth;
			let tHero = gsap.context(() => {
				ScrollSmoother.create({
					smooth: 1.35,
					effects: device_width < 1025,
					smoothTouch: false,
					normalizeScroll: false,
					ignoreMobileResize: true,
				});
				gsap.to('.about__img-2 img', {
					scale: 1.15,
					duration: 1,
					scrollTrigger: {
						trigger: '.about__img-2',
						start: 'top bottom',
						markers: false,
						scrub: 1,
						end: 'bottom center',
					},
				});
			});
			return () => tHero.revert();
		}
	}, []);

	const handleUserInteraction = () => {
		// Ẩn popup trước khi bắt đầu video
		setIsPopupVisible(false);

		// Chạy video sau 2 giây
		setTimeout(() => {
			if (videoRef.current) {
				videoRef.current.muted = false; // Bỏ muted
				videoRef.current.play(); // Bắt đầu chạy video
			}
		}, 2000);
	};

	return (
		<>
			{/* Popup */}
			{isPopupVisible && (
				<div
					className="popup-overlay"
					onClick={handleUserInteraction}>
					<div className="popup-content">
						<p style={{ color: '#e0fd60', fontSize: '22px' }}>Hãy tương tác với chúng tôi!</p>
						<button
							className="popup-button"
							onClick={handleUserInteraction}>
							Click vào đây
						</button>
					</div>
				</div>
			)}

			<div className="video__area about__img-2">
				<video
					ref={videoRef}
					style={{ width: '100%', height: 'auto' }}
					src="/assets/video/2.mp4"
					playsInline
					autoPlay
					loop
					muted
				/>
			</div>

			{/* Nội dung khác */}
			<section className="about__area-7">
				<div className="container pt-130 pb-110">
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">
									Chúng tôi kết nối <br /> doanh nghiệp với thế giới số <br /> một cách sáng tạo
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<div
								className="about__left-7"
								style={{ borderRadius: '15px' }}>
								<Image
									priority
									src={A1}
									alt="Image"
									layout="fill"
									objectFit="contain"
								/>
							</div>
						</div>
						<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
							<div className="about__mid-7 text-anim">
								<p>Chúng tôi tự hào đã xây dựng nên một cộng đồng những con người đam mê sự thay đổi và sáng tạo. NPH Digital khởi đầu với mong muốn tạo ra sự hòa hợp giữa doanh nghiệp và thế giới số.</p>
								<p>Không chỉ là những thiết kế đẹp, chúng tôi tin rằng thiết kế chính là công cụ mạnh mẽ để thay đổi và nâng cao giá trị doanh nghiệp.</p>{' '}
								<Image
									priority
									width={155}
									height={155}
									style={{ marginBottom: '20px' }}
									src={SVGstar}
									alt="Shape"
								/>
								<Image
									priority
									width={420}
									height={260}
									style={{ borderRadius: '15px' }}
									src={A2}
									alt="Image"
								/>
							</div>
						</div>
						<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
							<div className="about__right-7">
								<Image
									priority
									width={800}
									style={{ height: 'auto', borderRadius: '15px', marginBottom: '100px' }}
									src={A3}
									alt="Image"
								/>
							</div>
						</div>
					</div>
				</div>
				<Image
					priority
					width={76}
					height={119}
					src={Shape4}
					alt="Shape"
					className="shape-1"
				/>
			</section>

			{/* CSS Popup */}
			<style jsx>{`
				.popup-overlay {
					position: fixed;
					top: 0; /* Đặt ở vị trí trên cùng */
					left: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(0, 0, 0, 0.8);
					display: flex;
					justify-content: center;
					align-items: flex-start; /* Căn giữa theo chiều dọc, nhưng nằm ở trên cùng */
					z-index: 9999;
				}
				.popup-content {
					background-color: transparent;
					padding: 20px;
					border-radius: 10px;
					text-align: center;
					margin-top: 20vw;
					width: 80%;
				}
				.popup-button {
					margin-top: 10px;
					padding: 10px 20px;
					background-color: #e0fd60;
					color: #333;
					border: none;
					border-radius: 5px;
					cursor: pointer;
				}
			`}</style>
		</>
	);
};

export default CreativeAgencyAbout;