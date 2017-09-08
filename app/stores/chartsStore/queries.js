import gql from 'graphql-tag';

export const repositories = gql`
  {
    repositories {
      id,
      fullName,
      commits {
        id,
        date,
      }
    }
  }
`;

export const users = gql`
  {
    users {
      displayName,
      commits {
        repositoryId,
      }
    }
  }
`;
