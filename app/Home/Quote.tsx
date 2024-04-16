import { getHomeQuoteData } from '@/sanity/sanity-utils';
import React, { useEffect, useState } from 'react'; // import the Quote type

export interface Quote {
    id: string;
    text: string;
    source: string;
  }

const QuoteComponent: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      getHomeQuoteData()
          .then((data) => {
              setQuotes(data);
              setLoading(false);
          })
          .catch((err) => {
              console.error('Failed to fetch quotes:', err);
              setError('Failed to load quotes.');
              setLoading(false);
          });
  }, []);

  const nextQuote = () => {
      setCurrentQuoteIndex((prevIndex) =>
          prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
  };

  const prevQuote = () => {
      setCurrentQuoteIndex((prevIndex) =>
          prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
      );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <div className="quote-container">
          <div className="quote-navigation">
              <button onClick={prevQuote}>←</button>
              <button onClick={nextQuote}>→</button>
          </div>
          <div className="quote-content">
              <p className="quote">{quotes[currentQuoteIndex]?.text}</p>
              <h2 className="quote-source">{quotes[currentQuoteIndex]?.source}</h2>
          </div>
      </div>
  );
};

export default QuoteComponent;
