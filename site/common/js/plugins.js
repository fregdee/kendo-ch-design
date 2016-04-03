// ANIMATED MODAL

$("#how__link").animatedModal({
    animatedIn:'fadeIn',
    animatedOut:'fadeOut',
    animationDuration:'1s',
    color:'rgba(255,255,255,0.95)',
});

// Easy Responsive Tabs to Accordion

$(document).ready(function() {
    //Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

// Bootstrap

$('[data-toggle=tab]').click(function(){
  if ($(this).parent().hasClass('active')){
    $($(this).attr("href")).toggleClass('active');
  }
})
