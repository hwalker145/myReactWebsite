const Background = () => {
    let currentTime = new Date()
    let hrs = currentTime.getHours()

    

    let time = hrs >= 20 || hrs <= 4 ? 'night' : 
               (hrs >= 12 ? 'afternoon' : 'morning')

    // for later use 
    // let filenum: number
    // let rand = Math.floor(Math.random() * filenum)
    
    return (
        <>
            <h1>Time? {time}.</h1>
            <img src="" alt="" />
        </>
    )
}

export default Background