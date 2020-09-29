
// when the document loads create the blockly workspace
document.addEventListener("DOMContentLoaded", function () {

    // grab the toolbox
    var toolbox = document.getElementById("toolbox");
    var blocklyDiv = document.getElementById("blocklyDiv");
    // create the workspace
    var workspace = Blockly.inject(blocklyDiv,
        {
            comments: true,
            collapse: true,
            disable: true,
            grid:
            {
                spacing: 25,
                length: 3,
                colour: '#ccc',
                snap: true
            },
            toolbox: toolbox,
            zoom:
            {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 4,
                minScale: 0.25,
                scaleSpeed: 1.1
            },
        });

    // log the workspace
    console.log(workspace);
});