import dotenv from 'dotenv';
import { get } from 'request-promise';

dotenv.config();

class StripeService {
  private readonly apiUrl: string;

  constructor() {
    const { STRIPE_API_URL } = process.env;

    if (!STRIPE_API_URL) {
      throw new Error('Stripe api URL is not set');
    }

    this.apiUrl = STRIPE_API_URL;
  }

  public listDisputes = async () => {
    return await this.getAsJson(`/v1/disputes`);
  };

  public retrieveDispute = (id: string) => {
    return this.getAsJson(`/v1/disputes/${id}`)
  };

  public getCharge = (id: string) => {
    return this.getAsJson(`/v1/charges/${id}`)
  };

  private getAsJson = async (path: string) => {
    return JSON.parse(await get(`${this.apiUrl + path}`, this.options()));
  }

  private options = () => {
    return {
      auth: {
        user: 'sk_test_pVXGtluvmTPLLhfHoRHwu7Db',
      },
    };
  };
}

export const stripeService = new StripeService();
