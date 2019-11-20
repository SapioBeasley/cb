import { ICommunication } from './communication.interface';

export class Communication implements ICommunication {
  public email = [];
  public phone = [];
  public sms = [];

  public getEmail = (): Array<{screenshot: string}> => {
    return [{
      screenshot: 'image-url'
    }]
  };

  public getSms = (): Array<{screenshot: string}> => {
    return [{
      screenshot: 'image-url'
    }]
  };

  public getPhone = (): Array<{screenshot: string}> => {
    return [{
      screenshot: 'image-url'
    }]
  };
}
