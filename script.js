// (function() {


var items = {
    items: [],
    init: function() {
        // console.log(this);
        this.cacheDom();
        this.bindEvents();
        this.renderList();
    },
    cacheDom: function() {
        this.$container = $('.container');
        this.$input = this.$container.find('input[type="text"]');
        this.$submit = this.$container.find('input[type="submit"]');
        this.$list = this.$container.find('#content').find('ul');
        // this.$item = this.$container.find('li');
    },
    bindEvents: function() {
        this.$submit.on('click', this.addItem.bind(this));
        this.$list.delegate('.close', 'click', this.deleteItem.bind(this));
    },
    addItem: function(e) {
        e.preventDefault();
        this.items.push( this.$input.val() );
        this.$input.val('');
        this.renderList();
    },
    deleteItem: function(e) {
        e.preventDefault();
        var $target = $(e.target).closest('li');
        var index = this.$list.find('li').index($target);
        
        this.items.splice(index, 1);
        this.renderList();
    },
    renderList: function() {
        this.$list.html('');
        for ( var i = 0; i < this.items.length; i++ ) {
            this.$list.append('<li>' + this.items[i] + '<a class="close" href="#">Close</a></li>');
        }
    }
}

items.init();

// })();