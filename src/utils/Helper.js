export const get = (url, dispatch) =>
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        });

export const put = (url, data, dispatch) =>
    fetch(url, {
        method: 'put',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());