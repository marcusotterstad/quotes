import React, { useState, useEffect} from 'react';
import './Quote.css';


export default function Quote(props) {
    const [isEdit, setIsEdit] = useState(false);
    const [quoteInput, setQuoteInput] = useState("");
    const [authorInput, setAuthorInput] = useState("");

    const deleteSelf = async () => {
        const url = `quotes/${props.id}`;
        const result = await fetch(url, {method: "DELETE"});
    }

    const handleEdit = async () => {
        const url = `/quotes/${props.id}?quote=${quoteInput}&author=${authorInput}`;
        const result = await fetch(url, {method: "PUT"});
        setIsEdit(false);
    }

    return (
        <div className="card">
            <div className="card-header">
                Quote #{props.id}
                <button type="button" onClick={deleteSelf} className="btn btn-close btn-danger" aria-label="Delete">Delete</button>
                <button type="button" onClick= {() => {(isEdit) ? (setIsEdit(false)) : (setIsEdit(true))} } className="btn btn-close btn-warning" aria-label="Delete">{(isEdit) ? ("Go Back") : ("Edit")}</button>

            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                {(isEdit) ? (<label htmlFor="quote">Quote:<input type="text" name="quote" onChange={({target}) => {setQuoteInput(target.value)}} /></label>) : (<p>{props.quote}</p>)}
                <footer className="blockquote-footer">
                    {(isEdit) ? (<input type="text" name="author" onChange={({target}) => {setAuthorInput(target.value)}}/>) : (props.author)}
                    {(isEdit) ? (<input type="submit" onClick={handleEdit} />) : (null)}
                </footer>
                </blockquote>
            </div>
        </div>
    )
}
