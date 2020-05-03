import React, {useEffect, useMemo, useState} from "react";
import {Button} from 'reactstrap';
import './App.css';
import Loading from "./components/Loading";
import {gameType, joinLobby, mapSize} from "./util";
import DataTable from "react-data-table-component";
import styled from 'styled-components';

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

    useEffect(() => {
        fetchData()
        const interval = setInterval(() => {
            fetchData()
        }, 5000);
        return () => clearInterval(interval);

    }, []);

    const fetchData = () => {
        console.log('searching for lobbies')
        fetch("https://aoe2.net/api/lobbies?game=aoe2de")
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

    const data = results.reduce((list, item) => {
        if (item.num_players === item.num_slots) {
            return list
        }
        if (item.server !== 'westeurope' && item.server !== 'ukwest') {
            return list
        }
        if (item.has_password) {
            return list
        }
        list.push({
            join: item.lobby_id,
            id: item.match_uuid,
            name: item.name,
            server: item.server,
            players: item.num_players + '/' + item.num_slots,
            rating: item.average_rating,
            map: gameType(item.game_type),
            type: mapSize(item.map_type)
        })
        return list
    },[]);

    const SubTable = ( data ) => <DataTable/>;

    return <>
        <DataTable
            columns={columns}
            data={data}
            theme={'dark'}
            pointerOnHover
            // highlightOnHover
            defaultSortField="name"
            selectableRowsComponentProps={{ inkDisabled: true }}
            expandableRows
            expandOnRowClicked
            expandableRowsComponent={SubTable(data)}
        />
    </>

}
