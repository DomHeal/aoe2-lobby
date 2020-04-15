import React, {useEffect, useState} from "react";
import {Button, Spinner, Table} from 'reactstrap';
import './App.css';

const friendsList = [
    "Xeon",
    "methaddict",
    "Welshwonder"
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
    const joinLobby = (lobby_id) => {
        let url = "steam://joinlobby/813780/" + lobby_id;
        console.log('Attempting to join lobby - ' + url)
        let i = document.createElement('iframe');
        i.style.display = 'none';
        i.src = url;
        i.onload = function () {
            i.parentNode.removeChild(i);
        };
        document.body.appendChild(i)
    };

    const mapGameTypeComponent = (game_type) => {

        switch (game_type) {
            case 0:
                return "Random Map";
            case 1:
                return "Regicide";
            case 2:
                return "Deathmatch";
            case 3:
                return "Scenario";
            case 13:
                return "Empire Wars";
            default:
                return game_type
        }
    };

    const mapSizeComponent = (size) => {

        switch (size) {
            case 0:
                return "Tiny";
            case 1:
                return "Small";
            case 2:
                return "Medium";
            case 3:
                return "Normal";
            case 4:
                return "Large";
            case 5:
                return "Giant";
            case 6:
                return "Luda";
            default:
                return size
        }
    };

    if (isLoading) {
        return <>
            <Spinner type="grow" color="light"/>
            <p className="text-white">Finding friends...</p>
        </>
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
                    <td>{mapGameTypeComponent(result.game_type)}</td>
                    <td>{result.name}</td>
                    <td>{result.num_players + '/' + result.num_slots}</td>
                    <td>{result.map_type} - ({mapSizeComponent(result.map_size)})</td>
                    <td>{result.server}</td>
                    <td>{result.average_rating}</td>
                </tr>
            })}

            </tbody>
        </Table>
    </>

}
