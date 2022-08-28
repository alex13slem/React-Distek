import { FormEmail } from "../../../generalComponents/FormEmail"
import { NewsArticle } from "../localComponents/NewsArticle/NewsArticle"
import newsData from "../localData/newsArticleData.json"

export const News = () => {


	return (
		<section className="news" id="news">
			<div className="news__wrap">
				<div className="title-block">
					<h2 className="title-block__title">Новости</h2>
					<h3 className="title-block__subtitle">самое актуальное на сегодняшний день
						в мире bim-проектирования</h3>
				</div>
				<FormEmail />
				<div className="articles-block">
					{
						newsData.map(itemData => (
							<NewsArticle
								data={itemData}
								key={itemData.id}
							/>
						))
					}

				</div>
			</div>
		</section>
	)
}