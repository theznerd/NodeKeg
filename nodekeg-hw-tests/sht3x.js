const { SHT31 } = require('sht31-node')

const sht31 = new SHT31(0x44, 2);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function readSensor(){
    while(true)
    {
        //console.clear()
        sht31.readSensorData().then(data => {
            const temperature = Math.round(data.temperature * 1.8 + 32)
            const humidity = Math.round(data.humidity)
        
            console.log(`The Temperature is: ${temperature}°F`)
            console.log(`The Humidity is: ${humidity}%`)
        })

        await sleep(500)
    }
}

readSensor();