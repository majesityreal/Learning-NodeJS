// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
    name: 'Billy',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guess list for: ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
        console.log()
    }
}

event.printGuestList()