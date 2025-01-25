// Components/NewsItem.js

import React from "react";

function NewsItem(props) {
	let {
		desc, title, imageURL,
		newsUrl, sourceName
	} = props;
	return (
		<div>
			<div className="card my-3">
				<img src={imageURL}
					className="card-img-top rounded-top"
          			alt="News Thumbnail"
          			style={{ maxHeight: "200px", objectFit: "cover" }} />
				<div className="card-body">
					<h5 className="card-title text-dark">{title}</h5>
					<p className="w-100 fs-6 
						text-body-secondary 
						text-end ">
						- {sourceName}
					</p>
					<p className="card-text text-dark">{desc}</p>
					<a href={newsUrl}
						target="_blank"
						className="btn btn-outline-primary btn-sm">
						Read More...
					</a>
				</div>
			</div>
		</div>
	);
}

export default NewsItem;
