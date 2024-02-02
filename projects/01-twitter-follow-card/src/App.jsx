import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        id: '1',
        userName: 'midudev',
        name: 'Migue Angel',
        initIsFollowing: true
    },
    {
        id: '2',
        userName: 'diegoibannez',
        name: 'Diego Ibañez',
        initIsFollowing: false
    },
    {
        id: '3',
        userName: 'PacoHdezs',
        name: 'Paco Hdezs',
        initIsFollowing: true
    },
    {
        id: '4',
        userName: 'TMChein',
        name: 'Tomas Chein',
        initIsFollowing: false
    },
]

export function App () {

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { id, userName, name, initIsFollowing } = user
                    return (
                        <TwitterFollowCard 
                        key={id}
                        userName={userName} 
                        initIsFollowing={initIsFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}