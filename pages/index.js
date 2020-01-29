import Layout from "../components/Layout";
import { NextSeo } from "next-seo";

class Index extends React.Component {
	render() {
		return (
			<>
				<NextSeo
					title="Home - Vadim Alexeev"
					description="Home Page of Vadim Alexeev, CV and Projects."
				/>

				<Layout>
					<h1>
						<b>Vadim Alexeev</b>, Full Stack Web Developer.
					</h1>
					<h2>My personal Website with CV and Projects</h2>

					<h3>You can find me around the internet on:</h3>
					<ul>
						<li>
							<a
								href="https://github.com/uncleben69"
								target="_blank"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/vadim-alexeev-797a82196/"
								target="_blank"
							>
								Linkedin
							</a>
						</li>
					</ul>

					<style jsx>{`
						h1 {
							font-weight: normal;
						}
						h2 {
							font-weight: 500;
						}
						h3 {
							font-weight: normal;
						}
						a {
							color: rgb(33, 33, 33);
							font-size: 20px;
						}
						li {
							padding-bottom: 1rem;
						}
					`}</style>
				</Layout>
			</>
		);
	}
}

export default Index;
