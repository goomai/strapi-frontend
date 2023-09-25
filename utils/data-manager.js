import axios from "axios";

export const getData=async( url)=> {
    const response = await axios({
        method: "GET",
        url:  url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "bearer 0b5410f80b9fff07383d6f83e5fe43f4b4d502afe45982efc62749c154297165b03bf8b0a87a2a28c8b4e8f360ac843921446d6b8e6c4cfb4382a117b9d82763363e73e01c0fc19d597ebf5e1fde57b760ec1dec4c3aedfa66167e7a86405231e764b8232a7913043eb1673753e697c1a920dde51e7831ce75c4f4ece3d03fb6"
        },
    })
    .catch(e => {return e.response});
    return response
}