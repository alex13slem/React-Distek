import contacts from "../../../data/contacts.json"
import companys from "../../../data/companys.json"
import social from "../../../data/socialNetworks.json"

import { FormEmail } from "../formEmail"
import { Link } from "react-scroll"
import { socialNetworksData } from "../../../data/socialNetworks"

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__wrap">
				<div className="footer__inner footer__inner_top">
					<div className="footer__logo-block">
						<div className="footer__logo"><img src='/svg/site-logo.svg' alt="site-logo" /></div>
						<p>ООО «ДИСТЕК» <br /> Все права защищены</p>
					</div>
					<nav className="footer__nav">
						<ul className="footer__software">
							<h2 className="footer__nav-title">
								<Link
									to="software"
									spy={true}
									smooth={true}
									offset={-100}
									duration={100}
								>
									программное обеспечение
								</Link>
								<svg className="arrow-up" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
									<mask id="path-1-inside-1_1356_1356" fill="white">
										<path fillRule="evenodd" clipRule="evenodd" d="M10.646 0.146C10.6924 0.0994368 10.7476 0.0624943 10.8084 0.0372877C10.8691 0.0120811 10.9342 -0.000893593 11 -0.000893593C11.0658 -0.000893593 11.1309 0.0120811 11.1916 0.0372877C11.2524 0.0624943 11.3076 0.0994368 11.354 0.146L15.354 4.146C15.4479 4.23989 15.5006 4.36722 15.5006 4.5C15.5006 4.63278 15.4479 4.76011 15.354 4.854C15.2601 4.94789 15.1328 5.00063 15 5.00063C14.8672 5.00063 14.7399 4.94789 14.646 4.854L11.5 1.707V11.5C11.5 12.163 11.2366 12.7989 10.7678 13.2678C10.2989 13.7366 9.66304 14 9 14H1C0.867392 14 0.740214 13.9473 0.646446 13.8536C0.552678 13.7598 0.5 13.6326 0.5 13.5C0.5 13.3674 0.552678 13.2402 0.646446 13.1464C0.740214 13.0527 0.867392 13 1 13H9C9.39782 13 9.77936 12.842 10.0607 12.5607C10.342 12.2794 10.5 11.8978 10.5 11.5V1.707L7.354 4.854C7.26011 4.94789 7.13278 5.00063 7 5.00063C6.86722 5.00063 6.73989 4.94789 6.646 4.854C6.55211 4.76011 6.49937 4.63278 6.49937 4.5C6.49937 4.36722 6.55211 4.23989 6.646 4.146L10.646 0.146Z" />
									</mask>
									<path fillRule="evenodd" clipRule="evenodd" d="M10.646 0.146C10.6924 0.0994368 10.7476 0.0624943 10.8084 0.0372877C10.8691 0.0120811 10.9342 -0.000893593 11 -0.000893593C11.0658 -0.000893593 11.1309 0.0120811 11.1916 0.0372877C11.2524 0.0624943 11.3076 0.0994368 11.354 0.146L15.354 4.146C15.4479 4.23989 15.5006 4.36722 15.5006 4.5C15.5006 4.63278 15.4479 4.76011 15.354 4.854C15.2601 4.94789 15.1328 5.00063 15 5.00063C14.8672 5.00063 14.7399 4.94789 14.646 4.854L11.5 1.707V11.5C11.5 12.163 11.2366 12.7989 10.7678 13.2678C10.2989 13.7366 9.66304 14 9 14H1C0.867392 14 0.740214 13.9473 0.646446 13.8536C0.552678 13.7598 0.5 13.6326 0.5 13.5C0.5 13.3674 0.552678 13.2402 0.646446 13.1464C0.740214 13.0527 0.867392 13 1 13H9C9.39782 13 9.77936 12.842 10.0607 12.5607C10.342 12.2794 10.5 11.8978 10.5 11.5V1.707L7.354 4.854C7.26011 4.94789 7.13278 5.00063 7 5.00063C6.86722 5.00063 6.73989 4.94789 6.646 4.854C6.55211 4.76011 6.49937 4.63278 6.49937 4.5C6.49937 4.36722 6.55211 4.23989 6.646 4.146L10.646 0.146Z" />
									<path d="M10.646 0.146L11.354 0.852213L11.3531 0.853106L10.646 0.146ZM11.354 0.146L10.6469 0.853107L10.646 0.852212L11.354 0.146ZM15.354 4.146L16.0611 3.43889L15.354 4.146ZM15 5.00063V4.00063V5.00063ZM14.646 4.854L13.9389 5.56111L13.9388 5.56099L14.646 4.854ZM11.5 1.707H10.5V-0.707757L12.2072 1.00001L11.5 1.707ZM1 14V15V14ZM1 13V12V13ZM10.5 1.707L9.79278 1.00001L11.5 -0.707757V1.707H10.5ZM7.354 4.854L8.06122 5.56099L8.06111 5.56111L7.354 4.854ZM7 5.00063V6.00063V5.00063ZM6.49937 4.5H5.49937H6.49937ZM6.646 4.146L5.93889 3.43889L6.646 4.146ZM9.938 -0.560212C10.0773 -0.699903 10.2429 -0.810731 10.4251 -0.88635L11.1916 0.960925C11.2524 0.935719 11.3076 0.898776 11.354 0.852212L9.938 -0.560212ZM10.4251 -0.88635C10.6073 -0.961969 10.8027 -1.00089 11 -1.00089V0.999106C11.0658 0.999106 11.1309 0.986132 11.1916 0.960925L10.4251 -0.88635ZM11 -1.00089C11.1973 -1.00089 11.3927 -0.961968 11.5749 -0.88635L10.8084 0.960925C10.8691 0.986131 10.9342 0.999106 11 0.999106V-1.00089ZM11.5749 -0.88635C11.7571 -0.810733 11.9227 -0.699906 12.062 -0.560212L10.646 0.852212C10.6924 0.89878 10.7476 0.935721 10.8084 0.960925L11.5749 -0.88635ZM12.0611 -0.561107L16.0611 3.43889L14.6469 4.85311L10.6469 0.853106L12.0611 -0.561107ZM16.0611 3.43889C16.3425 3.72032 16.5006 4.10201 16.5006 4.5H14.5006C14.5006 4.63244 14.5532 4.75946 14.6469 4.85311L16.0611 3.43889ZM16.5006 4.5C16.5006 4.89799 16.3425 5.27968 16.0611 5.56111L14.6469 4.14689C14.5532 4.24054 14.5006 4.36756 14.5006 4.5H16.5006ZM16.0611 5.56111C15.7797 5.84253 15.398 6.00063 15 6.00063V4.00063C14.8676 4.00063 14.7405 4.05324 14.6469 4.14689L16.0611 5.56111ZM15 6.00063C14.602 6.00063 14.2203 5.84253 13.9389 5.56111L15.3531 4.14689C15.2595 4.05324 15.1324 4.00063 15 4.00063V6.00063ZM13.9388 5.56099L10.7928 2.41399L12.2072 1.00001L15.3532 4.14701L13.9388 5.56099ZM12.5 1.707V11.5H10.5V1.707H12.5ZM12.5 11.5C12.5 12.4283 12.1313 13.3185 11.4749 13.9749L10.0607 12.5607C10.342 12.2794 10.5 11.8978 10.5 11.5H12.5ZM11.4749 13.9749C10.8185 14.6313 9.92826 15 9 15V13C9.39782 13 9.77936 12.842 10.0607 12.5607L11.4749 13.9749ZM9 15H1V13H9V15ZM1 15C0.602176 15 0.220645 14.842 -0.0606605 14.5607L1.35355 13.1464C1.25978 13.0527 1.13261 13 1 13V15ZM-0.0606605 14.5607C-0.341967 14.2794 -0.5 13.8978 -0.5 13.5H1.5C1.5 13.3674 1.44732 13.2402 1.35355 13.1464L-0.0606605 14.5607ZM-0.5 13.5C-0.5 13.1022 -0.341967 12.7206 -0.0606605 12.4393L1.35355 13.8536C1.44732 13.7598 1.5 13.6326 1.5 13.5H-0.5ZM-0.0606605 12.4393C0.220645 12.158 0.602176 12 1 12V14C1.13261 14 1.25978 13.9473 1.35355 13.8536L-0.0606605 12.4393ZM1 12H9V14H1V12ZM9 12C9.13261 12 9.25978 11.9473 9.35355 11.8536L10.7678 13.2678C10.2989 13.7366 9.66304 14 9 14V12ZM9.35355 11.8536C9.44732 11.7598 9.5 11.6326 9.5 11.5H11.5C11.5 12.163 11.2366 12.7989 10.7678 13.2678L9.35355 11.8536ZM9.5 11.5V1.707H11.5V11.5H9.5ZM11.2072 2.41399L8.06122 5.56099L6.64678 4.14701L9.79278 1.00001L11.2072 2.41399ZM8.06111 5.56111C7.77968 5.84253 7.39799 6.00063 7 6.00063V4.00063C6.86756 4.00063 6.74054 4.05324 6.64689 4.14689L8.06111 5.56111ZM7 6.00063C6.60201 6.00063 6.22032 5.84253 5.93889 5.56111L7.35311 4.14689C7.25946 4.05324 7.13244 4.00063 7 4.00063V6.00063ZM5.93889 5.56111C5.65747 5.27968 5.49937 4.89799 5.49937 4.5H7.49937C7.49937 4.36756 7.44676 4.24054 7.35311 4.14689L5.93889 5.56111ZM5.49937 4.5C5.49937 4.10201 5.65747 3.72032 5.93889 3.43889L7.35311 4.85311C7.44676 4.75946 7.49937 4.63244 7.49937 4.5H5.49937ZM5.93889 3.43889L9.93889 -0.561107L11.3531 0.853106L7.35311 4.85311L5.93889 3.43889Z" mask="url(#path-1-inside-1_1356_1356)" />
								</svg>
							</h2>
							{companys.map(company => (
								<li
									className="footer__li"
									key={company.id}
								>
									<a href={company.link}>{company.name}</a>
									<svg className="arrow-right" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
										<mask id="path-1-inside-1_1134_1009" fill="white">
											<path fillRule="evenodd" clipRule="evenodd" d="M13.854 5.35463C13.9006 5.30819 13.9375 5.25301 13.9627 5.19227C13.9879 5.13152 14.0009 5.0664 14.0009 5.00063C14.0009 4.93486 13.9879 4.86974 13.9627 4.809C13.9375 4.74825 13.9006 4.69308 13.854 4.64663L9.854 0.646631C9.76011 0.552745 9.63278 0.5 9.5 0.5C9.36722 0.5 9.23989 0.552745 9.146 0.646631C9.05211 0.740518 8.99937 0.867856 8.99937 1.00063C8.99937 1.13341 9.05211 1.26074 9.146 1.35463L12.293 4.50063H2.5C1.83696 4.50063 1.20107 4.76402 0.732233 5.23286C0.263392 5.70171 0 6.33759 0 7.00063V15.0006C0 15.1332 0.0526784 15.2604 0.146447 15.3542C0.240215 15.448 0.367392 15.5006 0.5 15.5006C0.632608 15.5006 0.759785 15.448 0.853553 15.3542C0.947322 15.2604 1 15.1332 1 15.0006V7.00063C1 6.60281 1.15804 6.22128 1.43934 5.93997C1.72064 5.65867 2.10218 5.50063 2.5 5.50063H12.293L9.146 8.64663C9.05211 8.74052 8.99937 8.86786 8.99937 9.00063C8.99937 9.13341 9.05211 9.26075 9.146 9.35463C9.23989 9.44852 9.36722 9.50126 9.5 9.50126C9.63278 9.50126 9.76011 9.44852 9.854 9.35463L13.854 5.35463Z" />
										</mask>
										<path fillRule="evenodd" clipRule="evenodd" d="M13.854 5.35463C13.9006 5.30819 13.9375 5.25301 13.9627 5.19227C13.9879 5.13152 14.0009 5.0664 14.0009 5.00063C14.0009 4.93486 13.9879 4.86974 13.9627 4.809C13.9375 4.74825 13.9006 4.69308 13.854 4.64663L9.854 0.646631C9.76011 0.552745 9.63278 0.5 9.5 0.5C9.36722 0.5 9.23989 0.552745 9.146 0.646631C9.05211 0.740518 8.99937 0.867856 8.99937 1.00063C8.99937 1.13341 9.05211 1.26074 9.146 1.35463L12.293 4.50063H2.5C1.83696 4.50063 1.20107 4.76402 0.732233 5.23286C0.263392 5.70171 0 6.33759 0 7.00063V15.0006C0 15.1332 0.0526784 15.2604 0.146447 15.3542C0.240215 15.448 0.367392 15.5006 0.5 15.5006C0.632608 15.5006 0.759785 15.448 0.853553 15.3542C0.947322 15.2604 1 15.1332 1 15.0006V7.00063C1 6.60281 1.15804 6.22128 1.43934 5.93997C1.72064 5.65867 2.10218 5.50063 2.5 5.50063H12.293L9.146 8.64663C9.05211 8.74052 8.99937 8.86786 8.99937 9.00063C8.99937 9.13341 9.05211 9.26075 9.146 9.35463C9.23989 9.44852 9.36722 9.50126 9.5 9.50126C9.63278 9.50126 9.76011 9.44852 9.854 9.35463L13.854 5.35463Z" />
										<path d="M13.854 5.35463L13.1478 4.64663L13.1469 4.64752L13.854 5.35463ZM13.854 4.64663L13.1469 5.35374L13.1478 5.35463L13.854 4.64663ZM9.854 0.646631L10.5611 -0.0604755V-0.0604756L9.854 0.646631ZM8.99937 1.00063H9.99937H8.99937ZM9.146 1.35463L8.43889 2.06174L8.43901 2.06185L9.146 1.35463ZM12.293 4.50063V5.50063H14.7078L13 3.79341L12.293 4.50063ZM2.5 4.50063V3.50063V4.50063ZM0 7.00063H-1H0ZM0 15.0006H-1H0ZM1 15.0006H2H1ZM12.293 5.50063L13 6.20785L14.7078 4.50063H12.293V5.50063ZM9.146 8.64663L8.43901 7.93941L8.43889 7.93952L9.146 8.64663ZM8.99937 9.00063H7.99937H8.99937ZM9.5 9.50126V10.5013V9.50126ZM9.854 9.35463L10.5611 10.0617L9.854 9.35463ZM14.5602 6.06263C14.6999 5.92329 14.8107 5.75777 14.8863 5.57553L13.0391 4.809C13.0643 4.74825 13.1012 4.69308 13.1478 4.64663L14.5602 6.06263ZM14.8863 5.57553C14.962 5.3933 15.0009 5.19793 15.0009 5.00063H13.0009C13.0009 4.93486 13.0139 4.86974 13.0391 4.809L14.8863 5.57553ZM15.0009 5.00063C15.0009 4.80333 14.962 4.60796 14.8863 4.42573L13.0391 5.19227C13.0139 5.13152 13.0009 5.0664 13.0009 5.00063H15.0009ZM14.8863 4.42573C14.8107 4.2435 14.6999 4.07797 14.5602 3.93863L13.1478 5.35463C13.1012 5.30818 13.0643 5.25301 13.0391 5.19227L14.8863 4.42573ZM14.5611 3.93952L10.5611 -0.0604755L9.14689 1.35374L13.1469 5.35374L14.5611 3.93952ZM10.5611 -0.0604756C10.2797 -0.3419 9.89799 -0.5 9.5 -0.5V1.5C9.36756 1.5 9.24054 1.44739 9.14689 1.35374L10.5611 -0.0604756ZM9.5 -0.5C9.10201 -0.5 8.72032 -0.3419 8.43889 -0.0604755L9.85311 1.35374C9.75946 1.44739 9.63244 1.5 9.5 1.5V-0.5ZM8.43889 -0.0604755C8.15747 0.220949 7.99937 0.602641 7.99937 1.00063H9.99937C9.99937 1.13307 9.94676 1.26009 9.85311 1.35374L8.43889 -0.0604755ZM7.99937 1.00063C7.99937 1.39862 8.15747 1.78031 8.43889 2.06174L9.85311 0.647525C9.94676 0.741176 9.99937 0.868193 9.99937 1.00063H7.99937ZM8.43901 2.06185L11.586 5.20785L13 3.79341L9.85299 0.647412L8.43901 2.06185ZM12.293 3.50063H2.5V5.50063H12.293V3.50063ZM2.5 3.50063C1.57174 3.50063 0.681504 3.86938 0.0251263 4.52576L1.43934 5.93997C1.72064 5.65867 2.10218 5.50063 2.5 5.50063V3.50063ZM0.0251263 4.52576C-0.631251 5.18214 -1 6.07237 -1 7.00063H1C1 6.60281 1.15804 6.22128 1.43934 5.93997L0.0251263 4.52576ZM-1 7.00063V15.0006H1V7.00063H-1ZM-1 15.0006C-1 15.3985 -0.841965 15.78 -0.56066 16.0613L0.853553 14.6471C0.947322 14.7408 1 14.868 1 15.0006H-1ZM-0.56066 16.0613C-0.279354 16.3426 0.102177 16.5006 0.5 16.5006V14.5006C0.632606 14.5006 0.759784 14.5533 0.853553 14.6471L-0.56066 16.0613ZM0.5 16.5006C0.897823 16.5006 1.27935 16.3426 1.56066 16.0613L0.146447 14.6471C0.240216 14.5533 0.367394 14.5006 0.5 14.5006V16.5006ZM1.56066 16.0613C1.84197 15.78 2 15.3985 2 15.0006H0C0 14.868 0.0526778 14.7408 0.146447 14.6471L1.56066 16.0613ZM2 15.0006V7.00063H0V15.0006H2ZM2 7.00063C2 6.86802 2.05268 6.74085 2.14645 6.64708L0.732233 5.23287C0.263393 5.70171 0 6.33759 0 7.00063H2ZM2.14645 6.64708C2.24022 6.55331 2.36739 6.50063 2.5 6.50063V4.50063C1.83696 4.50063 1.20107 4.76403 0.732233 5.23287L2.14645 6.64708ZM2.5 6.50063H12.293V4.50063H2.5V6.50063ZM11.586 4.79341L8.43901 7.93941L9.85299 9.35385L13 6.20785L11.586 4.79341ZM8.43889 7.93952C8.15747 8.22095 7.99937 8.60264 7.99937 9.00063H9.99937C9.99937 9.13307 9.94676 9.26009 9.85311 9.35374L8.43889 7.93952ZM7.99937 9.00063C7.99937 9.39862 8.15747 9.78031 8.43889 10.0617L9.85311 8.64752C9.94676 8.74118 9.99937 8.86819 9.99937 9.00063H7.99937ZM8.43889 10.0617C8.72032 10.3432 9.10201 10.5013 9.5 10.5013V8.50126C9.63244 8.50126 9.75946 8.55387 9.85311 8.64752L8.43889 10.0617ZM9.5 10.5013C9.89799 10.5013 10.2797 10.3432 10.5611 10.0617L9.14689 8.64752C9.24054 8.55387 9.36756 8.50126 9.5 8.50126V10.5013ZM10.5611 10.0617L14.5611 6.06174L13.1469 4.64752L9.14689 8.64752L10.5611 10.0617Z" mask="url(#path-1-inside-1_1134_1009)" />
									</svg>
								</li>
							))}
						</ul>
						<ul className="footer__about-us">
							<h2 className="footer__nav-title">
								<Link
									to="hero-page"
									spy={true}
									smooth={true}
									offset={-100}
									duration={100}
								>
									О нас

								</Link>
								<svg className="arrow-up" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
									<mask id="path-1-inside-1_1356_1356" fill="white">
										<path fillRule="evenodd" clipRule="evenodd" d="M10.646 0.146C10.6924 0.0994368 10.7476 0.0624943 10.8084 0.0372877C10.8691 0.0120811 10.9342 -0.000893593 11 -0.000893593C11.0658 -0.000893593 11.1309 0.0120811 11.1916 0.0372877C11.2524 0.0624943 11.3076 0.0994368 11.354 0.146L15.354 4.146C15.4479 4.23989 15.5006 4.36722 15.5006 4.5C15.5006 4.63278 15.4479 4.76011 15.354 4.854C15.2601 4.94789 15.1328 5.00063 15 5.00063C14.8672 5.00063 14.7399 4.94789 14.646 4.854L11.5 1.707V11.5C11.5 12.163 11.2366 12.7989 10.7678 13.2678C10.2989 13.7366 9.66304 14 9 14H1C0.867392 14 0.740214 13.9473 0.646446 13.8536C0.552678 13.7598 0.5 13.6326 0.5 13.5C0.5 13.3674 0.552678 13.2402 0.646446 13.1464C0.740214 13.0527 0.867392 13 1 13H9C9.39782 13 9.77936 12.842 10.0607 12.5607C10.342 12.2794 10.5 11.8978 10.5 11.5V1.707L7.354 4.854C7.26011 4.94789 7.13278 5.00063 7 5.00063C6.86722 5.00063 6.73989 4.94789 6.646 4.854C6.55211 4.76011 6.49937 4.63278 6.49937 4.5C6.49937 4.36722 6.55211 4.23989 6.646 4.146L10.646 0.146Z" />
									</mask>
									<path fillRule="evenodd" clipRule="evenodd" d="M10.646 0.146C10.6924 0.0994368 10.7476 0.0624943 10.8084 0.0372877C10.8691 0.0120811 10.9342 -0.000893593 11 -0.000893593C11.0658 -0.000893593 11.1309 0.0120811 11.1916 0.0372877C11.2524 0.0624943 11.3076 0.0994368 11.354 0.146L15.354 4.146C15.4479 4.23989 15.5006 4.36722 15.5006 4.5C15.5006 4.63278 15.4479 4.76011 15.354 4.854C15.2601 4.94789 15.1328 5.00063 15 5.00063C14.8672 5.00063 14.7399 4.94789 14.646 4.854L11.5 1.707V11.5C11.5 12.163 11.2366 12.7989 10.7678 13.2678C10.2989 13.7366 9.66304 14 9 14H1C0.867392 14 0.740214 13.9473 0.646446 13.8536C0.552678 13.7598 0.5 13.6326 0.5 13.5C0.5 13.3674 0.552678 13.2402 0.646446 13.1464C0.740214 13.0527 0.867392 13 1 13H9C9.39782 13 9.77936 12.842 10.0607 12.5607C10.342 12.2794 10.5 11.8978 10.5 11.5V1.707L7.354 4.854C7.26011 4.94789 7.13278 5.00063 7 5.00063C6.86722 5.00063 6.73989 4.94789 6.646 4.854C6.55211 4.76011 6.49937 4.63278 6.49937 4.5C6.49937 4.36722 6.55211 4.23989 6.646 4.146L10.646 0.146Z" />
									<path d="M10.646 0.146L11.354 0.852213L11.3531 0.853106L10.646 0.146ZM11.354 0.146L10.6469 0.853107L10.646 0.852212L11.354 0.146ZM15.354 4.146L16.0611 3.43889L15.354 4.146ZM15 5.00063V4.00063V5.00063ZM14.646 4.854L13.9389 5.56111L13.9388 5.56099L14.646 4.854ZM11.5 1.707H10.5V-0.707757L12.2072 1.00001L11.5 1.707ZM1 14V15V14ZM1 13V12V13ZM10.5 1.707L9.79278 1.00001L11.5 -0.707757V1.707H10.5ZM7.354 4.854L8.06122 5.56099L8.06111 5.56111L7.354 4.854ZM7 5.00063V6.00063V5.00063ZM6.49937 4.5H5.49937H6.49937ZM6.646 4.146L5.93889 3.43889L6.646 4.146ZM9.938 -0.560212C10.0773 -0.699903 10.2429 -0.810731 10.4251 -0.88635L11.1916 0.960925C11.2524 0.935719 11.3076 0.898776 11.354 0.852212L9.938 -0.560212ZM10.4251 -0.88635C10.6073 -0.961969 10.8027 -1.00089 11 -1.00089V0.999106C11.0658 0.999106 11.1309 0.986132 11.1916 0.960925L10.4251 -0.88635ZM11 -1.00089C11.1973 -1.00089 11.3927 -0.961968 11.5749 -0.88635L10.8084 0.960925C10.8691 0.986131 10.9342 0.999106 11 0.999106V-1.00089ZM11.5749 -0.88635C11.7571 -0.810733 11.9227 -0.699906 12.062 -0.560212L10.646 0.852212C10.6924 0.89878 10.7476 0.935721 10.8084 0.960925L11.5749 -0.88635ZM12.0611 -0.561107L16.0611 3.43889L14.6469 4.85311L10.6469 0.853106L12.0611 -0.561107ZM16.0611 3.43889C16.3425 3.72032 16.5006 4.10201 16.5006 4.5H14.5006C14.5006 4.63244 14.5532 4.75946 14.6469 4.85311L16.0611 3.43889ZM16.5006 4.5C16.5006 4.89799 16.3425 5.27968 16.0611 5.56111L14.6469 4.14689C14.5532 4.24054 14.5006 4.36756 14.5006 4.5H16.5006ZM16.0611 5.56111C15.7797 5.84253 15.398 6.00063 15 6.00063V4.00063C14.8676 4.00063 14.7405 4.05324 14.6469 4.14689L16.0611 5.56111ZM15 6.00063C14.602 6.00063 14.2203 5.84253 13.9389 5.56111L15.3531 4.14689C15.2595 4.05324 15.1324 4.00063 15 4.00063V6.00063ZM13.9388 5.56099L10.7928 2.41399L12.2072 1.00001L15.3532 4.14701L13.9388 5.56099ZM12.5 1.707V11.5H10.5V1.707H12.5ZM12.5 11.5C12.5 12.4283 12.1313 13.3185 11.4749 13.9749L10.0607 12.5607C10.342 12.2794 10.5 11.8978 10.5 11.5H12.5ZM11.4749 13.9749C10.8185 14.6313 9.92826 15 9 15V13C9.39782 13 9.77936 12.842 10.0607 12.5607L11.4749 13.9749ZM9 15H1V13H9V15ZM1 15C0.602176 15 0.220645 14.842 -0.0606605 14.5607L1.35355 13.1464C1.25978 13.0527 1.13261 13 1 13V15ZM-0.0606605 14.5607C-0.341967 14.2794 -0.5 13.8978 -0.5 13.5H1.5C1.5 13.3674 1.44732 13.2402 1.35355 13.1464L-0.0606605 14.5607ZM-0.5 13.5C-0.5 13.1022 -0.341967 12.7206 -0.0606605 12.4393L1.35355 13.8536C1.44732 13.7598 1.5 13.6326 1.5 13.5H-0.5ZM-0.0606605 12.4393C0.220645 12.158 0.602176 12 1 12V14C1.13261 14 1.25978 13.9473 1.35355 13.8536L-0.0606605 12.4393ZM1 12H9V14H1V12ZM9 12C9.13261 12 9.25978 11.9473 9.35355 11.8536L10.7678 13.2678C10.2989 13.7366 9.66304 14 9 14V12ZM9.35355 11.8536C9.44732 11.7598 9.5 11.6326 9.5 11.5H11.5C11.5 12.163 11.2366 12.7989 10.7678 13.2678L9.35355 11.8536ZM9.5 11.5V1.707H11.5V11.5H9.5ZM11.2072 2.41399L8.06122 5.56099L6.64678 4.14701L9.79278 1.00001L11.2072 2.41399ZM8.06111 5.56111C7.77968 5.84253 7.39799 6.00063 7 6.00063V4.00063C6.86756 4.00063 6.74054 4.05324 6.64689 4.14689L8.06111 5.56111ZM7 6.00063C6.60201 6.00063 6.22032 5.84253 5.93889 5.56111L7.35311 4.14689C7.25946 4.05324 7.13244 4.00063 7 4.00063V6.00063ZM5.93889 5.56111C5.65747 5.27968 5.49937 4.89799 5.49937 4.5H7.49937C7.49937 4.36756 7.44676 4.24054 7.35311 4.14689L5.93889 5.56111ZM5.49937 4.5C5.49937 4.10201 5.65747 3.72032 5.93889 3.43889L7.35311 4.85311C7.44676 4.75946 7.49937 4.63244 7.49937 4.5H5.49937ZM5.93889 3.43889L9.93889 -0.561107L11.3531 0.853106L7.35311 4.85311L5.93889 3.43889Z" mask="url(#path-1-inside-1_1356_1356)" />
								</svg>
							</h2>
							<li className="footer__li footer__li_arrow-up">
								<Link
									to="news"
									spy={true}
									smooth={true}
									offset={-100}
									duration={100}
								>
									Новости

								</Link>
								<svg className="arrow-up" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
									<mask id="path-1-inside-1_1356_1356" fill="white">
										<path fillRule="evenodd" clipRule="evenodd" d="M10.646 0.146C10.6924 0.0994368 10.7476 0.0624943 10.8084 0.0372877C10.8691 0.0120811 10.9342 -0.000893593 11 -0.000893593C11.0658 -0.000893593 11.1309 0.0120811 11.1916 0.0372877C11.2524 0.0624943 11.3076 0.0994368 11.354 0.146L15.354 4.146C15.4479 4.23989 15.5006 4.36722 15.5006 4.5C15.5006 4.63278 15.4479 4.76011 15.354 4.854C15.2601 4.94789 15.1328 5.00063 15 5.00063C14.8672 5.00063 14.7399 4.94789 14.646 4.854L11.5 1.707V11.5C11.5 12.163 11.2366 12.7989 10.7678 13.2678C10.2989 13.7366 9.66304 14 9 14H1C0.867392 14 0.740214 13.9473 0.646446 13.8536C0.552678 13.7598 0.5 13.6326 0.5 13.5C0.5 13.3674 0.552678 13.2402 0.646446 13.1464C0.740214 13.0527 0.867392 13 1 13H9C9.39782 13 9.77936 12.842 10.0607 12.5607C10.342 12.2794 10.5 11.8978 10.5 11.5V1.707L7.354 4.854C7.26011 4.94789 7.13278 5.00063 7 5.00063C6.86722 5.00063 6.73989 4.94789 6.646 4.854C6.55211 4.76011 6.49937 4.63278 6.49937 4.5C6.49937 4.36722 6.55211 4.23989 6.646 4.146L10.646 0.146Z" />
									</mask>
									<path fillRule="evenodd" clipRule="evenodd" d="M10.646 0.146C10.6924 0.0994368 10.7476 0.0624943 10.8084 0.0372877C10.8691 0.0120811 10.9342 -0.000893593 11 -0.000893593C11.0658 -0.000893593 11.1309 0.0120811 11.1916 0.0372877C11.2524 0.0624943 11.3076 0.0994368 11.354 0.146L15.354 4.146C15.4479 4.23989 15.5006 4.36722 15.5006 4.5C15.5006 4.63278 15.4479 4.76011 15.354 4.854C15.2601 4.94789 15.1328 5.00063 15 5.00063C14.8672 5.00063 14.7399 4.94789 14.646 4.854L11.5 1.707V11.5C11.5 12.163 11.2366 12.7989 10.7678 13.2678C10.2989 13.7366 9.66304 14 9 14H1C0.867392 14 0.740214 13.9473 0.646446 13.8536C0.552678 13.7598 0.5 13.6326 0.5 13.5C0.5 13.3674 0.552678 13.2402 0.646446 13.1464C0.740214 13.0527 0.867392 13 1 13H9C9.39782 13 9.77936 12.842 10.0607 12.5607C10.342 12.2794 10.5 11.8978 10.5 11.5V1.707L7.354 4.854C7.26011 4.94789 7.13278 5.00063 7 5.00063C6.86722 5.00063 6.73989 4.94789 6.646 4.854C6.55211 4.76011 6.49937 4.63278 6.49937 4.5C6.49937 4.36722 6.55211 4.23989 6.646 4.146L10.646 0.146Z" />
									<path d="M10.646 0.146L11.354 0.852213L11.3531 0.853106L10.646 0.146ZM11.354 0.146L10.6469 0.853107L10.646 0.852212L11.354 0.146ZM15.354 4.146L16.0611 3.43889L15.354 4.146ZM15 5.00063V4.00063V5.00063ZM14.646 4.854L13.9389 5.56111L13.9388 5.56099L14.646 4.854ZM11.5 1.707H10.5V-0.707757L12.2072 1.00001L11.5 1.707ZM1 14V15V14ZM1 13V12V13ZM10.5 1.707L9.79278 1.00001L11.5 -0.707757V1.707H10.5ZM7.354 4.854L8.06122 5.56099L8.06111 5.56111L7.354 4.854ZM7 5.00063V6.00063V5.00063ZM6.49937 4.5H5.49937H6.49937ZM6.646 4.146L5.93889 3.43889L6.646 4.146ZM9.938 -0.560212C10.0773 -0.699903 10.2429 -0.810731 10.4251 -0.88635L11.1916 0.960925C11.2524 0.935719 11.3076 0.898776 11.354 0.852212L9.938 -0.560212ZM10.4251 -0.88635C10.6073 -0.961969 10.8027 -1.00089 11 -1.00089V0.999106C11.0658 0.999106 11.1309 0.986132 11.1916 0.960925L10.4251 -0.88635ZM11 -1.00089C11.1973 -1.00089 11.3927 -0.961968 11.5749 -0.88635L10.8084 0.960925C10.8691 0.986131 10.9342 0.999106 11 0.999106V-1.00089ZM11.5749 -0.88635C11.7571 -0.810733 11.9227 -0.699906 12.062 -0.560212L10.646 0.852212C10.6924 0.89878 10.7476 0.935721 10.8084 0.960925L11.5749 -0.88635ZM12.0611 -0.561107L16.0611 3.43889L14.6469 4.85311L10.6469 0.853106L12.0611 -0.561107ZM16.0611 3.43889C16.3425 3.72032 16.5006 4.10201 16.5006 4.5H14.5006C14.5006 4.63244 14.5532 4.75946 14.6469 4.85311L16.0611 3.43889ZM16.5006 4.5C16.5006 4.89799 16.3425 5.27968 16.0611 5.56111L14.6469 4.14689C14.5532 4.24054 14.5006 4.36756 14.5006 4.5H16.5006ZM16.0611 5.56111C15.7797 5.84253 15.398 6.00063 15 6.00063V4.00063C14.8676 4.00063 14.7405 4.05324 14.6469 4.14689L16.0611 5.56111ZM15 6.00063C14.602 6.00063 14.2203 5.84253 13.9389 5.56111L15.3531 4.14689C15.2595 4.05324 15.1324 4.00063 15 4.00063V6.00063ZM13.9388 5.56099L10.7928 2.41399L12.2072 1.00001L15.3532 4.14701L13.9388 5.56099ZM12.5 1.707V11.5H10.5V1.707H12.5ZM12.5 11.5C12.5 12.4283 12.1313 13.3185 11.4749 13.9749L10.0607 12.5607C10.342 12.2794 10.5 11.8978 10.5 11.5H12.5ZM11.4749 13.9749C10.8185 14.6313 9.92826 15 9 15V13C9.39782 13 9.77936 12.842 10.0607 12.5607L11.4749 13.9749ZM9 15H1V13H9V15ZM1 15C0.602176 15 0.220645 14.842 -0.0606605 14.5607L1.35355 13.1464C1.25978 13.0527 1.13261 13 1 13V15ZM-0.0606605 14.5607C-0.341967 14.2794 -0.5 13.8978 -0.5 13.5H1.5C1.5 13.3674 1.44732 13.2402 1.35355 13.1464L-0.0606605 14.5607ZM-0.5 13.5C-0.5 13.1022 -0.341967 12.7206 -0.0606605 12.4393L1.35355 13.8536C1.44732 13.7598 1.5 13.6326 1.5 13.5H-0.5ZM-0.0606605 12.4393C0.220645 12.158 0.602176 12 1 12V14C1.13261 14 1.25978 13.9473 1.35355 13.8536L-0.0606605 12.4393ZM1 12H9V14H1V12ZM9 12C9.13261 12 9.25978 11.9473 9.35355 11.8536L10.7678 13.2678C10.2989 13.7366 9.66304 14 9 14V12ZM9.35355 11.8536C9.44732 11.7598 9.5 11.6326 9.5 11.5H11.5C11.5 12.163 11.2366 12.7989 10.7678 13.2678L9.35355 11.8536ZM9.5 11.5V1.707H11.5V11.5H9.5ZM11.2072 2.41399L8.06122 5.56099L6.64678 4.14701L9.79278 1.00001L11.2072 2.41399ZM8.06111 5.56111C7.77968 5.84253 7.39799 6.00063 7 6.00063V4.00063C6.86756 4.00063 6.74054 4.05324 6.64689 4.14689L8.06111 5.56111ZM7 6.00063C6.60201 6.00063 6.22032 5.84253 5.93889 5.56111L7.35311 4.14689C7.25946 4.05324 7.13244 4.00063 7 4.00063V6.00063ZM5.93889 5.56111C5.65747 5.27968 5.49937 4.89799 5.49937 4.5H7.49937C7.49937 4.36756 7.44676 4.24054 7.35311 4.14689L5.93889 5.56111ZM5.49937 4.5C5.49937 4.10201 5.65747 3.72032 5.93889 3.43889L7.35311 4.85311C7.44676 4.75946 7.49937 4.63244 7.49937 4.5H5.49937ZM5.93889 3.43889L9.93889 -0.561107L11.3531 0.853106L7.35311 4.85311L5.93889 3.43889Z" mask="url(#path-1-inside-1_1356_1356)" />
								</svg>
								<svg className="arrow-right" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
									<mask id="path-1-inside-1_1134_1009" fill="white">
										<path fillRule="evenodd" clipRule="evenodd" d="M13.854 5.35463C13.9006 5.30819 13.9375 5.25301 13.9627 5.19227C13.9879 5.13152 14.0009 5.0664 14.0009 5.00063C14.0009 4.93486 13.9879 4.86974 13.9627 4.809C13.9375 4.74825 13.9006 4.69308 13.854 4.64663L9.854 0.646631C9.76011 0.552745 9.63278 0.5 9.5 0.5C9.36722 0.5 9.23989 0.552745 9.146 0.646631C9.05211 0.740518 8.99937 0.867856 8.99937 1.00063C8.99937 1.13341 9.05211 1.26074 9.146 1.35463L12.293 4.50063H2.5C1.83696 4.50063 1.20107 4.76402 0.732233 5.23286C0.263392 5.70171 0 6.33759 0 7.00063V15.0006C0 15.1332 0.0526784 15.2604 0.146447 15.3542C0.240215 15.448 0.367392 15.5006 0.5 15.5006C0.632608 15.5006 0.759785 15.448 0.853553 15.3542C0.947322 15.2604 1 15.1332 1 15.0006V7.00063C1 6.60281 1.15804 6.22128 1.43934 5.93997C1.72064 5.65867 2.10218 5.50063 2.5 5.50063H12.293L9.146 8.64663C9.05211 8.74052 8.99937 8.86786 8.99937 9.00063C8.99937 9.13341 9.05211 9.26075 9.146 9.35463C9.23989 9.44852 9.36722 9.50126 9.5 9.50126C9.63278 9.50126 9.76011 9.44852 9.854 9.35463L13.854 5.35463Z" />
									</mask>
									<path fillRule="evenodd" clipRule="evenodd" d="M13.854 5.35463C13.9006 5.30819 13.9375 5.25301 13.9627 5.19227C13.9879 5.13152 14.0009 5.0664 14.0009 5.00063C14.0009 4.93486 13.9879 4.86974 13.9627 4.809C13.9375 4.74825 13.9006 4.69308 13.854 4.64663L9.854 0.646631C9.76011 0.552745 9.63278 0.5 9.5 0.5C9.36722 0.5 9.23989 0.552745 9.146 0.646631C9.05211 0.740518 8.99937 0.867856 8.99937 1.00063C8.99937 1.13341 9.05211 1.26074 9.146 1.35463L12.293 4.50063H2.5C1.83696 4.50063 1.20107 4.76402 0.732233 5.23286C0.263392 5.70171 0 6.33759 0 7.00063V15.0006C0 15.1332 0.0526784 15.2604 0.146447 15.3542C0.240215 15.448 0.367392 15.5006 0.5 15.5006C0.632608 15.5006 0.759785 15.448 0.853553 15.3542C0.947322 15.2604 1 15.1332 1 15.0006V7.00063C1 6.60281 1.15804 6.22128 1.43934 5.93997C1.72064 5.65867 2.10218 5.50063 2.5 5.50063H12.293L9.146 8.64663C9.05211 8.74052 8.99937 8.86786 8.99937 9.00063C8.99937 9.13341 9.05211 9.26075 9.146 9.35463C9.23989 9.44852 9.36722 9.50126 9.5 9.50126C9.63278 9.50126 9.76011 9.44852 9.854 9.35463L13.854 5.35463Z" />
									<path d="M13.854 5.35463L13.1478 4.64663L13.1469 4.64752L13.854 5.35463ZM13.854 4.64663L13.1469 5.35374L13.1478 5.35463L13.854 4.64663ZM9.854 0.646631L10.5611 -0.0604755V-0.0604756L9.854 0.646631ZM8.99937 1.00063H9.99937H8.99937ZM9.146 1.35463L8.43889 2.06174L8.43901 2.06185L9.146 1.35463ZM12.293 4.50063V5.50063H14.7078L13 3.79341L12.293 4.50063ZM2.5 4.50063V3.50063V4.50063ZM0 7.00063H-1H0ZM0 15.0006H-1H0ZM1 15.0006H2H1ZM12.293 5.50063L13 6.20785L14.7078 4.50063H12.293V5.50063ZM9.146 8.64663L8.43901 7.93941L8.43889 7.93952L9.146 8.64663ZM8.99937 9.00063H7.99937H8.99937ZM9.5 9.50126V10.5013V9.50126ZM9.854 9.35463L10.5611 10.0617L9.854 9.35463ZM14.5602 6.06263C14.6999 5.92329 14.8107 5.75777 14.8863 5.57553L13.0391 4.809C13.0643 4.74825 13.1012 4.69308 13.1478 4.64663L14.5602 6.06263ZM14.8863 5.57553C14.962 5.3933 15.0009 5.19793 15.0009 5.00063H13.0009C13.0009 4.93486 13.0139 4.86974 13.0391 4.809L14.8863 5.57553ZM15.0009 5.00063C15.0009 4.80333 14.962 4.60796 14.8863 4.42573L13.0391 5.19227C13.0139 5.13152 13.0009 5.0664 13.0009 5.00063H15.0009ZM14.8863 4.42573C14.8107 4.2435 14.6999 4.07797 14.5602 3.93863L13.1478 5.35463C13.1012 5.30818 13.0643 5.25301 13.0391 5.19227L14.8863 4.42573ZM14.5611 3.93952L10.5611 -0.0604755L9.14689 1.35374L13.1469 5.35374L14.5611 3.93952ZM10.5611 -0.0604756C10.2797 -0.3419 9.89799 -0.5 9.5 -0.5V1.5C9.36756 1.5 9.24054 1.44739 9.14689 1.35374L10.5611 -0.0604756ZM9.5 -0.5C9.10201 -0.5 8.72032 -0.3419 8.43889 -0.0604755L9.85311 1.35374C9.75946 1.44739 9.63244 1.5 9.5 1.5V-0.5ZM8.43889 -0.0604755C8.15747 0.220949 7.99937 0.602641 7.99937 1.00063H9.99937C9.99937 1.13307 9.94676 1.26009 9.85311 1.35374L8.43889 -0.0604755ZM7.99937 1.00063C7.99937 1.39862 8.15747 1.78031 8.43889 2.06174L9.85311 0.647525C9.94676 0.741176 9.99937 0.868193 9.99937 1.00063H7.99937ZM8.43901 2.06185L11.586 5.20785L13 3.79341L9.85299 0.647412L8.43901 2.06185ZM12.293 3.50063H2.5V5.50063H12.293V3.50063ZM2.5 3.50063C1.57174 3.50063 0.681504 3.86938 0.0251263 4.52576L1.43934 5.93997C1.72064 5.65867 2.10218 5.50063 2.5 5.50063V3.50063ZM0.0251263 4.52576C-0.631251 5.18214 -1 6.07237 -1 7.00063H1C1 6.60281 1.15804 6.22128 1.43934 5.93997L0.0251263 4.52576ZM-1 7.00063V15.0006H1V7.00063H-1ZM-1 15.0006C-1 15.3985 -0.841965 15.78 -0.56066 16.0613L0.853553 14.6471C0.947322 14.7408 1 14.868 1 15.0006H-1ZM-0.56066 16.0613C-0.279354 16.3426 0.102177 16.5006 0.5 16.5006V14.5006C0.632606 14.5006 0.759784 14.5533 0.853553 14.6471L-0.56066 16.0613ZM0.5 16.5006C0.897823 16.5006 1.27935 16.3426 1.56066 16.0613L0.146447 14.6471C0.240216 14.5533 0.367394 14.5006 0.5 14.5006V16.5006ZM1.56066 16.0613C1.84197 15.78 2 15.3985 2 15.0006H0C0 14.868 0.0526778 14.7408 0.146447 14.6471L1.56066 16.0613ZM2 15.0006V7.00063H0V15.0006H2ZM2 7.00063C2 6.86802 2.05268 6.74085 2.14645 6.64708L0.732233 5.23287C0.263393 5.70171 0 6.33759 0 7.00063H2ZM2.14645 6.64708C2.24022 6.55331 2.36739 6.50063 2.5 6.50063V4.50063C1.83696 4.50063 1.20107 4.76403 0.732233 5.23287L2.14645 6.64708ZM2.5 6.50063H12.293V4.50063H2.5V6.50063ZM11.586 4.79341L8.43901 7.93941L9.85299 9.35385L13 6.20785L11.586 4.79341ZM8.43889 7.93952C8.15747 8.22095 7.99937 8.60264 7.99937 9.00063H9.99937C9.99937 9.13307 9.94676 9.26009 9.85311 9.35374L8.43889 7.93952ZM7.99937 9.00063C7.99937 9.39862 8.15747 9.78031 8.43889 10.0617L9.85311 8.64752C9.94676 8.74118 9.99937 8.86819 9.99937 9.00063H7.99937ZM8.43889 10.0617C8.72032 10.3432 9.10201 10.5013 9.5 10.5013V8.50126C9.63244 8.50126 9.75946 8.55387 9.85311 8.64752L8.43889 10.0617ZM9.5 10.5013C9.89799 10.5013 10.2797 10.3432 10.5611 10.0617L9.14689 8.64752C9.24054 8.55387 9.36756 8.50126 9.5 8.50126V10.5013ZM10.5611 10.0617L14.5611 6.06174L13.1469 4.64752L9.14689 8.64752L10.5611 10.0617Z" mask="url(#path-1-inside-1_1134_1009)" />
								</svg>
							</li>
						</ul>
					</nav>
					<FormEmail />
				</div>
				<div className="footer__inner footer__inner_bottom">
					<div className="footer__bottom footer__bottom_first">
						<div className="footer__tel firm-btn"><a href={`tel:${contacts.tel}`}>{contacts.tel}</a></div>

						<div className="footer__social-block">
							{socialNetworksData.map(nW => (
								<a
									href={nW.link}
									className="footer__social-link"
									key={nW.id}
								>
									{nW.SVG}
								</a>
							)
							)
							}
						</div>
					</div>
					<div className="footer__bottom footer__bottom_last">
						<div className="footer__contacts">
							<p>{contacts.companyOfficeCity}</p>
							<a href={`tel:${contacts.tel}`}>{contacts.tel}</a>
							<a href={`mailto:${contacts.email}`}>{contacts.email}</a>
						</div>
						<p className="footer__sagirov">сделано в
							<a href="https://sagirov.com/" target="_blank"><img src="/icons/logo-sagirov.png" alt="" /></a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}