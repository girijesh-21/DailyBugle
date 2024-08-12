import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Ligue1.css'; // Ensure this file exists for styling
import axios from 'axios';

const Ligue1 = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            apiKey: '7cc57d679b9e44ec8e75ff3c6c65af2b', // Replace with your NewsAPI key
            category: 'politics', // Adjust based on category needed
            country : 'in' ,
            language: 'en', // Language
             // Query parameter to filter news related to Ligue 1
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const menuItems = [
    { name: 'Home', path: '/Home' },
    { name: 'Science', path: '/ClubFootball' },
    { name: 'Health', path: '/International' },
    { name: 'India', path: '/Laliga' },
    { name: 'Politics', path: '/Ligue1' },
    { name: 'Technology', path: '/PremierLeague' },
    { name: 'Sports', path: '/Serie-A' },
    { name: 'LifeStyle', path: '/Bundesliga' },
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="top-bar">
          <span>{new Date().toDateString()}</span>
          <span>Today's News</span>
        </div>
        <div className="title">
          <h1>News F.C</h1>
        </div>
        <nav className="navbar">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                {/* <Link to={item.path}>{item.name}</Link> */}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        {articles.map((article, index) => (
          <a href={article.url} key={index} className="art1" target="_blank" rel="noopener noreferrer">
            <section className="news-section">
              <article>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p>Source: {article.source.name}</p>
                <p>Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
              </article>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="main-image" />
              )}
            </section>
          </a>
        ))}
      </main>
    </div>
  );
};

export default Ligue1;
