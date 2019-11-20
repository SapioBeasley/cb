import { IPayment } from './payment.interface';

export class Payment implements IPayment {
  public avs = {
    billingAddress: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
    }
  };
  public cvc = '';
  public exp = '';
  public last4 = '';
}
