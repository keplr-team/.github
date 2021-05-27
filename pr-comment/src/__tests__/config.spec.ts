/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable global-require */
/* eslint-disable no-process-env */
beforeEach(() => {
  process.env.GITHUB_REPOSITORY = 'keplr-team/action-pr-comment';
  process.env.INPUT_NUMBER = '123';
  process.env.INPUT_APPEND = 'false';
  process.env.INPUT_RECREATE = 'false';
  process.env.INPUT_DELETE = 'false';
  process.env.INPUT_GITHUB_TOKEN = 'some-token';
});

afterEach(() => {
  jest.resetModules();
  delete process.env.GITHUB_REPOSITORY;
  delete process.env.INPUT_REPO;
  delete process.env.INPUT_HEADER;
  delete process.env.INPUT_MESSAGE;
  delete process.env.INPUT_NUMBER;
  delete process.env.INPUT_APPEND;
  delete process.env.INPUT_RECREATE;
  delete process.env.INPUT_DELETE;
  delete process.env.INPUT_GITHUB_TOKEN;
  delete process.env.INPUT_PATH;
});

test('repo', () => {
  process.env.INPUT_REPO = 'other';
  expect(require('../config')).toMatchObject({
    pullRequestNumber: expect.any(Number),
    repo: { owner: 'keplr-team', repo: 'other' },
    body: '',
    header: '',
    append: false,
    recreate: false,
    deleteOldComment: false,
    githubToken: 'some-token',
  });
});
test('header', () => {
  process.env.INPUT_HEADER = 'header';
  expect(require('../config')).toMatchObject({
    pullRequestNumber: expect.any(Number),
    repo: { owner: 'keplr-team', repo: 'action-pr-comment' },
    body: '',
    header: 'header',
    append: false,
    recreate: false,
    deleteOldComment: false,
    githubToken: 'some-token',
  });
});
test('append', () => {
  process.env.INPUT_APPEND = 'true';
  expect(require('../config')).toMatchObject({
    pullRequestNumber: expect.any(Number),
    repo: { owner: 'keplr-team', repo: 'action-pr-comment' },
    body: '',
    header: '',
    append: true,
    recreate: false,
    deleteOldComment: false,
    githubToken: 'some-token',
  });
});
test('recreate', () => {
  process.env.INPUT_RECREATE = 'true';
  expect(require('../config')).toMatchObject({
    pullRequestNumber: expect.any(Number),
    repo: { owner: 'keplr-team', repo: 'action-pr-comment' },
    body: '',
    header: '',
    append: false,
    recreate: true,
    deleteOldComment: false,
    githubToken: 'some-token',
  });
});
test('delete', () => {
  process.env.INPUT_DELETE = 'true';
  expect(require('../config')).toMatchObject({
    pullRequestNumber: expect.any(Number),
    repo: { owner: 'keplr-team', repo: 'action-pr-comment' },
    body: '',
    header: '',
    append: false,
    recreate: false,
    deleteOldComment: true,
    githubToken: 'some-token',
  });
});
describe('path', () => {
  test('when exists return content of a file', () => {
    process.env.INPUT_PATH = `${__dirname}/assets/result`;
    expect(require('../config')).toMatchObject({
      pullRequestNumber: expect.any(Number),
      repo: { owner: 'keplr-team', repo: 'action-pr-comment' },
      body: 'hi there\n',
      header: '',
      append: false,
      recreate: false,
      deleteOldComment: false,
      githubToken: 'some-token',
    });
  });

  test('when not exists return null string', () => {
    process.env.INPUT_PATH = `${__dirname}/assets/not_exists`;
    expect(require('../config')).toMatchObject({
      pullRequestNumber: expect.any(Number),
      repo: { owner: 'keplr-team', repo: 'action-pr-comment' },
      body: '',
      header: '',
      append: false,
      recreate: false,
      deleteOldComment: false,
      githubToken: 'some-token',
    });
  });
});

test('message', () => {
  process.env.INPUT_MESSAGE = 'hello there';
  expect(require('../config')).toMatchObject({
    pullRequestNumber: expect.any(Number),
    repo: { owner: 'keplr-team', repo: 'action-pr-comment' },
    body: 'hello there',
    header: '',
    append: false,
    recreate: false,
    deleteOldComment: false,
    githubToken: 'some-token',
  });
});
