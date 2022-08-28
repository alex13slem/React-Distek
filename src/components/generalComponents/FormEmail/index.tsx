export const FormEmail = () => {
	return (
		<form className="form-block">
			<h2 className="form-block__title">
				подпишитесь на наши новости
			</h2>
			<label className="form-block__input" htmlFor="email">
				<input className="form-block__input-email" type="email" name="email" id="news-email" placeholder="your@email.ru" />
				<button className="form-block__input-btn" type="submit">подписаться</button>
			</label>
			<p className="form-block__attention">
				Отправляя заполненную форму, вы принимаете условия <strong>Политики обработки персональных данных</strong> и подписываете <strong>Заявление-согласие субъекта</strong> на передачу его персональных данных третьей стороне.
			</p>
		</form>
	)
}