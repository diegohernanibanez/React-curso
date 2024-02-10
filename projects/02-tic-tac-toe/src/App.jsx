import { useState } from "react"
import { Square } from "./components/Square.jsx"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { resetGameStorage, saveGameToStorage } from "./logic/storage/index.js"
import { TURNS } from "./constants"
import confetti from "canvas-confetti"

function App() {
	const [board, setBoard] = useState(() => {
		const boardFromStorage = window.localStorage.getItem('board')
		return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)	
	})

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = window.localStorage.getItem('turn')
		return turnFromStorage ?? TURNS.X
	})

	const [winner, setWinner] = useState(null) //null = sin gandor y false = empate

	const updateBoard = (index) => {
		// no actualizamos esta posición si ya tiene algo
		if(board[index] || winner){
			return
		}
		
		// actualizar el tablero
		const newBoard = [... board]
		newBoard[index] = turn
		setBoard(newBoard)
			
		// cambiar de turno
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)
		
		// guardar aqui la partida
		saveGameToStorage({
			board: newBoard,
			turn: newTurn
		})
		
		const newWinner = checkWinnerFrom(newBoard)
		if(newWinner){
			confetti()
			setWinner(newWinner)
			// setWinner((prevWinner) => { // El prevWinner sirve para acceder al estado anterior
			// 	return newWinner
			// })
		}else if(checkEndGame(newBoard)){
			setWinner(false)
		}
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.X)
		setWinner(null)

		resetGameStorage()
	}

	return (
		<main className='board'>
			<h1>Tic tac toe</h1>
			<button onClick={resetGame}> Empezar de nuevo</button>
			<section className="game">
				{
					board.map((square, index) => {
						return (
							<Square
								key={index}
								index={index}
								updateBoard={updateBoard}
							>
								{square}
							</Square>
						)
					})
				}
			</section>
			<section className='turn'>
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>

			<WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
		</main>
	)
}

export default App
