import molehillImage from "../assets/molehill.png"
import { useEffect } from 'react'

function EmptySlot(props){

    useEffect(() => {

            const randSeconds = Math.floor(Math.random() * 5000) + 10
            const timer = setTimeout(()=>{
                props.setDisplayMole(true)
            }, randSeconds)

            return () => clearTimeout(timer)

    })

    return (
            <img
                style={{width: '30vw'}}
                src={molehillImage}
                />
    )
}

export default EmptySlot