export interface IReservationModelAngular {
  reservationId: string;
  customerId: number;
  resId: string;
  date: string;
  time: string;
  peopleCount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  phoneNumber: string;
  tableNumber: number;
}