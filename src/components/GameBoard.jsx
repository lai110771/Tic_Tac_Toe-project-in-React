



export default function GameBoard({ onSelectSquare, board }) {
    // const [gameBoard, setGameBoard] = useState(initialGameBorad);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const newGameBorad = [...prevGameBoard.map(innerArray => [...innerArray])];//deep copy a borad, otherwise mutate on the reference
    //         newGameBorad[rowIndex][colIndex] = activePlayerSymbol;
    //         return newGameBorad;
    //     });
    //     onSelectSquare();
    // }





    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol != null}>
                                    {playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>))}
        </ol>
    )
}