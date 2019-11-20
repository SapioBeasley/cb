import { IAddress } from './address.interface';

export interface IShipment {
  shippingAddress: IAddress
  trackingNumber: string;
}
