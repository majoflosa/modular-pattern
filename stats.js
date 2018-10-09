var stats = (function() {
    var items = 0;

    // cache DOM
    var $stats = $('#stats');

    // bind events
    events.on('itemsChanged', setItems);

    render();

    function render() {
        $stats.html( items );
    }

    function setItems( newItem ) {
        items = newItem;
        render();
    }

    function destroy() {
        $stats.closest('#stats-wrap').remove();
        events.off('itemsChanged', setItems);
    }

    return { destroy: destroy };
    
})();