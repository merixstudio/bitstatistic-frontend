const moment = require('moment');
const faker = require('faker');

function lastTwoWeeks() {
  return faker.date.between(
    moment().format('YYYY-MM-DD'),
    moment().subtract(2, 'weeks').format('YYYY-MM-DD'),
  );
};

function generateCommits(numberOfCommits, userIds, repositoryIds) {
  return (new Array(numberOfCommits)).fill(null).map((_, idx) => ({
    id: idx + 1,
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    repositoryId: repositoryIds[Math.floor(Math.random() * repositoryIds.length)],
    createdAt: lastTwoWeeks(),
  }));
}


module.exports = function generateData() {
  const commits = generateCommits(40, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

  const users = [1, 2, 3, 4, 5].map(userId => ({
    id: userId,
    username: faker.name.findName(),
    displayName: faker.name.findName(),
    uuid: faker.random.uuid(),
    createdAt: lastTwoWeeks(),
    commits: commits
      .filter(commit => commit.userId === userId),
  }));

  const repositories = [1, 2, 3, 4, 5].map(repoId => ({
    id: repoId,
    fullName: faker.company.companyName(0),
    createdAt: lastTwoWeeks(),
    commits: commits.filter(commit => commit.repositoryId === repoId),
  }));

  return {
    repositories,
    commits,
    users,
  };
};
