const url = "https://api.hypixel.net"


async function getPlayer(uuid: String) {
    return fetch(`${url}/player?uuid=${uuid}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "API-Key": "",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
}


