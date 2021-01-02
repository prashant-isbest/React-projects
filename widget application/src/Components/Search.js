import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Search = () => {
  const [term, setTerm] = useState('game');
  const [results, setResults] = useState([]);

  //we are only allowed to return a function from useEfect
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      // console.log(data.query.search);
      setResults(data.query.search);
      // console.log(results);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label htmlFor="">Enter search tem</label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
              console.log(e.target.value);
            }}
            type="text"
            name=""
            id=""
          />
        </div>
      </form>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
