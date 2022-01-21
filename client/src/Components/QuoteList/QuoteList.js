import React, {useEffect, useState} from "react";
import './QuoteList.css';
import Quote from '../Quote/Quote';

export default function QuoteList() {

    const [quotes, setQuotes] = useState([]);
    

    useEffect(() => {
        fetch("/quotes")
        .then(response => response.json())
        .then(data => {setQuotes(data)})
    });
    
    const singleQuotes = quotes.map(singleQuote => <Quote key={singleQuote.id} id={singleQuote.id} quote={singleQuote.quote} author={singleQuote.author} />);
    
    return (
        <div className="quote-list">
            {(quotes === []) ? (<p>Loading...</p>) : (singleQuotes)}
        </div>
    )
}
