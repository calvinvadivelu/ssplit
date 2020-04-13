const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

//GETS
export const getPlanDetails = async (plan_id) => {
    const response = await fetch(`/paypal/plandetails?plan_id=${plan_id}`, {
        method: 'GET',
        headers: headers,
    });
    const body = await response.json();
    console.log('body of get plan details :', body);
    if (response.status !== 200) throw Error(body.message);
    
    return body;
}

export const getPlanList = async (plan_id) => {
    const response = await fetch(`/paypal/listplans`, {
        method: 'GET',
        headers: headers,
    });
    const body = await response.json();
    console.log('body of product create :', body);
    if (response.status !== 200) throw Error(body.message);
    
    return body;
}

//POSTS
export const createSubscription = async (name, description, ownerInfo, type, category, totalPrice, pricePerPerson, sharers) => {
    const response = await fetch(`/paypal/createSubscription`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            name,
            description,
            ownerInfo,
            type,
            category,
            totalPrice,
            pricePerPerson,
            sharers,
        })
    });
    const body = await response.json();
    console.log('body of subscription create :', body);
    if (response.status !== 200) throw Error(body.message);
    
    return body;
}

//DEPRECATED
export const createProduct = async (name, description) => {
    const response = await fetch(`/paypal/createproduct`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            name,
            description
        })
    });
    const body = await response.json();
    console.log('body of product create :', body);
    if (response.status !== 200) throw Error(body.message);
    
    return body;
}

//DEPRECATED
export const createPlan = async (prodID) => {
    const response = await fetch(`/paypal/createplan`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            product_id: prodID,
        })
    });
    const body = await response.json();
    console.log('body of plan create :', body);
    if (response.status !== 200) throw Error(body.message);
    
    return body;
}


