import { IDispute } from './dispute.interface';

export class Dispute {
  public disputeId: string;
  public reason: string;
  public chargeId: string;
  public status: string;
  public amount: number;

  constructor(dispute: IDispute) {
    const { disputeId, amount, chargeId, reason, status } = dispute;

    this.disputeId = disputeId;
    this.amount = amount;
    this.chargeId = chargeId;
    this.reason = reason;
    this.status = status;
  }
}
