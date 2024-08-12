// import React, { useEffect, useState } from 'react';
// import Header from './Header';
// import '../Components/PremierLeague.css'; // Ensure this file exists for styling
// import axios from 'axios';

// const PremierLeague = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('https://newsapi.org/v2/top-headlines', {
//           params: {
//             apiKey: '7cc57d679b9e44ec8e75ff3c6c65af2b', // Replace with your NewsAPI key
//             category: 'technology', // Adjust based on category needed
//             country: 'in', // Country code for the UK
//             language: 'en',
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

// export default PremierLeague;




// import React, { useEffect, useState } from 'react';
// import '../Components/International.css'; 
// import axios from 'axios';
// import Header from './Header.jsx';

// const PremierLeague = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('https://newsapi.org/v2/top-headlines', {
//           params: { 
//             apiKey: '715cc033abd24903a6697b249fd2c00e', 
//             category: 'technology', 
//             language: 'en', 
//             pageSize: 100, 
//           },
//         });
//         console.log(response.data.articles); 
//         setArticles(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };
  
//     fetchNews();
//   }, []);
  

//   return (
//     <div className="container">
//       <Header />
//       <main className="articles-container">
//         {articles.map((article, index) => (
//           <a href={article.url} key={index} className="article-link" target="_blank" rel="noopener noreferrer">
//             <section className="news-card">
//               {article.urlToImage && (
//                 <div className="news-image-container">
//                   <img
//                     src={article.urlToImage}
//                     alt={article.title}
//                     className="news-image"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.style.display = 'none';
//                     }}
//                   />
//                 </div>
//               )}
//               <div className="news-content">
//                 <h2 className="news-title">{article.title}</h2>
//                 <p className="news-description">{article.description}</p>
//                 <div className="news-footer">
//   <span className="news-source">
//     {article.source && article.source.name ? article.source.name : 'Unknown Source'}
//   </span>
//   <span className="news-date">
//     {new Date(article.publishedAt).toLocaleDateString()}
//   </span>
// </div>

//               </div>
//             </section>
//           </a>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default PremierLeague;



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

const PremierL = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news', {
          params: {
            apikey: 'pub_506493798d7a4749ec75cd09cd41d5848e686', // Replace with your NewsData API key
            category: 'technology',
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

export default PremierL;
