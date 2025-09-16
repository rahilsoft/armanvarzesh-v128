
import { gql } from "@apollo/client";

export const GET_PAYMENTS = gql\`
  query Payments {
    payments {
      id
      amount
      status
      authority
      createdAt
    }
  }
\`;
