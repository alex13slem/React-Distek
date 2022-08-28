import { NewsArticleData } from "../../../../../types"
import Image from 'react-image-webp';

export const NewsArticle = (
	{ data }: { data: NewsArticleData }
) => {
	return (

		<article className="news-article">

			<h4 className="news-article__title">{data.title}</h4>

			<div className="news-article__data-box">
				<span className="news-article__data">{data.data}</span>
			</div>

			<Image
				className="news-article__image"
				src={data.imgJPG}
				webp={data.imgWebP}
			/>

			<a className="news-article__btn" href={data.link}>
				<p>подробнее на <span>distek.tekla.ru</span></p>
			</a>

		</article>


	)

}