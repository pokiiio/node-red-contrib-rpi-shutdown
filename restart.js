module.exports = function (RED) {
    function RestartNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function (msg) {
            var exec = require('child_process').exec;
            exec('sudo reboot', (err, stdout, stderr) => {
                if (err) { console.log(err); }
                console.log(stdout);
            });
        });
    }
    RED.nodes.registerType("restart", RestartNode);
}