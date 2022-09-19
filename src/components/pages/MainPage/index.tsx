import { Dealers } from "./Dealers"
import { HeroPage } from "./HeroPage"
import { News } from "./News"
import { Software } from "./Software"




export const MainPage = () => {
	return (
		<main className="main">
			<HeroPage />
			<Software />
			<Dealers />
			<News />
		</main>
	)
}