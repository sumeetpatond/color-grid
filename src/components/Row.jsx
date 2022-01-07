import './Row.css'

function Row({rowid, handleClick, firstActive, secondActive}) {
    const isFirstRed = (firstActive.rowid === rowid && firstActive.boxid === 0) 
                            || (secondActive.rowid === rowid && secondActive.boxid === 0);
    const isSecondRed = (firstActive.rowid === rowid && firstActive.boxid === 1) 
                            || (secondActive.rowid === rowid && secondActive.boxid === 1);
    const isThirdRed = (firstActive.rowid === rowid && firstActive.boxid === 2) 
                            || (secondActive.rowid === rowid && secondActive.boxid === 2);
    const isFourthRed = (firstActive.rowid === rowid && firstActive.boxid === 3) 
                            || (secondActive.rowid === rowid && secondActive.boxid === 3);
    return (
        <div className="row">
            <div className={isFirstRed? 'box redbox': 'box'} onClick={()=>handleClick(rowid, 0)}></div>
            <div className={isSecondRed? 'box redbox': 'box'} onClick={()=>handleClick(rowid, 1)}></div>
            <div className={isThirdRed? 'box redbox': 'box'} onClick={()=>handleClick(rowid, 2)}></div>
            <div className={isFourthRed? 'box redbox': 'box'} onClick={()=>handleClick(rowid, 3)}></div>
        </div>
    )
}

export default Row
