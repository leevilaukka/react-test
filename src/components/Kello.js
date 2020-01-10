import React, {useState, useEffect} from 'react'

const Kello = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [time])

    return (
        <div>
            <h2>Kello on {time.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Kello
