
export const joinLobby = (lobby_id) => {
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

export const mapSize = (size) =>{
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
}

export const gameType = (type) =>{
    switch (type) {
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
            return type
    }
}
