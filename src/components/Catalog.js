import GameView from "./GameView";
import { useState, useEffect } from "react";
import { latestGames } from '../api/data.js';


const Catalog = () => {
    const [games, setGames] = useState([]);

    useEffect(async () => {
        latestGames()
            .then(result => {
                setGames(result);
            })
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {
                games.length > 0
                    ? games.map(game =>
                        <GameView
                            key={game._id}
                            game={game}
                            title={game.title}
                            imageUrl={game.imageUrl} />)
                    : <p className="no articles">No games yet</p>
            }

        </section>

    );
}


export default Catalog;