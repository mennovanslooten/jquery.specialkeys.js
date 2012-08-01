(function($, undefined) {

    // Define $().on('enterkey', ...)  special event
    function defineSpecialKeyEvent(name, which, shift) {
        shift = shift || false;
        $.event.special[name] = {
            setup: function(data, namespaces) {
                $(this).on('keydown', jQuery.event.special[name].handler);
            },

            teardown: function(namespaces) {
                $(this).off('keydown', jQuery.event.special[name].handler);
            },

            handler: function(event) {
                if (event.which === which && event.shiftKey === shift) {
                    event.type = name;
                    jQuery.event.handle.apply(this, arguments);
                }
            }
        };
    }


    var keys = {
        backspace: 8,
        'delete': 46,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        tab: 9,
        enter: 13,
        space: 32,
        escape: 27,
        esc: 27
    };


    $.each(keys, function(name, which) {
        defineSpecialKeyEvent(name + 'key', which);
        defineSpecialKeyEvent('shift_' + name + 'key', which, true);
    });


})(jQuery);
