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
					<h2>
						<a href="/cv.pdf">Download a copy in PDF format</a>
					</h2>

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
							Location: <b>West London, United Kingdom</b>
						</p>
					</section>

					<hr />

					<section>
						<h3>Profile:</h3>
						<p>
							I have been developing websites in my own time since
							2011, starting with basic HTML and CSS. I'm now
							looking to advance my career in Web Development.
						</p>
					</section>

					<hr />

					<section>
						<h3>Skills:</h3>
						<ul>
							<li>Javascript,</li>
							<li>Web Technologies like HTML5 &#38; CSS,</li>
							<li>Node.js &#38; NPM,</li>
							<li>JQuery,</li>
							<li>
								React &#38; Frameworks like Next.js and Gatsby,
							</li>
							<li>Wordpress,</li>
							<li>Rest API's,</li>
							<li>Git.</li>
						</ul>
					</section>

					<hr />

					<section>
						<h3>Experience:</h3>
						<ul>
							<li>
								<p>
									Web Developer at Q-Online.{" "}
									<b>December 2018 - April 2020</b>
								</p>
								<p>
									My main responsibility include creating
									websites using React(GatsbyJS) and
									WordPress. I led a small independent
									team.
								</p>
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
