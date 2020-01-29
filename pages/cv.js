import Layout from "../components/Layout";
import { NextSeo } from "next-seo";

class About extends React.Component {
	render() {
		return (
			<>
				<NextSeo
					title="CV - Vadim Alexeev"
					description="Vadim Alexeev's CV"
				/>
				<Layout>
					<h1>CV:</h1>
					{/*<h2><a href="#">Download a copy in PDF format</a></h2>*/}

					<hr />
					<section>
						<h3>Details:</h3>
						<p>
							Name: <b>Vadim Alexeev</b>
						</p>
						<p>
							Email:{" "}
							<b>
								<a href="mailto:vadim@alexeev.co.uk">
									vadim@alexeev.co.uk
								</a>
							</b>
						</p>
						<p>
							Phone:{" "}
							<b>
								<a href="tel:+447393348314">+44 7393 348314</a>
							</b>
						</p>
						<p>
							Location: <b>West London, United Kingdom</b>
						</p>
					</section>

					<hr />

					<section>
						<h3>Skills:</h3>
						<ul>
							<li>Javascript</li>
							<li>HTML5</li>
							<li>CSS</li>
							<li>Node.JS</li>
							<li>React</li>
							<li>API's</li>
							<li>Wordpress</li>
						</ul>
					</section>

					<hr />

					<section>
						<h3>Experience:</h3>
						<ul>
							<li>
								Web Developer at Q-Online.{" "}
								<b>December 2018 - Current</b>
							</li>
						</ul>
					</section>

					<hr />

					<section>
						<h3>Education</h3>
						<ul>
							<li>BCS Level 3 Certificate in Programming</li>
							<li>
								BCS Level 3 Certificate in Software Development
								Context and Methodologies
							</li>
						</ul>
						<h4>Level 2 qualifications in:</h4>
						<ul>
							<li>Maths</li>
							<li>English</li>
							<li>Computer Science</li>
							<li>Biology</li>
							<li>Physics</li>
						</ul>
					</section>

					<style jsx>{`
						h1 {
							font-size: 35px;
						}
						h2 {
							font-weight: normal;
						}
						h4 {
						}
						a {
							color: rgb(33, 33, 33);
						}
					`}</style>
				</Layout>
			</>
		);
	}
}

export default About;
