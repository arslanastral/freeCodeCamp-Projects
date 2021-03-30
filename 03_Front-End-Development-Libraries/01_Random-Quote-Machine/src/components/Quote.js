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
      "https://gist.githubusercontent.com/arslanastral/c00e147ebbb2e22fddc228437bb45ff7/raw/f0c7272e09a58fe17b3d8957f5e13fb029d9185a/quotes.json"
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
