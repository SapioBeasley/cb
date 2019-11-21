import { Networks } from '../enums/networks.enums';
import { ICommunication } from './communication.interface';
import { ICustomer } from './customer.interface';
import { IDispute } from './dispute.interface';
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
      firstName: '',
      lastName: '',
      ip: '',
      phone: '',
      email: ''
    };
    this.payment = {
      billingAddress: {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: '',
      },
      brand: '',
      checks: {
        addressLine1Check: '',
        addressZipCheck: '',
        cvcCheck: ''
      },
      country: '',
      expMonth: 0,
      expYear: 0,
      funding: '',
      network: Networks.unknown,
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
    this.dispute = dispute;
  }

  public init = () => {};
}
