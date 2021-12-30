import { gql } from "@apollo/client";

export type TestUserLogin = {
  phoneNumber: string,
  verificationCode: string
}
export interface UserQuery {
  currentUser: CurrentUserFragment;
}

export const UserDocument = gql`
  query getCurrentUser {
    currentUser @client {
      id
      name
      email
    }
  }
`;

export interface LoginQuery {
  userToken: UserTokenFragment;
}

export const LoginDocument = gql`
  query getUserToken {
    userToken @client {
      accessToken
    }
  }
`;

export type ServerUserFragment = {
  email: string;
  sub: string;
  name: string;
};

export type CurrentUserFragment = {
  email: string;
  id: string;
  name: string;
};

export type UserTokenFragment = {
  accessToken: string;
};
