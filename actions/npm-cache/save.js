const cache = require('@actions/cache');
const core = require('@actions/core');
const github = require('@actions/github');

const paths = [
    '~/.npm',
]
const hash = core.getInput('hash')
const key = 'npm-keplr-cache-' + hash + '-' + github.context.runId;
core.info('saving NPM cache ' + key)

async function run() {
    await cache.saveCache(paths, key)
    console.log("NPM cache saved")
}

run().catch((e) => {
    core.warning("could not save cache")
    console.warn(e)
});