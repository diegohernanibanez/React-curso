import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                name="Migue Angel" 
                userName="midudev"
            />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing={false} 
                name="Diego Ibañez" 
                userName="diegoibannez"
            />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                name="Tomas Scopa" 
                userName="tomasscopa"
            />
        </section>
    )
}