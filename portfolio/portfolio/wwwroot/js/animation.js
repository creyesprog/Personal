$(function () {

    init();

    function init() {
        animateNextLine();
    }

    // Animate lines being typed
    function animateCmd(content, $element, callback, charPosition = 0, linePosition = 0) {
        let chopper = [];

        // chop lines
        chopper = content.split('');
        setTimeout(() => {
            if (charPosition < content.length) {
                let tempCmdLine = "";
                for (var i = 0; i <= charPosition; i++) {
                    tempCmdLine = tempCmdLine + chopper[i];
                }
                $element.text(tempCmdLine);
                charPosition++;
                animateCmd(content, $element, callback, charPosition, linePosition);
                $element.addClass("blink");
            } else {
                // callback
                linePosition++;
                $element.removeClass("blink");
                callback(linePosition);
            }
        }, 65);
    }

    // Find's which line to type out next. Callback / init func.
    function animateNextLine(linePos = 0) {
        var lines = [
            ["> Hello world.", ".cmd-line1"],
            ["> I'm Christian Reyes.", ".cmd-line2"],
            ["> Full-stack web developer", ".cmd-line3"]
        ];

        if (linePos < lines.length) {
            animateCmd(lines[linePos][0], $(lines[linePos][1]), animateNextLine, 0, linePos);
        } else {
            linePos--;
            $(lines[linePos][1]).addClass("blink");
        }
    }
});