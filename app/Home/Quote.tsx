import React, { useState } from 'react'; // import the Quote type

export interface Quote {
    id: number;
    text: string;
    source: string;
  }

interface QuoteComponentProps {
  quotes: Quote[];
}

const QuoteComponent: React.FC<QuoteComponentProps> = ({ quotes }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

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

  return (
    <div className="quote-container">
      <div className="quote-navigation">
        <button onClick={prevQuote}>←</button>
        <button onClick={nextQuote}>→</button>
      </div>
      <div className="quote-content">
        <p className="quoted-from">Quoted from</p>
        <p className="quote">{quotes[currentQuoteIndex].text}</p>
        <p className="quote-source">{quotes[currentQuoteIndex].source}</p>
      </div>
    </div>
  );
};

export default QuoteComponent;
