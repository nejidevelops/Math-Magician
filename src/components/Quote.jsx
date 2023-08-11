import { useState, useEffect } from 'react';
import axios from 'axios';
import './Quote.css';

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = 'success';
  const apiKey = 'PR9OrpSi7kbt4/xm76yLrQ==GDPbm1EnnixMX3cm';

  useEffect(() => {
    axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': apiKey },
    })
      .then((response) => {
        setQuotes(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div className="quote-display">
      <h2>
        Quotes about
        {' '}
        {category}
      </h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            <p>
              {quote.quote}
            </p>
            <p>
              {quote.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quote;
