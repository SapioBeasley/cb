import { ICommunication } from './communication.interface';
import { ICustomer } from './customer.interface';
import { IDispute } from './dispute.interface';
import {Dispute} from './dispute.type';
import { IPayment } from './payment.interface';
import { IRebuttal } from './rebuttal.interface';
import { IShipment } from './shipment.interface';

export class Evidence {
  public customer: ICustomer;
  public payment: IPayment;
  public rebuttal: IRebuttal;
  public shipment: IShipment;
  public communication: ICommunication;
  public dispute: IDispute;

  constructor(dispute: IDispute) {
    this.customer = {
      email: '',
      firstName: '',
      ip: '',
      lastName: '',
      phone: ''
    };
    this.payment = {
      avs: {
        billingAddress: {
          line1: '',
          line2: '',
          city: '',
          state: '',
          zip: '',
        }
      },
      cvc: '',
      exp: '',
      last4: ''
    };
    this.rebuttal = {
      name: '',
      url: ''
    };
    this.shipment = {
      shippingAddress: {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: '',
      },
      trackingNumber: '',
    };
    this.communication = {
      email: [],
      sms: [],
      phone: [],
    };
    this.dispute = new Dispute(dispute);
  }
}
