import { Accordion } from 'react-bootstrap';
import ThumbFaq from '../../../public/assets/imgs/thumb/faq.jpg';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const MarketingFaq = () => {
	const { t } = useTranslation('serviceDetails');
	return (
		<>
			<section className="faq__area">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						{/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
							<div className="faq__img">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={ThumbFaq}
									alt="FAQ Image"
									data-speed="auto"
								/>
							</div>
						</div> */}
						<div className="faq__content">
							<h2 className="faq__title title-anim">{t('quangCaoSo.MarketingFaq.title')}</h2>

							<div className="faq__list">
								<Accordion
									defaultActiveKey="0"
									className="accordion"
									id="accordionExample">
									<Accordion.Item
										eventKey="0"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingOne">
											{t('quangCaoSo.MarketingFaq.question.1')}
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>{t('quangCaoSo.MarketingFaq.answer.1')}</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="1"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingTwo">
											{t('quangCaoSo.MarketingFaq.question.2')}
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>{t('quangCaoSo.MarketingFaq.answer.2')}</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="2"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingThree">
											{t('quangCaoSo.MarketingFaq.question.3')}
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>{t('quangCaoSo.MarketingFaq.answer.3')}</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="3"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFour">
											{t('quangCaoSo.MarketingFaq.question.4')}
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>{t('quangCaoSo.MarketingFaq.answer.4')}</p>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item
										eventKey="4"
										className="accordion-item">
										<Accordion.Header
											className="accordion-header"
											id="headingFive">
											{t('quangCaoSo.MarketingFaq.question.5')}
										</Accordion.Header>
										<Accordion.Body className="accordion-body">
											<p>{t('quangCaoSo.MarketingFaq.answer.5')}</p>
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MarketingFaq;
