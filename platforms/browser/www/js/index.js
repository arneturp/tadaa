var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {

        // var App = new Vue({
        //     el: '#todoo-app',
        //     data: {
        //         todoos: null,
        //         current_todoos: null,
        //     },
        //     mounted: function() {
        //         // Closure
        //         var self = this;
        //
        //     },
        //     methods: {
        //         getTodoos: function() {
        //
        //         }
        //     }
        // });

    }
};

app.initialize();
