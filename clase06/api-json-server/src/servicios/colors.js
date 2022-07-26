export function getColors() {
    return fetch("http://localhost:3333/colors")
        .then(data => data.json());
}

export function setColor(color) {
    return fetch("http://localhost:3333/colors", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({color})
    })
        .then(data => data.json());
}