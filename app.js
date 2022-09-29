function blackAdam() {
    let modal = document.getElementById('modalcheck')
    modal.innerHTML = `
    <!-- Button HTML (to Trigger Modal) -->
                <!-- Modal HTML -->
                <div id="myModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Black Adam</h5>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="embed-responsive embed-responsive-16by9">
                                <iframe width="460" height="360" src="https://www.youtube.com/embed/X0tOpBuYasI" title="Black Adam – Official Trailer 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
    `
}


// onload.preventDefault()

function idCheck() {
    let modal = document.getElementById('modalcheck')
    modal.innerHTML = `
    <!-- Button HTML (to Trigger Modal) -->
                <!-- Modal HTML -->
                <div id="myModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Ida Red</h5>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="embed-responsive embed-responsive-16by9">
                                <iframe width="460" height="361" src="https://www.youtube.com/embed/8gLlJu0jML8" title="IDA RED | Official Trailer | Paramount Movies" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                      </div>
                        </div>
                    </div>
                </div>
    `
}


function pussBoots() {
    let modal = document.getElementById('modalcheck')
    modal.innerHTML = `
    <!-- Button HTML (to Trigger Modal) -->
                <!-- Modal HTML -->
                <div id="myModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Puss In Boots</h5>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="embed-responsive embed-responsive-16by9">
                                <iframe width="460" height="361" src="https://www.youtube.com/embed/RqrXhwS33yc" title="Puss In Boots: The Last Wish - Official Trailer 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                        </div>
                    </div>
                </div>
    `

}

function thor() {
    let modal = document.getElementById('modalcheck')
    modal.innerHTML = `
    <!-- Button HTML (to Trigger Modal) -->
                <!-- Modal HTML -->
                <div id="myModal" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Puss In Boots</h5>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="embed-responsive embed-responsive-16by9">
                                <iframe width="460" height="361" src="https://www.youtube.com/embed/Go8nTmfrQd8" title="Marvel Studios' Thor: Love and Thunder | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                       </div>
                    </div>
                </div>
    `


}
let ticketCount = document.getElementById('count');
let ticketPrice = document.getElementById('total');
let movieOption = 700

let totalVacentSeats = 0;
let totalSeatsBooked = 0;

function updateCount() {
    if (totalSeatsBooked > 0 || totalVacentSeats > 0) {
        let btn = document.getElementById('ticket2')
        btn.classList.remove('disabled')
    }
    let totalSeatCount = (totalSeatsBooked - totalVacentSeats);
    ticketCount.innerText = totalSeatCount;
    let totalSeatPrice = totalSeatCount * movieOption;
    ticketPrice.innerText = totalSeatPrice;
    localStorage.setItem("SEAT", totalSeatCount);
    localStorage.setItem("Price", totalSeatPrice);
    return;




}


let container = document.querySelector('.booking');
container.addEventListener("click", (e) => {

    if (e.target.classList.contains('vacentSeat')) {
        e.target.src = '/assests/seat2.png';
        e.target.className = 'occupied';
        ++totalSeatsBooked;
    } else if (e.target.classList.contains('occupied')) {
        e.target.src = '/assests/seat.png';
        e.target.className = 'vacentSeat';
        ++totalVacentSeats;
        if (totalSeatsBooked > 0 || totalVacentSeats > 0) {
            let btn = document.getElementById('ticket2')
            btn.classList.remove('disabled')
        }
    }

    updateCount();
})


function book(id) {
    movieName = id
    let movies = document.getElementById('cardgrid')
    let showing = document.getElementById('showing')
    movies.style.display = 'none'
    showing.style.display = 'none'
    document.getElementById('loader').style.display = 'block'
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none'
        let showdet = document.getElementById('showdet')
        showdet.style.display = 'block'
        showDate()
    }, 5000);

    return movieName
}

let finalName = book(movieName)


function showDate() {

    // let today = new Date()
    // today.setDate(today.getDate() + 3)

    let showtime = document.getElementById('showtime')
    showtime.innerHTML = `Showtime : Sat Oct 01 2022 <br> <br>
    <button class='movietime' onclick='seats(this.value)'  value='7pm'> 7.00PM </button>
    
    <br><br><br>
    Showtime : Sat Oct 03 2022 <br> <br>
    <button class='movietime' onclick='seats(this.value)' value='5pm'> 5.00PM </button>`
}




function seats(value) {
    let movies = document.getElementById('cardgrid')
    let showing = document.getElementById('showing')
    let showdet = document.getElementById('showdet')
    movies.style.display = 'none'
    showing.style.display = 'none'
    showdet.style.display = 'none'
    document.getElementById('loader').style.display = 'block'
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none'
        document.getElementById('booking').style.display = 'block'
    }, 5000);
    return value
}

let movieNameFinal = seats(value)
console.log(movieNameFinal)


async function checkAlert() {
    const { value: formValues } = await Swal.fire({
        title: 'Buyer Details',
        html: `<input id="swal-input1" required class="swal2-input" placeholder = "Enter Your Name" >' 
            '<input id="swal-input2" required class="swal2-input" placeholder = "Enter Your CNIC" >`,
        focusConfirm: false,
        preConfirm: () => {

            let swalInput1 = document.getElementById('swal-input1').value
            let swalInput2 = document.getElementById('swal-input2').value


            if (swalInput1.trim() === "" && swalInput2.trim() === "") {
                swal("Invalid Details", "Please Enter Your Details", "error");

            } else {

                swal("Purchased Succesfully", `Thank You for Your Purchase ${swalInput1}`, "success");
                final()
            }
            // document.getElementById('swal-input1').value,
            // document.getElementById('swal-input2').value

        }
    })

    if (formValues) {
        // Swal.fire(JSON.stringify(formValues))
    }

    if (!formValues) {
        alert('Please Enter Details')
    }


}



function final() {
    let movies = document.getElementById('cardgrid')
    let showing = document.getElementById('showing')
    let showdet = document.getElementById('showdet')
    document.getElementById('booking').style.display = 'none'
    document.getElementById('finalticket').style.display = 'block'
    movies.style.display = 'none'
    showing.style.display = 'none'
    showdet.style.display = 'none'
        // document.getElementById('loader').style.display = 'block'
        // setTimeout(() => {
        //     document.getElementById('loader').style.display = 'none'
        // }, 5000);

    let detail = document.getElementById('ticketDet')
    detail.innerHTML += `Movie Name : ${movieNameFinal}`

}

final()


// document.getElementById('booking').style.display = 'block'
// let movies = document.getElementById('cardgrid')
// let showing = document.getElementById('showing')
// let showdet = document.getElementById('showdet')
// movies.style.display = 'none'
// showing.style.display = 'none'
// showdet.style.display = 'none'