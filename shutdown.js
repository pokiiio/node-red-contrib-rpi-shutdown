module.exports = function (RED) {
    function ShutdonwNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function (msg) {
            var exec = require('child_process').exec;
            exec('sudo shutdown -h now', (err, stdout, stderr) => {
                if (err) { console.log(err); }
                console.log(stdout);
            });
        });
    }
    RED.nodes.registerType("shutdown", ShutdonwNode);
}