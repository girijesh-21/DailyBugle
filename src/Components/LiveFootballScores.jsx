import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Components/LiveFootballScores.css'; // Import the CSS file

const LiveFootballScores = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const response = await axios.get('https://v3.football.api-sports.io/fixtures', {
          headers: {
            'x-apisports-key': '2b226dd5229d1698312a043529cc2d69',
          },
          params: {
            live: 'all', // Fetching all live matches
          },
        });

        setMatches(response.data.response);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLiveScores();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h2>Live Football Scores</h2>
      <ul className="match-list">
        {matches.map((match) => (
          <li key={match.fixture.id} className="match-item">
            <img src={match.teams.home.logo} alt={match.teams.home.name} className="team-logo" />
            <span className="team-name">{match.teams.home.name}</span>
            <span className="score">{match.goals.home} : {match.goals.away}</span>
            <span className="team-name">{match.teams.away.name}</span>
            <img src={match.teams.away.logo} alt={match.teams.away.name} className="team-logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveFootballScores;
