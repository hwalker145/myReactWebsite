const Background = () => {
    let currentTime = new Date()
    let hrs = currentTime.getHours()

    fs.readdir('.')

    let time = hrs > 20 || hrs < 4 ? 'night' : 
               hrs > 12 ? 'afternoon' : 'morning'

    return (
        <h1>Time? {time}.</h1>
    )
}

export default Background