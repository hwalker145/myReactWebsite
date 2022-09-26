import fs from "fs"

const Background = () => {
    let currentTime = new Date()
    let hrs = currentTime.getHours()

    let filenum: number = -1

    fs.readdir('../../media/background', 
               (err, files) => {filenum = files.length})

    let time = hrs > 20 || hrs < 4 ? 'night' : 
               hrs > 12 ? 'afternoon' : 'morning'

    let rand = Math.floor(Math.random() * filenum)
    
    return (
        <>
            <h1>Number of photos: {filenum}</h1>
            <h1>Time? {time}.</h1>
            <img src="" alt="" />
        </>
    )
}

export default Background