const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src} style={{ height: "200px", width: "360px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Stay informed with our latest news coverage, delivering concise and insightful updates on global events, technology breakthroughs, and cultural trends. Dive into our curated selection of articles, offering a balanced perspective on politics, science, entertainment, and more. Whether you're seeking to stay ahead in the business world or simply stay entertained, our news provides the essential information you need, presented in a clear and engaging format. Trust us to keep you informed, inspired, and empowered in a rapidly evolving world."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem
