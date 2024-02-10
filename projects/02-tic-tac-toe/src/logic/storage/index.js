export const saveGameToStorage = ({ board, turn }) => {
    window.localStorage.setItem('turn', turn)
    window.localStorage.setItem('board', JSON.stringify(board))
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}