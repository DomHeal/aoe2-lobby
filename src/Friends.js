import React, {useEffect, useState} from "react";
import {Alert, Button} from 'reactstrap';
import './App.css';
import Loading from "./components/Loading";
import {gameType, joinLobby, mapSize} from "./util";
import DataTable from "react-data-table-component";

const friendsList = [
    "xeon",
    "methaddict",
    "welshwonder",
    "fatkidslag_irl"
];

const columns = [
    {
        name: 'Join',
        selector: 'join',
        button: true,
        cell: row => <Button onClick={() => joinLobby(row.join)}>Join</Button>
    },
    {
        name: 'Type',
        selector: 'type',
        sortable: true
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Players',
        selector: 'players',
        sortable: true
    },
    {
        name: 'Map',
        selector: 'map',
        sortable: true,
    },
    {
        name: 'Server',
        selector: 'server',
        sortable: true,
    },
    {
        name: 'Average Rating',
        selector: 'rating',
        sortable: true,
    },

];

export default function Friends() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        fetchData()
        const interval = setInterval(() => {
            fetchData()
        }, 3000);
        return () => clearInterval(interval);
    });

    const fetchData = () => {
        console.log('searching for lobbies')
        fetch("https://aoe2.net/api/lobbies?game=aoe2de")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    const friendsFoundList = [];
                    for (const res of result) {
                        const found = res.players.filter(playe => {
                            if (playe.name == null) return false
                            return friendsList.includes(playe.name.toLowerCase())
                        });
                        if (found.length > 0){
                            console.log("friend found");
                            friendsFoundList.push(res)
                        }
                    }
                    const tableData = friendsFoundList.map(item => { return {
                        join: item.lobby_id,
                        id: item.match_uuid,
                        name: item.name,
                        server: item.server,
                        players: item.num_players + '/' + item.num_slots,
                        rating: item.average_rating,
                        map: gameType(item.game_type),
                        type: mapSize(item.map_type)
                    }})
                    setResults(tableData);
                    setIsLoading(false)
                    setError("")
                },
                (error) => {
                    setError(error)
                }
            )
    }

    if (isLoading) {
        return <Loading text={'Finding friends...'}/>
    }
    return <>
        {error !== "" && <Alert color="danger">
            Failed to get aoe2.net data - {error}
        </Alert>}
        <DataTable
            columns={columns}
            data={results}
            theme={'dark'}
            pointerOnHover
            // highlightOnHover
            defaultSortField="name"
            selectableRowsComponentProps={{ inkDisabled: true }}
            expandableRows
            expandOnRowClicked
            // expandableRowsComponent={SubTable(data)}
        />
    </>

}
