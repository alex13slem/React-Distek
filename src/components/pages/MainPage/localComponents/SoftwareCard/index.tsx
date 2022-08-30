import { Companys, SoftwareCardData } from "../../../../../types"

export const SoftwareCard = (
	{ data }: { data: SoftwareCardData }
) => {

	return (

		<div className="software-card">
			<div className="sotware-card__number box-number"><img src={data.number} alt="" /></div>
			<h3 className="software-card__title">{data.title}</h3>

			<div className="software-card__image"><img src={data.image} alt='' /></div>
			<div className="software-card__product-links">
				{
					data.links.map((links: Companys) => (
						<a
							className="software-card__product-link product-link"
							href={links.link}
							key={links.id}
						>
							<div className="product-link__logo">
								<img src={links.srcImage}
									alt={links.shortname}
								/>
							</div>
							<p>{links.name}</p>
							<svg className="arrow-right" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
								<mask id="path-1-inside-1_1134_1009" fill="white">
									<path fillRule="evenodd" clipRule="evenodd" d="M13.854 5.35463C13.9006 5.30819 13.9375 5.25301 13.9627 5.19227C13.9879 5.13152 14.0009 5.0664 14.0009 5.00063C14.0009 4.93486 13.9879 4.86974 13.9627 4.809C13.9375 4.74825 13.9006 4.69308 13.854 4.64663L9.854 0.646631C9.76011 0.552745 9.63278 0.5 9.5 0.5C9.36722 0.5 9.23989 0.552745 9.146 0.646631C9.05211 0.740518 8.99937 0.867856 8.99937 1.00063C8.99937 1.13341 9.05211 1.26074 9.146 1.35463L12.293 4.50063H2.5C1.83696 4.50063 1.20107 4.76402 0.732233 5.23286C0.263392 5.70171 0 6.33759 0 7.00063V15.0006C0 15.1332 0.0526784 15.2604 0.146447 15.3542C0.240215 15.448 0.367392 15.5006 0.5 15.5006C0.632608 15.5006 0.759785 15.448 0.853553 15.3542C0.947322 15.2604 1 15.1332 1 15.0006V7.00063C1 6.60281 1.15804 6.22128 1.43934 5.93997C1.72064 5.65867 2.10218 5.50063 2.5 5.50063H12.293L9.146 8.64663C9.05211 8.74052 8.99937 8.86786 8.99937 9.00063C8.99937 9.13341 9.05211 9.26075 9.146 9.35463C9.23989 9.44852 9.36722 9.50126 9.5 9.50126C9.63278 9.50126 9.76011 9.44852 9.854 9.35463L13.854 5.35463Z" />
								</mask>
								<path fillRule="evenodd" clipRule="evenodd" d="M13.854 5.35463C13.9006 5.30819 13.9375 5.25301 13.9627 5.19227C13.9879 5.13152 14.0009 5.0664 14.0009 5.00063C14.0009 4.93486 13.9879 4.86974 13.9627 4.809C13.9375 4.74825 13.9006 4.69308 13.854 4.64663L9.854 0.646631C9.76011 0.552745 9.63278 0.5 9.5 0.5C9.36722 0.5 9.23989 0.552745 9.146 0.646631C9.05211 0.740518 8.99937 0.867856 8.99937 1.00063C8.99937 1.13341 9.05211 1.26074 9.146 1.35463L12.293 4.50063H2.5C1.83696 4.50063 1.20107 4.76402 0.732233 5.23286C0.263392 5.70171 0 6.33759 0 7.00063V15.0006C0 15.1332 0.0526784 15.2604 0.146447 15.3542C0.240215 15.448 0.367392 15.5006 0.5 15.5006C0.632608 15.5006 0.759785 15.448 0.853553 15.3542C0.947322 15.2604 1 15.1332 1 15.0006V7.00063C1 6.60281 1.15804 6.22128 1.43934 5.93997C1.72064 5.65867 2.10218 5.50063 2.5 5.50063H12.293L9.146 8.64663C9.05211 8.74052 8.99937 8.86786 8.99937 9.00063C8.99937 9.13341 9.05211 9.26075 9.146 9.35463C9.23989 9.44852 9.36722 9.50126 9.5 9.50126C9.63278 9.50126 9.76011 9.44852 9.854 9.35463L13.854 5.35463Z" />
								<path d="M13.854 5.35463L13.1478 4.64663L13.1469 4.64752L13.854 5.35463ZM13.854 4.64663L13.1469 5.35374L13.1478 5.35463L13.854 4.64663ZM9.854 0.646631L10.5611 -0.0604755V-0.0604756L9.854 0.646631ZM8.99937 1.00063H9.99937H8.99937ZM9.146 1.35463L8.43889 2.06174L8.43901 2.06185L9.146 1.35463ZM12.293 4.50063V5.50063H14.7078L13 3.79341L12.293 4.50063ZM2.5 4.50063V3.50063V4.50063ZM0 7.00063H-1H0ZM0 15.0006H-1H0ZM1 15.0006H2H1ZM12.293 5.50063L13 6.20785L14.7078 4.50063H12.293V5.50063ZM9.146 8.64663L8.43901 7.93941L8.43889 7.93952L9.146 8.64663ZM8.99937 9.00063H7.99937H8.99937ZM9.5 9.50126V10.5013V9.50126ZM9.854 9.35463L10.5611 10.0617L9.854 9.35463ZM14.5602 6.06263C14.6999 5.92329 14.8107 5.75777 14.8863 5.57553L13.0391 4.809C13.0643 4.74825 13.1012 4.69308 13.1478 4.64663L14.5602 6.06263ZM14.8863 5.57553C14.962 5.3933 15.0009 5.19793 15.0009 5.00063H13.0009C13.0009 4.93486 13.0139 4.86974 13.0391 4.809L14.8863 5.57553ZM15.0009 5.00063C15.0009 4.80333 14.962 4.60796 14.8863 4.42573L13.0391 5.19227C13.0139 5.13152 13.0009 5.0664 13.0009 5.00063H15.0009ZM14.8863 4.42573C14.8107 4.2435 14.6999 4.07797 14.5602 3.93863L13.1478 5.35463C13.1012 5.30818 13.0643 5.25301 13.0391 5.19227L14.8863 4.42573ZM14.5611 3.93952L10.5611 -0.0604755L9.14689 1.35374L13.1469 5.35374L14.5611 3.93952ZM10.5611 -0.0604756C10.2797 -0.3419 9.89799 -0.5 9.5 -0.5V1.5C9.36756 1.5 9.24054 1.44739 9.14689 1.35374L10.5611 -0.0604756ZM9.5 -0.5C9.10201 -0.5 8.72032 -0.3419 8.43889 -0.0604755L9.85311 1.35374C9.75946 1.44739 9.63244 1.5 9.5 1.5V-0.5ZM8.43889 -0.0604755C8.15747 0.220949 7.99937 0.602641 7.99937 1.00063H9.99937C9.99937 1.13307 9.94676 1.26009 9.85311 1.35374L8.43889 -0.0604755ZM7.99937 1.00063C7.99937 1.39862 8.15747 1.78031 8.43889 2.06174L9.85311 0.647525C9.94676 0.741176 9.99937 0.868193 9.99937 1.00063H7.99937ZM8.43901 2.06185L11.586 5.20785L13 3.79341L9.85299 0.647412L8.43901 2.06185ZM12.293 3.50063H2.5V5.50063H12.293V3.50063ZM2.5 3.50063C1.57174 3.50063 0.681504 3.86938 0.0251263 4.52576L1.43934 5.93997C1.72064 5.65867 2.10218 5.50063 2.5 5.50063V3.50063ZM0.0251263 4.52576C-0.631251 5.18214 -1 6.07237 -1 7.00063H1C1 6.60281 1.15804 6.22128 1.43934 5.93997L0.0251263 4.52576ZM-1 7.00063V15.0006H1V7.00063H-1ZM-1 15.0006C-1 15.3985 -0.841965 15.78 -0.56066 16.0613L0.853553 14.6471C0.947322 14.7408 1 14.868 1 15.0006H-1ZM-0.56066 16.0613C-0.279354 16.3426 0.102177 16.5006 0.5 16.5006V14.5006C0.632606 14.5006 0.759784 14.5533 0.853553 14.6471L-0.56066 16.0613ZM0.5 16.5006C0.897823 16.5006 1.27935 16.3426 1.56066 16.0613L0.146447 14.6471C0.240216 14.5533 0.367394 14.5006 0.5 14.5006V16.5006ZM1.56066 16.0613C1.84197 15.78 2 15.3985 2 15.0006H0C0 14.868 0.0526778 14.7408 0.146447 14.6471L1.56066 16.0613ZM2 15.0006V7.00063H0V15.0006H2ZM2 7.00063C2 6.86802 2.05268 6.74085 2.14645 6.64708L0.732233 5.23287C0.263393 5.70171 0 6.33759 0 7.00063H2ZM2.14645 6.64708C2.24022 6.55331 2.36739 6.50063 2.5 6.50063V4.50063C1.83696 4.50063 1.20107 4.76403 0.732233 5.23287L2.14645 6.64708ZM2.5 6.50063H12.293V4.50063H2.5V6.50063ZM11.586 4.79341L8.43901 7.93941L9.85299 9.35385L13 6.20785L11.586 4.79341ZM8.43889 7.93952C8.15747 8.22095 7.99937 8.60264 7.99937 9.00063H9.99937C9.99937 9.13307 9.94676 9.26009 9.85311 9.35374L8.43889 7.93952ZM7.99937 9.00063C7.99937 9.39862 8.15747 9.78031 8.43889 10.0617L9.85311 8.64752C9.94676 8.74118 9.99937 8.86819 9.99937 9.00063H7.99937ZM8.43889 10.0617C8.72032 10.3432 9.10201 10.5013 9.5 10.5013V8.50126C9.63244 8.50126 9.75946 8.55387 9.85311 8.64752L8.43889 10.0617ZM9.5 10.5013C9.89799 10.5013 10.2797 10.3432 10.5611 10.0617L9.14689 8.64752C9.24054 8.55387 9.36756 8.50126 9.5 8.50126V10.5013ZM10.5611 10.0617L14.5611 6.06174L13.1469 4.64752L9.14689 8.64752L10.5611 10.0617Z" mask="url(#path-1-inside-1_1134_1009)" />
							</svg>
						</a>
					))
				}
			</div>

			<ul className="software-card__list">
				{
					data.list.map((el: string, idx) => (
						<li
							key={idx}
						>{el}</li>
					))
				}
			</ul>

		</div>

	)

}