const { v4: uuid } = require("uuid");

class Booking {
  constructor({id, userId, roomId, guestName, checkInDate, checkOutDate}) {
    this.id = id ?? uuid();
    this.userId = userId;
    this.roomId = roomId;
    this.guestName = guestName;
    this.checkInDate = new Date(checkInDate);
    this.checkOutDate = new Date(checkOutDate);
  }
}

module.exports = Booking