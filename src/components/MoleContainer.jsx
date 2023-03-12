import Mole from './Mole'
import EmptySlot from './EmptySlot'
import { useState } from 'react'

function MoleContainer(props){

    const {score, setScore} = props

    const [displayMole, setDisplayMole] = useState(false)

    function bop() {
        setScore(previous => previous + 1)
        setDisplayMole(false)
    }

    return (
        <div>
            <h2> Mole Container </h2>
            {displayMole ? <Mole /> : <EmptySlot />}
        </div>
    )
}

export default MoleContainer