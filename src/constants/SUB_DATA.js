/*  SUBSCRIPTION: {
        name: String,
        description: String,
        picture: url,
        pricePerMonth: Number
    }   
*/
import NetflixIcon from '../images/netflix.svg';
import SpotifyIcon from '../images/spotify.svg';
import OtherSubIcon from '../images/OtherSub.svg';

const SUBSCRIPTION_DATA = [
    { id: 0, name: 'Netflix', description: 'Movie Streaming Subscription', picture: NetflixIcon, colourCode: '#E50914', plans: [
        {planName: 'Basic', pricePerMonth: 8},
        {planName: 'Standard', pricePerMonth: 12},
        {planName: 'Premium', pricePerMonth: 16}
    ]},
    { id: 1, name: 'Spotify', description: 'Music Streaming Subscription', picture: SpotifyIcon, colourCode: '#1ED760', plans: [
        {planName: 'Individual', pricePerMonth: 8},
        {planName: 'Family', pricePerMonth: 12},
        // {planName: 'Student', pricePerMonth: 16}
    ]},
    { id: 2, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: OtherSubIcon},
    { id: 3, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 4, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 5, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 6, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 7, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 8, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
    { id: 9, name: 'Temp Subscription', description: 'Subscription For Something', pricePerMonth: 15, picture: ''},
]
export default SUBSCRIPTION_DATA