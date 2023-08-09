function NewsItem({ item }) {
  const websiteUrl = item.url;
  const website = websiteUrl.split('https://').pop().split('/')[0];

  const date = item.publishedAt;
  const formatDate = date.replace('T', ' ');
  const formatTime = formatDate.replace('Z', '');

  return (
    <a href={item.url} className="article">
      <div className="article-image">
        <img src={item.urlToImage} alt={item.title} />
      </div>
      <div className="article-content">
        <div className="article-source">
          <img
            src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`}
            alt={item.source.id}
          />
          <span>{item.source.name}</span>
        </div>
        <div className="article-title">
          <h2>{item.title}</h2>
        </div>
        <p className="article-description">{item.description}</p>
        <div className="article-details">
          <small>
            <b>Published At: </b>
            {formatTime}
          </small>
        </div>
      </div>
    </a>
  );
}

export default NewsItem;
