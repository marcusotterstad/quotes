import './App.css';
import React, {useState} from 'react';
import QuoteList from './QuoteList/QuoteList';

export default function App() {

  const [quoteInput, setQuoteInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  const handleSubmit = async () => {

    const url = `/quotes?quote=${quoteInput}&author=${authorInput}`;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(url, requestOptions);

  }

  return (
    <div className="App">
      <h1>List of Quotes</h1><br />
      <div>
        <h3>Add a quote</h3>
        <form onSubmit={handleSubmit}>
          <label for="quote">Quote</label>
          <input type="text" name="quote" onChange={e => setQuoteInput(e.target.value)} /><br />
          <label for="author">Author</label>
          <input type="text" name="author" onChange={e => setAuthorInput(e.target.value)} /><br />
          <input type="submit" />
        </form>
      </div>
      <QuoteList />
    </div>
  )
}
