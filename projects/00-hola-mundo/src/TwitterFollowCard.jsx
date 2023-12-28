export function TwitterFollowCard ({formatUserName, userName, name, isFollowing}) {
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                    className='tw-follow-card-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="El avatar de midudev" 
                />
                <div className='tw-follow-card-info'>
                    <strong>{name}</strong>
                    <span className='tw-follow-card-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className='tw-follow-card-btn'>Seguir</button>
            </aside>
        </article>
    ) 
    
}