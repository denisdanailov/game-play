import { getById } from "../api/data.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
    const [game, setGame] = useState({});

    const { gameId } = useParams();

    useEffect(async () => {
        let result = await getById(gameId);
        setGame(result);
    }, []);

  
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>Bright</h1>
                    <span className="levels">{game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>
        </section >
    );
}

export default Details;