var project = "pikalab/kt-jupyter"
var version = process.env.ENFORCE_VERSION

var publishCmd = `
docker tag ${project}:latest ${project}:${version} || exit 1
docker push ${project}:${version} || exit 2
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
