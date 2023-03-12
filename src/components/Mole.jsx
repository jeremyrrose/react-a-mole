import moleImage from '../assets/mole.png'

import { useEffect } from 'react'

function Mole(props){

    useEffect(() => {

        const randSeconds = Math.floor(Math.random() * 5000) + 10
        const timer = setTimeout(()=>{
            props.setDisplayMole(false)
        }, randSeconds)

        return () => clearTimeout(timer)
    })

    return (
            <img
                style={{width: '30vw'}}
                src={moleImage}
                onClick={props.bop}
                />
    )
}

export default Mole