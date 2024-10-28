import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguageManager } from '@/hooks/useLanguageManager';

function LanguageSwitcher({ onLanguageChange }) {
	const { t } = useTranslation('common');
	const { currentLanguage, changeLanguage } = useLanguageManager();
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [isLanguageChanging, setIsLanguageChanging] = useState(false);
	const dropdownRef = useRef(null);

	const languages = useMemo(
		() => [
			{ code: 'vi', name: t('common.languageSwitcher.vietnamese'), flag: '🇻🇳' },
			{ code: 'en', name: t('common.languageSwitcher.english'), flag: '🇬🇧' },
			{ code: 'zh', name: t('common.languageSwitcher.chinese'), flag: '🇨🇳' },
			{ code: 'hi', name: t('common.languageSwitcher.hindi'), flag: '🇮🇳' },
		],
		[t]
	);

	useEffect(() => {
		setMounted(true);
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleSelection = async (language) => {
		setIsOpen(false);
		setIsLanguageChanging(true);

		try {
			await changeLanguage(language.code);
			if (onLanguageChange) {
				onLanguageChange(language.code);
			}
		} catch (error) {
			console.error('Error changing language:', error);
		} finally {
			setTimeout(() => {
				setIsLanguageChanging(false);
			}, 1000);
		}
	};

	const currentLanguageData = useMemo(() => languages.find((lang) => lang.code === currentLanguage) || languages[0], [currentLanguage, languages]);

	if (!mounted) return null;

	return (
		<div
			ref={dropdownRef}
			style={{ position: 'relative' }}>
			<motion.div
				onClick={() => setIsOpen(!isOpen)}
				className="language-switcher-button"
				whileHover={{ scale: 1.05 }}
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '200px',
					padding: '12px',
					borderRadius: '12px',
					background: 'rgba(255, 255, 255, 0.15)',
					backdropFilter: 'blur(8px)',
					cursor: 'pointer',
					boxShadow: isOpen ? '0 8px 20px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.15)',
					color: 'white',
					transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
				}}>
				<motion.span
					animate={{ rotate: [0, 10, -10, 10, 0] }}
					transition={{
						repeat: Infinity,
						duration: 2,
						ease: 'easeInOut',
					}}
					style={{ marginRight: '10px' }}>
					{currentLanguageData.flag}
				</motion.span>
				<span style={{ fontSize: '16px' }}>{currentLanguageData.name}</span>
				<span
					style={{
						marginLeft: 'auto',
						transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
						transition: 'transform 0.2s',
					}}>
					▼
				</span>
			</motion.div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="dropdown-container"
						style={{
							position: 'absolute',
							top: '60px',
							right: '0',
							width: '100%',
							backgroundColor: 'rgba(255, 255, 255, 0.75)',
							backdropFilter: 'blur(10px)',
							borderRadius: '12px',
							boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
							zIndex: 1000,
						}}>
						{languages.map((language, index) => (
							<motion.div
								key={language.code}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.05 }}
								onClick={() => handleSelection(language)}
								style={{
									padding: '14px 20px',
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									borderBottom: index < languages.length - 1 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
									transition: 'background-color 0.3s ease',
									borderTopLeftRadius: index === 0 ? '12px' : '0px',
									borderTopRightRadius: index === 0 ? '12px' : '0px',
									borderBottomLeftRadius: index === languages.length - 1 ? '12px' : '0px',
									borderBottomRightRadius: index === languages.length - 1 ? '12px' : '0px',
								}}
								whileHover={{ backgroundColor: '#f0f0f0' }}>
								<motion.span
									animate={{ rotate: [0, 10, -10, 10, 0] }}
									transition={{
										repeat: Infinity,
										duration: 2,
										ease: 'easeInOut',
									}}
									style={{ marginRight: '10px' }}>
									{language.flag}
								</motion.span>
								<span style={{ fontSize: '16px' }}>{language.name}</span>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{isLanguageChanging && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						style={{
							position: 'fixed',
							inset: 0,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'rgba(0, 0, 0, 0.6)',
							backdropFilter: 'blur(8px)',
							zIndex: 999,
						}}>
						<motion.div
							style={{ textAlign: 'center', color: 'white' }}
							animate={{ scale: [1, 1.1, 1] }}
							transition={{ repeat: Infinity, duration: 1.5 }}>
							<div style={{ fontSize: '24px', fontWeight: 'bold' }}>{t('common.languageSwitcher.changing')}</div>
							<div style={{ fontSize: '18px' }}>{t('common.languageSwitcher.pleaseWait')}</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default LanguageSwitcher;
