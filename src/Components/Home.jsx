// import React, { useEffect, useState } from 'react';
// import '../Components/International.css'; 
// import axios from 'axios';
// import Header from './Header.jsx';
// import defaultImage from 'C:\\Users\\91824\\my-app\\src\\Assets\\db2.png'; // Import your default image

// const Home = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('https://newsapi.org/v2/top-headlines', {
//           params: { 
//             apiKey: '715cc033abd24903a6697b249fd2c00e', 
//             category: 'general', 
//             language: 'en', 
//             pageSize: 100, 
//           },
//         });
//         console.log(response.data.articles); // Log the articles to check their structure
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
//               <div className="news-image-container">
//                 <img
//                   src={article.urlToImage || defaultImage} // Use the article image or the default image
//                   alt={article.title}
//                   className="news-image"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = defaultImage; // Fallback to default image if the image fails to load
//                   }}
//                 />
//               </div>
//               <div className="news-content">
//                 <h2 className="news-title">{article.title}</h2>
//                 <p className="news-description">{article.description}</p>
//                 <div className="news-footer">
//                   <span className="news-source">
//                     {article.source && article.source.name ? article.source.name : 'Unknown Source'}
//                   </span>
//                   <span className="news-date">
//                     {new Date(article.publishedAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//             </section>
//           </a>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default Home;







import React, { useEffect, useState } from 'react';
import '../Components/International.css'; 
import axios from 'axios';
import Header from './Header.jsx';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: { 
            apiKey: '715cc033abd24903a6697b249fd2c00e', 
            category: 'general', 
            language: 'en', 
            pageSize: 100, 
          },
        });
        console.log(response.data.articles); 
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
  
    fetchNews();
  }, []);
  

  return (
    <div className="container">
      <Header />
      <main className="articles-container">
        {articles.map((article, index) => (
          <a href={article.url} key={index} className="article-link" target="_blank" rel="noopener noreferrer">
            <section className="news-card">
              {article.urlToImage && (
                <div className="news-image-container">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="news-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="news-content">
                <h2 className="news-title">{article.title}</h2>
                <p className="news-description">{article.description}</p>
                <div className="news-footer">
  <span className="news-source">
    {article.source && article.source.name ? article.source.name : 'Unknown Source'}
  </span>
  <span className="news-date">
    {new Date(article.publishedAt).toLocaleDateString()}
  </span>
</div>

              </div>
            </section>
          </a>
        ))}
      </main>
    </div>
  );
};

export default Home;
