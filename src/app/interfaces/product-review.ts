import {User} from "./user";

export interface ProductReview {
  created_at: string;
  created_by: User;
  product: number;
  rate: number;
  text: string;
}
