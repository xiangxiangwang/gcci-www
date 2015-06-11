gcci
    .controller("MainCtrl", [
        function () {
            var self = this;

            self.mainMenu = [
                { "label": "Home", "link": "placeholder" },
                { "label": "Life Testimony", "link": "placeholder" },
                { "label": "About Us", "link": "placeholder" },
                { "label": "Events", "link": "placeholder" },
                { "label": "Media", "link": "placeholder" }
            ];

            self.gallery = [
                { "img": "http://gcciusa.com/file/media_1798.jpg" },
                { "img": "http://gcciusa.com/file/media_1799.jpg" },
                { "img": "http://gcciusa.com/file/media_1800.jpg" },
                { "img": "http://gcciusa.com/file/media_1801.jpg" },
                { "img": "http://gcciusa.com/file/media_1802.jpg" },
            ];
        }
    ])
;