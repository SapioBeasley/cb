import { Networks } from '../enums/networks.enums';
import {IAddress} from './address.interface';

export interface IPayment {
  brand: string
  checks: {
    addressLine1Check: string,
    addressZipCheck: string,
    cvcCheck: string,
  };
  last4: string;
  country: string;
  expMonth: number;
  expYear: number;
  fingerprint?: string;
  funding: string;
  network: Networks,
  billingAddress: IAddress
}
