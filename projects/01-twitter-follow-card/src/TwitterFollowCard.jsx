import { useState } from "react"

export function TwitterFollowCard ({userName, children, initIsFollowing}) {
    const [isFollowingState, setIsFollowingState] = useState(initIsFollowing);

    const text = isFollowingState ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowingState ? 'tw-follow-card-btn is-following' : 'tw-follow-card-btn'

    const handleClick = () => {
        setIsFollowingState(!isFollowingState);
    }

    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                    className='tw-follow-card-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt={`El avatar de ${userName} `}
                />
                <div className='tw-follow-card-info'>
                    <strong>{children}</strong>
                    <span className='tw-follow-card-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className='tw-follow-card-text'>{text}</span>
                    <span className='tw-follow-card-stop-follow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
    
}