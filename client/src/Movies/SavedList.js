import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to="/" style={{ textDecoration: 'none' }}><div className="home-button">Home</div></Link>
      
    </div>
  );
}
