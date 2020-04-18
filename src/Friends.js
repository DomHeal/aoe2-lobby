import React, {useEffect, useState} from "react";
import {Button, Table} from 'reactstrap';
import './App.css';
import GameType from "./components/GameType";
import MapSize from "./components/MapSize";
import Loading from "./components/Loading";
import {joinLobby} from "./util";

const friendsList = [
    "Xeon",
    "methaddict",
    "WELSHWONDER",
    "FatKidsLag_IRL"
];
export default function Friends() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData()
        const interval = setInterval(() => {
            fetchData()
        }, 5000);
        return () => clearInterval(interval);
    });

    const fetchData = () => {
        console.log('searching for lobbies')
        fetch("https://aoe2.net/api/lobbies?game=aoe2de")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    const x = [];
                    for (const res of result) {
                        // console.log(res)
                        const found = res.players.filter(playe => friendsList.includes(playe.name));
                        // console.log(found)
                        if (found.length > 0){
                            console.log("friend found");
                            x.push(res)
                        }
                    }

                    setResults(x);
                    setIsLoading(false)
                },
                (error) => {
                    console.error(error)
                }
            )
    }

    if (isLoading) {
        return <Loading text={'Finding friends...'}/>
    }
    return <>
        <Table dark size={'sm'}>
            <thead>
            <tr>
                <th>#</th>
                <th>Friend</th>
                <th>Type</th>
                <th>Name</th>
                <th>Players</th>
                <th>Map</th>
                <th>Server</th>
                <th>Average Rating</th>
            </tr>
            </thead>
            <tbody>
            {results.map(result => {
                console.log(result)
                return <tr key={result.match_uuid}>
                    <th scope="row"><Button onClick={() => joinLobby(result.lobby_id)}>Join</Button></th>
                    <td>{result.players.map(player => <p>{player.name}</p>)}</td>
                    <td><GameType type={result.game_type}/></td>
                    <td>{result.name}</td>
                    <td>{result.num_players + '/' + result.num_slots}</td>
                    <td>{result.map_type} - (<MapSize size={result.map_size}/>)</td>
                    <td>{result.server}</td>
                    <td>{result.average_rating}</td>
                </tr>
            })}
            </tbody>
        </Table>
    </>

}
