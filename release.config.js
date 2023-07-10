var project = "pikalab/kt-jupyter"

var publishCmd = `
docker tag ${project}:latest ${project}:${nextRelease.version} || exit 1
docker push ${project}:${nextRelease.version} || exit 2
docker push ${project}:latest || exit 3
`

var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    [
        "@semantic-release/exec",
        {
            "publishCmd": publishCmd,
        }
    ],
)
module.exports = config
