const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const sendEmails = async (recipients, owner, subscription_name, link) => {
    const response = await fetch('/email/sendEmails', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            recipients,
            owner,
            subscription_name,
            link
        })
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    else console.log('email sent :)')
    
    return body;
}