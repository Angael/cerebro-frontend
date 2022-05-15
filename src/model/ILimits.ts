// import { AccountType } from '../IAccount';

export interface ILimits {
  type: string; //AccountType;
  bytes: {
    used: number;
    max: number;
  };
}
