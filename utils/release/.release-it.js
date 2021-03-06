module.exports = {
    "git": {
        "requireBranch": "master",
        "requireCleanWorkingDir": false,
        "commit": true,
        "tagAnnotation": "Release ${version}",
        "push": true,
        "commitMessage": "chore: release v${version}",
        "changelog": "npx auto-changelog --stdout --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/master/templates/changelog-compact.hbs"
    },
    "npm": {
        "publish": false
    },
    "github": {
        "release": false
    },
    "hooks": {
        "after:bump": [
            "npx auto-changelog -p"
        ],
        "before:init": [
            "pnpm install",
            "pnpm run fix"
        ]
    }
}