import React, { useState, useEffect, useRef } from "react";
import { Nav, Item, Card, Button, Link } from "react-bootstrap";
import "./News.css";

const News = () => {
  const market_news_key = process.env.REACT_APP_MARKET_NEWS_KEY;

  const [data, setData] = useState(null);
  const [category, setCategory] = useState("business");
  const [topNews, setTopNews] = useState(null);
  const [showingFullArticle, setShowingFullArticle] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [marketNews, setMarketNews] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=${category}&page_size=15`,
      {
        headers: {
          "x-api-key": process.env.REACT_APP_NEWS_API_KEY,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((results) => {
        let uniqueArticles = results.articles.filter(
          (v, i, a) => a.findIndex((v2) => v2.title === v.title) === i
        );
        setTopNews(uniqueArticles[0]);
        setData(uniqueArticles.slice(1));
      })
      .catch((err) => {
        console.log(err.message);
      });

    fetch(`https://finnhub.io/api/v1/news?category=general&token=${market_news_key}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching market news: " + response.status);
        }
        return response.json();
      })
      .then((marketData) => {
        setMarketNews(marketData.slice(0, 15));
      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  }, [category, showingFullArticle]);

  const selectingDataArticle = (e) => {
    setSelectedArticle(data.filter((article) => article._id === e));
    setShowingFullArticle(true);
  };

  const selectingTopNewsArticle = (e) => {
    setSelectedArticle(topNews);
    setShowingFullArticle(true);
  };
  //   console.log(data);

  if (!showingFullArticle) {
    return (
      <>
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => setCategory("business")} selected>
              Business
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => setCategory("economics")}>
              Economics
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={() => setCategory("entertainment")}>
              Entertainment
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" onClick={() => setCategory("finance")}>
              Finance
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5" onClick={() => setCategory("food")}>
              Food
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6" onClick={() => setCategory("gaming")}>
              Gaming
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-7" onClick={() => setCategory("music")}>
              Music
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-8" onClick={() => setCategory("news")}>
              News
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-9" onClick={() => setCategory("politics")}>
              Politics
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-10" onClick={() => setCategory("science")}>
              Science
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-11" onClick={() => setCategory("sport")}>
              Sports
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-12" onClick={() => setCategory("tech")}>
              Technology
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-13" onClick={() => setCategory("travel")}>
              Travel
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-14" onClick={() => setCategory("world")}>
              World
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {topNews && (
          <Nav.Link className="article-link">
            <div
              className="top-news-container"
              onClick={() => selectingTopNewsArticle(topNews._id)}
            >
              <img
                src={topNews.media}
                style={{ width: "70%", maxHeight: "70vh" }}
                alt="top-news-image"
              />
              <div className="top-news-details">
                <h2>{topNews.title}</h2>
                <br />
                <h5 className="top-news-excerpt">{topNews.excerpt}</h5>
                <br />
                <div className="top-news-time-and-author">
                  <p>
                    <strong>Author:</strong> {topNews.author}
                  </p>
                  <p>
                    <strong>Date Published:</strong> {topNews.published_date}
                  </p>
                </div>
              </div>
            </div>
          </Nav.Link>
        )}
        <div className="news-cards-container">
          {data &&
            data.map((news) => (
              <div
                className="individual-cards"
                onClick={() => selectingDataArticle(news._id)}
                key={news._id}
              >
                <Nav.Link className="article-link">
                  <Card style={{ width: "14rem" }} bg="light" key={news._id}>
                    <Card.Img
                      variant="top"
                      src={news.media}
                      style={{ width: "14rem", maxHeight: "7rem" }}
                    />
                    <Card.Body>
                      <p>
                        <strong>{news.title}</strong>
                      </p>
                    </Card.Body>
                  </Card>
                </Nav.Link>
              </div>
            ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Button className="go-back-button" onClick={() => setShowingFullArticle(false)}>
          Go Back
        </Button>
        <div className="article-page-container">
          <div className="article-showing-container">
            <img
              src={selectedArticle[0] ? selectedArticle[0].media : selectedArticle.media}
              style={{ width: "100%", maxHeight: "70vh" }}
              alt="top-news-image"
            />
            <article className="article-showing-details">
              <h1 style={{ fontSize: "3.5vw", fontWeight: "bold" }}>
                {selectedArticle[0] ? selectedArticle[0].title : selectedArticle.title}
              </h1>
              <p>
                <strong>Author: </strong>
                {selectedArticle[0] ? selectedArticle[0].author : selectedArticle.author}
              </p>
              <p>
                <strong>Date Published: </strong>
                {selectedArticle[0]
                  ? selectedArticle[0].date_published
                  : selectedArticle.date_published}
              </p>
              <br />
              <p>{selectedArticle[0] ? selectedArticle[0].summary : selectedArticle.summary}</p>
            </article>
          </div>
          <div className="market-news-container">
            <h2 style={{ marginLeft: "2vw" }}>Market News</h2>
            {marketNews && (
              <ul>
                {marketNews.map((topNews) => (
                  <div key={topNews.id}>
                    <p>{topNews.headline}</p>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default News;
