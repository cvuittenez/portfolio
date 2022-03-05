setTimeout(transition, 1000);

$('.js-trigger-transition').on('click', function(e) {
    e.preventDefault();
    transition();
});

function transition () {
    var tl = new AnimationTimeline();

    tl.to(CSSRulePlugin.getRule)
}