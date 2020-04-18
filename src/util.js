
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
