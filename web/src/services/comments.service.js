const apiUrl = "http://localhost:8080";

export function getComments() {
    return fetch(apiUrl).then(data => data.json());
}