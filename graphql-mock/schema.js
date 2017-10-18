module.exports = `
schema {
  query: BitStatisticsGraphQL
}

type BitStatisticsGraphQL {
  repositories(
    id: Int
    limit: Int
    startDate: String
    endDate: String
  ): [Repository]
  users(
    id: Int
  ): [User]
  commits(
    id: Int
    startDate: String
    endDate: String
  ): [Commit]
}

type Commit {
  id: Int
  hash: String
  message: String
  userId: Int
  repositoryId: String
  date: String
  createdAt: String
}

type Repository {
  id: Int
  name: String
  fullName: String
  createdAt: String
  users: [User]
  commits: [Commit]
}

type User {
  id: Int
  username: String
  displayName: String
  uuid: String
  createdAt: String
  commits: [Commit]
}`;
