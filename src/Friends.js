import React, {useEffect, useState} from "react";
import {Button, Input, Table, Row, Col, InputGroup, InputGroupAddon} from 'reactstrap';
import {Spinner} from 'reactstrap';
import './App.css';

export default function Friends() {
    const [results, setResults] = useState([]);
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [autoJoin, setAutoJoin] = useState(false)

    useEffect(() => {

        const interval = setInterval(() => {
            console.log('searching for lobbies')
            fetch("/api/lobbies?game=aoe2de", {
                credentials: "include",
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        setResults(result)
                        setIsLoading(false)
                        if (autoJoin){
                            joinUser()
                        }
                    },
                    (error) => {
                        console.error(error)
                    }
                )
        }, 5000);
        return () => clearInterval(interval);

    }, []);

    const joinUser = () => {
        results.forEach(res => {
            // console.log(res)
            const found = res.players.filter(playe => playe.name === friends);
            if (found.length > 0) {
                console.log('Attempting to join - ' + friends);
                const {lobby_id} = res;
                joinLobby(lobby_id);
            }
        });
    };


    useEffect(() => {
        console.log('Starting auto join')
        while (autoJoin) {
            console.log('Searching....')
            for (const res of results) {
                const found = res.players.filter(playe => playe.name === friends);
                if (found.length > 0) {
                    console.log('Attempting to join - ' + friends);
                    const {lobby_id} = res;
                    joinLobby(lobby_id);
                    break;
                }
            }
        }
    }, [autoJoin]);

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
            case 4:
                return "Giant";
            case 5:
                return "Luda";
            default:
                return size
        }
    };

    if (isLoading) {
        return <>
            <Spinner type="grow" color="light"/>
            <a>Loading lobbies...</a>
        </>
    }
    return <>
        <Row className={'sticky'}>
            <InputGroup>
                <Input value={friends} placeholder="Enter Steam Name" onChange={(e) => setFriends(e.target.value)}/>
                <InputGroupAddon addonType="append">
                    {autoJoin ? <Button onClick={() => setAutoJoin(false)} color="info">Auto-Join Enabled</Button> :
                        <Button onClick={() => setAutoJoin(true)} color="danger">Auto-Join Disabled</Button>}
                    <Button onClick={joinUser} color="success">Join</Button>
                </InputGroupAddon>
            </InputGroup>
        </Row>
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
