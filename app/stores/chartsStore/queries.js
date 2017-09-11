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
      id,
      displayName,
      commits {
        repositoryId,
      }
    }
  }
`;

export const commits = gql`
  query Commits($startDate: String!) {
    commits(startDate: $startDate) {
      id,
      userId,
      repositoryId,
    }
  }
`;
