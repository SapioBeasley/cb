import { IAddress } from './address.interface';

export interface IPayment {
  last4: string;
  cvc: number;
  exp: string;
  avs: {
    billingAddress: IAddress,
  };
}
