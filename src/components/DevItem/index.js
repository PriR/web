import React from 'react';

import './styles.css';

function DevItem({ dev }) {
    return (
        <>
            <li className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name}></img>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars0.githubusercontent.com/u/5262405?s=460&v=4" alt="Priscila Rodrigues "></img>
                <div className="user-info">
                  <strong>Priscila Rodrigues</strong>
                  <span>React Native, Node.js</span>
                </div>
              </header>
              <p>Priscila dev :D</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            </li>
            </>
    );
}


export default DevItem;