var items = function() {

    var items = [];

    // cache DOM
    var $container = $('.container');
    var $input = $container.find('input[type="text"]');
    var $submit = $container.find('input[type="submit"]');
    var $list = $container.find('#content').find('ul');
    
    // bind events
    $submit.on('click', addItem);
    $list.delegate('a.close', 'click', deleteItem);

    renderList();

    function addItem(e) {
        e.preventDefault();
        items.push( $input.val() );
        $input.val('');
        console.log( items );
        renderList();
    };

    function deleteItem(e) {
        e.preventDefault();
        var $target = $(e.target).closest('li');
        var index = $list.find('li').index($target);
        
        items.splice(index, 1);
        renderList();
    };

    function renderList() {
        $list.html('');
        for ( var i = 0; i < items.length; i++ ) {
            $list.append('<li>' + items[i] + '<a class="close" href="#">Close</a></li>');
        }
    };

    return {
        addItem: addItem,
        deleteItem: deleteItem
    };

}();