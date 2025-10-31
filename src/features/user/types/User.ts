type Account = {
  negative: number;
  balance: number;
  name: string;
  reserve: number;
  currency: string;
  id: string;
};

type Role = {
  role: string;
  name: string;
  id: string;
};

type Parent = {
  birthday: string;
  gender: string;
  timezone: string;
  settlement_fias_id: string;
  pat_name: string;
  last_name: string;
  telegram: string;
  instagram: string;
  login: string;
  delete: number;
  settlement: string;
  co_statement_link?: string;
  phone: string;
  date_create: string;
  theme: string;
  id: string;
  first_name: string;
  payout_state: string;
  email: string;
  zulip_api_key?: string;
  restore_code: string;
  state: string;
};

export type User = {
  birthday: string;
  gender: string;
  timezone: string;
  pat_name: string;
  settlement_fias_id: string;
  telegram: string;
  last_name: string;
  confirm_email: string;
  instagram: string;
  login: string;
  delete: number;
  settlement: string;
  co_pat_name: string;
  co_first_name: string;
  date_create: string;
  phone: string;
  confirm_code: string;
  co_last_name: string;
  theme: string;
  id: string;
  first_name: string;
  payout_state: string;
  email: string;
  restore_code: string;
  account_bonus: Account;
  account_gift: Account;
  parent: Parent;
  state: string;
  role_list: Role[];
};
