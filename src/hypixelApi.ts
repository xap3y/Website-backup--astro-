let apikey = process.env.apikey

const url: String = "https://api.hypixel.net"


export async function getAH(page: Number) {
    return await fetch(`${url}/skyblock/auctions?page=${page}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "API-Key": `${apikey}`,
        },
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
}


