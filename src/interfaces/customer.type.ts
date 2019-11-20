import { ICustomer } from './customer.interface';

export class Customer implements ICustomer {
  public email = '';
  public firstName = '';
  public ip = '0.0.0.0';
  public lastName = '';
  public phone = '';

}
