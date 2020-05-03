import React, {useEffect, useState} from "react";
import {Button, Col, Row} from 'reactstrap';
import './App.css';
import Loading from "./components/Loading";
import {gameType, joinLobby, mapSize} from "./util";
import DataTable from "react-data-table-component";

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
        selector: 'playersCount',
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
const subColumns = [
    // profile_id, steam_id, name, clan, country, slot, slot_type, rating, games, wins, streak, drops, color, team, civ
    {
        name: 'Name',
        selector: 'name',
    },
    {
        name: 'Games',
        selector: 'games',
    },
    {
        name: 'Wins',
        selector: 'wins',
    },
    {
        name: 'Streak',
        selector: 'streak',
    },
    {
        name: 'Drops',
        selector: 'drops',
    },
    {
        name: 'Rating',
        selector: 'rating',
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
            playersCount: item.num_players + '/' + item.num_slots,
            players: item.players,
            rating: item.average_rating,
            map: gameType(item.game_type),
            type: mapSize(item.map_type)
        })
        return list
    },[]);

    const SubTable = ({ data }) => <Row><Col sm="12" lg={{ size: 6, offset: 3 }}><DataTable
            columns={subColumns}
            data={data.players}
            highlightOnHover
            dense
            theme={'dark'}/>
    </Col>
    </Row>

    return <DataTable
            columns={columns}
            data={data}
            theme={'dark'}
            pointerOnHover
            // highlightOnHover
            defaultSortField="name"
            selectableRowsComponentProps={{ inkDisabled: true }}
            expandableRows
            expandOnRowClicked
            expandableRowsComponent={<SubTable/>}
            // fixedHeader
            noHeader
        />
}
