export {}; // এই লাইনটি একদম উপরে যোগ করুন

type Booking = {
  name: string;
  guests: number;
  time: string;
};

function formatBookingConfirmation(booking: Booking): string {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}