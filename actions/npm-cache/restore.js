const cache = require('@actions/cache');
const core = require('@actions/core');
const github = require('@actions/github');

const paths = [
    '~/.npm',
]
const hash = core.getInput('hash')
const key = 'npm-keplr-cache-' + hash + '-' + github.context.runId;
const restoreKeys = [
    'npm-keplr-cache-' + hash
]

console.log('Restoring NPM cache')


async function run() {
    const cacheKey = await cache.restoreCache(paths, key, restoreKeys)
    console.log('NPM cache restored')

}

run().catch((e) => {
    console.error(e)
    process.exit(-1)
});