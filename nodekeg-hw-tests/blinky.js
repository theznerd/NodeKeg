var fs = require('fs');

const GREEN  = '/sys/class/leds/upboard\:green\:/brightness';
const RED    = '/sys/class/leds/upboard\:red\:/brightness';
const BLUE   = '/sys/class/leds/upboard\:blue\:/brightness';
const YELLOW = '/sys/class/leds/upboard\:yellow\:/brightness';

const ON  = '1';
const OFF = '0';

const SPEED  = 100;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function blinky()
{
    fs.writeFileSync(GREEN, OFF);
    fs.writeFileSync(RED, OFF);
    fs.writeFileSync(BLUE, OFF);
    fs.writeFileSync(YELLOW, OFF);    
    
    while(true)
    {
        fs.writeFileSync(GREEN, ON);
        await sleep(SPEED);
        fs.writeFileSync(RED, ON);
        fs.writeFileSync(GREEN, OFF);
        await sleep(SPEED); 
        fs.writeFileSync(BLUE, ON);
        fs.writeFileSync(RED, OFF);
        await sleep(SPEED);
        fs.writeFileSync(YELLOW, ON);
        fs.writeFileSync(BLUE, OFF);
        await sleep(SPEED);  
        fs.writeFileSync(YELLOW, OFF);      
    }
}

async function breathe()
{
    fs.writeFileSync(GREEN, OFF);
    fs.writeFileSync(RED, OFF);
    fs.writeFileSync(BLUE, OFF);
    fs.writeFileSync(YELLOW, OFF);    
    
    while(true)
    {
        fs.writeFileSync(BLUE, ON);
        await sleep(SPEED);
        fs.writeFileSync(YELLOW, ON);
        await sleep(SPEED); 
        fs.writeFileSync(GREEN, ON);
        await sleep(SPEED);
        fs.writeFileSync(RED, ON);
        await sleep(SPEED);  
        fs.writeFileSync(RED, OFF);
        await sleep(SPEED);
        fs.writeFileSync(GREEN, OFF);
        await sleep(SPEED);
        fs.writeFileSync(YELLOW, OFF);      
        await sleep(SPEED);
        fs.writeFileSync(BLUE, OFF);
    }
}

breathe();