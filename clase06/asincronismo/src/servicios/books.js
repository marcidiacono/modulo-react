const books = {
    "La Ilíada": {
        title: "La Ilíada",
        genre: "Poesía Épica",
        author: "Homero",
    },
    "La República": {
        title: "La República",
        genre: "Diálogo",
        author: "Platón",
    },
    "La Divina Comedia": {
        title: "La Divina Comedia",
        genre: "Epopeya",
        author: "Dante Alighieri",
    },
    "Metamorfosis": {
        title: "Metamorfosis",
        genre: "Poesía",
        author: "Ovidio",
    },
}

export function getBookInformation(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                books[name]
            )
        }, 1500);
    });
}