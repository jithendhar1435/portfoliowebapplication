import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Ui/Ux design to attract more customer base",
		description:
			"Effective UI/UX design enhances user satisfaction, improves usability, and drives customer loyalty, ultimately boosting your customer base and business growth.",
		keywords: [
			"The Benefits of UI/UX Designs",
			"Vamshi",
			"Vamshi A",
			"Vamshi",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Vamshi",
			"Vamshi A",
			"Vamshi",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
