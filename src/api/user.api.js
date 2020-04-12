const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const createUser = async (fullName, email) => {
    const response = await fetch('/user/createUser', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            fullName,
            email,
            subscriptions: []
        })
    })
    const body = await response.json();
    console.log('body of create user :', body);
    if (response.status !== 200) throw Error(body.message);
    
    return body;
}

export const getUser = async (email) => {
    const response = await fetch(`/user/getUser?email=${email}`, {
        method: 'GET',
        headers: headers
    })
    console.log('response :', response);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;

}