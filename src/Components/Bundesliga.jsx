// import React, { useEffect, useState } from 'react';
// import '../Components/Bundesliga.css';
// import axios from 'axios';
// import Header from './Header';

// const Bundesliga = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('https://newsapi.org/v2/top-headlines', {
//           params: {
//             apiKey: '7cc57d679b9e44ec8e75ff3c6c65af2b', // Replace with your NewsAPI key
//             country: 'in', 
//             language: 'en',
//             category: 'entertainment',
//             pagesize: 100
//           },
//         });
//         setArticles(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, []);

//   const filterValidArticles = articles.filter(article => article.urlToImage);

//   return (
//     <div className="container">
//       <Header />
//       <main className="articles-container">
//         {filterValidArticles.map((article, index) => (
//           <a href={article.url} key={index} className="article-link" target="_blank" rel="noopener noreferrer">
//             <section className="news-card">
//               <div className="news-image-container">
//                 <img
//                   src={article.urlToImage}
//                   alt={article.title}
//                   className="news-image"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.parentNode.parentNode.style.display = 'none'; // Hide the entire article on error
//                   }}
//                 />
//               </div>
//               <div className="news-content">
//                 <h2 className="news-title">{article.title}</h2>
//                 <p className="news-description">{article.description}</p>
//                 <div className="news-footer">
//                   <span className="news-source">{article.source.name}</span>
//                   <span className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</span>
//                 </div>
//               </div>
//             </section>
//           </a>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default Bundesliga;





import React, { useEffect, useState } from 'react';
import '../Components/Bundesliga.css';
import axios from 'axios';
import Header from './Header';

const Bundesliga = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news', {
          params: {
            apikey: 'pub_506493798d7a4749ec75cd09cd41d5848e686', // Replace with your NewsData API key
            category: 'entertainment',
            language: 'en',
            country: 'in', 
          },
        });
        setArticles(response.data.results); // Assuming 'results' is the correct key in the response
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  // Filter articles that have a valid image URL
  const filterValidArticles = articles.filter(article => article.image_url);

  return (
    <div className="container">
      <Header />
      <main className="articles-container">
        {filterValidArticles.map((article, index) => (
          <a href={article.link} key={index} className="article-link" target="_blank" rel="noopener noreferrer">
            <section className="news-card">
              <div className="news-image-container">
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="news-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentNode.parentNode.style.display = 'none'; // Hide the entire article on error
                  }}
                />
              </div>
              <div className="news-content">
                <h2 className="news-title">{article.title}</h2>
                <p className="news-description">{article.description}</p>
                <div className="news-footer">
                  <span className="news-source">{article.source_id}</span>
                  <span className="news-date">{new Date(article.pubDate).toLocaleDateString()}</span>
                </div>
              </div>
            </section>
          </a>
        ))}
      </main>
    </div>
  );
};

export default Bundesliga;
