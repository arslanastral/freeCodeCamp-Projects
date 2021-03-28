import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import ControlPanel from "./ControlPanel";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  const handleRefreshClick = () => {
    getQuotes();
  };

  const getQuotes = () => {
    fetch(
      "https://gist.githubusercontent.com/arslanastral/76e5e4154ae134a0111fed74c2a5cf23/raw/7afd9ef790171c73d08a87392600c76d85355abe/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let quotes = data;
        let randomNumber = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomNumber];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const fadingQuoteTextPropsTransition = useTransition(quote, null, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div>
      {fadingQuoteTextPropsTransition.map(({ item, props, key }) => (
        <animated.div key={key} style={{ ...props, position: "absolute" }}>
          <p className="quote-text">{item}</p>
          <mark className="author">{author}</mark>
        </animated.div>
      ))}

      <ControlPanel
        refreshClick={handleRefreshClick}
        tweetText={`❝${quote}❞ -${author}`}
      />
    </div>
  );
};

export default Quote;
