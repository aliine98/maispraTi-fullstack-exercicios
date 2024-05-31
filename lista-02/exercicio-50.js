const prompt = require('prompt-sync')();

const hotels = [
    {
        id: 1,
        name: 'hotel 1',
        city: 'cidade 1',
        totalRooms: 10,
        availableRooms: 10,
    },
    {
        id: 2,
        name: 'hotel 2',
        city: 'cidade 2',
        totalRooms: 20,
        availableRooms: 20,
    },
    {
        id: 3,
        name: 'hotel 3',
        city: 'cidade 3',
        totalRooms: 30,
        availableRooms: 30,
    },
];

const reservations = [];

function addHotel(name, city, totalRooms) {
    const id = hotels.length + 1;
    const availableRooms = totalRooms;

    const hotel = {
        id,
        name,
        city,
        totalRooms,
        availableRooms,
    };

    hotels.push(hotel);
    console.log('Hotel adicionado com sucesso!');
}

function listHotelsByCity(city) {
    const filteredHotels = hotels.filter(hotel => hotel.city === city.toLowerCase());
    if (filteredHotels.length === 0) {
        console.log('Nenhum hotel encontrado para esta cidade.');
    } else {
        console.table(filteredHotels);
    }
}

function makeReservation(hotelName, name) {
    const hotel = hotels.find(hotel => hotel.name === hotelName.toLowerCase());
    if (hotel) {
        if (hotel.availableRooms === 0) {
            console.log('Nenhum quarto disponível para esta reserva.');
            return;
        }
        hotel.availableRooms--;
        const reservation = {
            id: reservations.length + 1,
            hotelId: hotel.id,
            name,
        };
        reservations.push(reservation);
        console.log('Reserva efetuada com sucesso!');
    } else {
        console.log('Hotel não encontrado.');
    }
}

function cancelReservation(reservationId) {
    const reservation = reservations.find(reservation => reservation.id === reservationId);
    if (!reservation) {
        console.log('Reserva nảo encontrada.');
    } else {
        const hotel = hotels.find(hotel => hotel.id === reservation.hotelId);
        hotel.availableRooms++;
        reservations.splice(reservations.indexOf(reservation), 1);
        console.log('Reserva cancelada com sucesso!');
    }
}

function listReservations() {
    for (const reservation of reservations) {
        console.log('Reserva:');
        console.table(reservation);
        const hotel = hotels.find(hotel => hotel.id === reservation.hotelId);
        console.log('Hotel:');
        console.table(hotel);
    }
}

const name = prompt('Nome do hotel: ');
const city = prompt('Cidade do hotel: ');
const totalRooms = parseInt(prompt('Total de quartos: '));
addHotel(name, city, totalRooms);

const hotelName = prompt('Nome do hotel: ');
const clientName = prompt('Nome do cliente: ');
makeReservation(hotelName, clientName);
makeReservation('Hotel 1', 'Joaquim');

listReservations();

cancelReservation(1);

const cityToSearch = prompt('Cidade do hotel: ');
listHotelsByCity(cityToSearch);
