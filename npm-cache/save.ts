import { saveCache } from '@actions/cache';
import { info, warning, getInput } from '@actions/core';
import { context } from '@actions/github';
import { fromFile } from 'hasha';

const paths = [
    '~/.npm',
]

async function run() {
    const path = getInput('path')
    const hash = await fromFile(`${path.length>0 ? path+'/' : ''}package-lock.json`, { algorithm: 'md5' });

    const key = 'npm-keplr-cache-' + hash + '-' + context.runId;
    info('saving NPM cache ' + key)

    await saveCache(paths, key)
    console.log("NPM cache saved")
}

run().catch((e) => {
    warning("could not save cache")
    console.warn(e)
});
