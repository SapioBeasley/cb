import { IShipment } from './shipment.interface';

export class Shipment implements IShipment {
  public shippingAddress = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
  };
  public trackingNumber = '';

}
