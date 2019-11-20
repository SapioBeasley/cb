import { IAddress } from './address.interface';

export interface IPayment {
  last4: string;
  cvc: string;
  exp: string;
  avs: {
    billingAddress: IAddress,
  };
}
