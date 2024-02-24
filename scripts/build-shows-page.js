const tickets = [
    {
        date: "Mon Sept 09 2024", 
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Mon Sept 09 2024", 
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Mon Sept 09 2024", 
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Mon Sept 09 2024", 
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
]

console.log(tickets)

const loadTickets = (tickets) => {
    tickets.forEach((ticket, index) => {
        console.log(index, ": ", ticket)
    });

}


loadTickets(tickets)

const btnEl = document.querySelector('.shows-container__button')
btnEl.addEventListener('click', () => {

})