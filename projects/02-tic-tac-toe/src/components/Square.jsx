import PropTypes from 'prop-types'

export const Square = ({ children, isSelected, updateBoard, index }) => {

	Square.propTypes = {
		children: PropTypes.string,
		isSelected: PropTypes.bool,
		updateBoard: PropTypes.func,
		index: PropTypes.number
	}
	
	const className = `square ${isSelected ? 'is-selected' : ''}`
	
	const handleClick = () => {
		updateBoard(index)
	}

	return (
		
		<div onClick={handleClick} className={className}>
			{children}
		</div>
	)
}