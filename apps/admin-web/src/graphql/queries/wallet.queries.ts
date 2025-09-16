
import { gql } from "@apollo/client";

export const GET_WALLETS = gql`
  query GetWallets {
    wallets {
      id
      user
      balance
    }
  }
`;
