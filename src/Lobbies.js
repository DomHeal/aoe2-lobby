import React, {useEffect, useState} from "react";
import {Button, Table} from 'reactstrap';
import './App.css';
import GameType from "./components/GameType";
import MapSize from "./components/MapSize";
import Loading from "./components/Loading";
import {joinLobby} from "./util";

export default function Friends() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData()
        const interval = setInterval(() => {
            fetchData()
        }, 5000);
        return () => clearInterval(interval);

    }, []);

    const fetchData = () => {
        console.log('searching for lobbies')
        fetch("https://cors-anywhere.herokuapp.com/https://aoe2.net/api/lobbies?game=aoe2de")
            .then(res => res.json())
            .then(
                (result) => {
                    setResults(result)
                    setIsLoading(false)
                },
                (error) => {
                    console.error(error)
                }
            )
    }


    if (isLoading) {
        return <Loading text={'Loading lobbies...'}/>
    }

    return <>
        <Table dark size={'sm'}>
            <thead>
            <tr>
                <th>#</th>
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
                if (result.num_players === result.num_slots) {
                    return null
                }
                if (result.server !== 'westeurope' && result.server !== 'ukwest') {
                    return null
                }
                if (result.has_password) {
                    return null
                }
                return <tr key={result.match_uuid}>
                    <th scope="row"><Button onClick={() => joinLobby(result.lobby_id)}>Join</Button></th>
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
