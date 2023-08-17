import { useState, useEffect } from 'react';
import styled from 'styled-components';

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = 'success';
  const apiKey = 'PR9OrpSi7kbt4/xm76yLrQ==GDPbm1EnnixMX3cm';

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': apiKey },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
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
    <CenteredContainer>
      <QuoteDisplay>
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
      </QuoteDisplay>
    </CenteredContainer>
  );
}

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 92vh;
  margin-top: 1rem;
  background-color: #f5f5f5;
`;

const QuoteDisplay = styled.div`
  width: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  display: grid;
  gap: 1.5rem;

  h2 {
    text-align: center;
  }

  li {
    text-align: right;
    display: grid;
    gap: 0.5rem;

    p:last-child {
      font-weight: bold;
    }
  }
`;

export default Quote;
