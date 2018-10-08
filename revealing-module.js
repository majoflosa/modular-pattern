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

// var items = {
//     items: [],
//     init: function() {
//         this.cacheDom();
//         this.bindEvents();
//         this.renderList();
//     },
//     cacheDom: function() {
//         this.$container = $('.container');
//         this.$input = this.$container.find('input[type="text"]');
//         this.$submit = this.$container.find('input[type="submit"]');
//         this.$list = this.$container.find('#content').find('ul');
//     },
//     bindEvents: function() {
//         this.$submit.on('click', this.addItem.bind(this));
//         this.$list.delegate('.close', 'click', this.deleteItem.bind(this));
//     },
//     addItem: function(e) {
//         e.preventDefault();
//         this.items.push( this.$input.val() );
//         this.$input.val('');
//         this.renderList();
//     },
//     deleteItem: function(e) {
//         e.preventDefault();
//         var $target = $(e.target).closest('li');
//         var index = this.$list.find('li').index($target);
        
//         this.items.splice(index, 1);
//         this.renderList();
//     },
//     renderList: function() {
//         this.$list.html('');
//         for ( var i = 0; i < this.items.length; i++ ) {
//             this.$list.append('<li>' + this.items[i] + '<a class="close" href="#">Close</a></li>');
//         }
//     }
// }

// items.init();
