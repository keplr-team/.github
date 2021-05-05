# .github
Shared actions

## Usage

clone this repo with 

```sh
git clone git@github.com:keplr-team/.github.git dot.github
```

It will be ceated in the directory `dot.github` instead of `.github` that would be considered an hidden directory.



npx ncc build restore.js -o restore && npx ncc build save.js -o save && git commit --amend --no-edit && gpf