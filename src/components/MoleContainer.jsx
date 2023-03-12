import Mole from './Mole'
import EmptySlot from './EmptySlot'
import { useState } from 'react'

function MoleContainer(props){

    const {setScore} = props

    const [displayMole, setDisplayMole] = useState(false)

    function bop() {
        setScore(previous => previous + 1)
        setDisplayMole(false)
    }

    return (
        <div>
            {displayMole ? <Mole
                setDisplayMole={setDisplayMole} 
                bop={bop}
            /> : <EmptySlot 
                setDisplayMole={setDisplayMole} 
            />}
        </div>
    )
}

export default MoleContainer