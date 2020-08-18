$(function () {

    init();

    function init() {
        animateNextLine();
        loadAnimations();
        animateOnScrollPos();
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

    // When scrolling, determine what animations to trigger
    var $animations;
    var $animAnchorLink;

    $(window).scroll(animateOnScrollPos);

    function loadAnimations() {
        $animations = [];
        $animAnchorLink = [];

        // Load normal animations
        $("[animation]").each(function (i, e) {
            $animations.push($(e));
        });

        // Load linked animations anchor/link anims
        $("[anim-anchor]").each(function (i, e) {
            var linkArray = [];
            // Add first element
            linkArray.push($(e));
            $("[anim-link=" + $(e).attr('anim-anchor') + "]").each(function (a, o) {
                linkArray.push($(o));
            });
            $animAnchorLink.push(linkArray);
        });
    }

    function animateOnScrollPos() {
        // Check if we still have any animations to go through
        if ($animations !== undefined && $animations.length !== 0) {
            // Loop through animations and trigger when at certain point
            for (var i = $animations.length - 1; i >= 0; i--) {
                if ($animations[i].offset().top <= $("html").scrollTop() + 600) {
                    $animations[i].removeClass("hide");
                    $animations[i].addClass($animations[i].attr("animation"));
                    $animations.splice(i, 1);
                }
            }
        }

        // Check linked animations
        if ($animAnchorLink !== undefined && $animAnchorLink.length !== 0) {
            // Loop through animations and trigger when at anchor point
            for (var i = $animAnchorLink.length - 1; i >= 0; i--) {
                if ($animAnchorLink[i][0].offset().top <= $("html").scrollTop() + 600) {
                    for (var a = $animAnchorLink[i].length - 1; a >= 1; a--) {
                        $animAnchorLink[i][a].removeClass("hide");
                        $animAnchorLink[i][a].addClass($animAnchorLink[i][0].attr("anim-anchor"));
                    }
                    $animAnchorLink.splice(i, 1);
                }
            }
        }
    }
});