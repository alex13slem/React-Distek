import dealersData from "../../../../data/dealers.json"
import contactsData from '../../../../data/contacts.json'

export const Dealers = () => {

	return (
		<section className="dealers" id="dealers">
			<div className="dealers__wrap">
				<div className="dealers__inner">
					<h2 className="dealers__title">
						Дилерская сеть – <br />
						более 30 партнёров
					</h2>
					<ul className="dealers__list">
						{dealersData.map((el, idx) => (
							<li
								key={idx}
							>{el.city}</li>
						))}
					</ul>
					<div className="dealers__contacts">
						<div className="contacts-item">
							<span className="contacts-item__number">01</span>
							<div className="contacts-item__title">
								<h3>хотите стать партнером?</h3>
								<h4>оставьте заявку для консультации</h4>
							</div>
							<button className="contacts-item__btn firm-btn"><a href="#">закажите звонок</a></button>
						</div>
						<div className="contacts-item">
							<span className="contacts-item__number">02</span>
							<p>{contactsData.companyName}</p>
							<p>{contactsData.companyOfficeCity}</p>
						</div>
						<div className="contacts-item">
							<span className="contacts-item__number">03</span>
							<a href={`tel:${contactsData.tel}`}>{contactsData.tel}</a>
							<a href={`mailto:${contactsData.email}`}>{contactsData.email}</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}