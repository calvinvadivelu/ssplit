/*  SUBSCRIPTION: {
        name: String,
        description: String,
        picture: url,
        pricePerMonth: Number
    }   
*/

const SUBSCRIPTION_DATA = [
    { id: 1, name: 'Netflix', description: 'Movie Streaming Subscription', picture: 'https://cdn.vox-cdn.com/thumbor/lfpXTYMyJpDlMevYNh0PfJu3M6Q=/39x0:3111x2048/920x613/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png', plans: [
        {planName: 'Basic', pricePerMonth: 8},
        {planName: 'Standard', pricePerMonth: 12},
        {planName: 'Premium', pricePerMonth: 16}
    ]},
    { id: 2, name: 'Spotify', description: 'Music Streaming Subscription', picture: '', plans: [
        {planName: 'Individual', pricePerMonth: 8},
        {planName: 'Family', pricePerMonth: 12},
        // {planName: 'Student', pricePerMonth: 16}
    ]},
    { id: 3, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 4, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 5, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 5, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 6, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 7, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 8, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 9, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
]
export default SUBSCRIPTION_DATA