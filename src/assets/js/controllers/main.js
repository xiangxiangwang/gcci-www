gcci
    .controller("MainCtrl", [
        function () {
            var self = this;

            self.mainMenu = [
                { "label": "首頁", "link": "placeholder" },
                { "label": "建堂籌款", "link": "placeholder" },
                { "label": "生命見證", "link": "placeholder" },
                { "label": "主日信息", "link": "placeholder" },
                { "label": "活動", "link": "placeholder" },
                { "label": "媒體", "link": "placeholder" }
            ];

            self.gallery = [
                { "img": "http://gcciusa.com/file/media_1798.jpg" },
                { "img": "http://gcciusa.com/file/media_1799.jpg" },
                { "img": "http://gcciusa.com/file/media_1800.jpg" },
                { "img": "http://gcciusa.com/file/media_1801.jpg" },
                { "img": "http://gcciusa.com/file/media_1802.jpg" }
            ];

            self.messages = [
                { "title": "你當走的路甚遠", "date": "6/7/15", "link": "" },
                { "title": "肢體生活", "date": "5/31/15", "link": "" },
                { "title": "認識聖靈", "date": "5/24/15", "link": "" },
                { "title": "其他的九個在哪裡", "date": "5/17/15", "link": "" },
                { "title": "無比的愛", "date": "5/10/15", "link": "" },
                { "title": "抉擇", "date": "5/3/15", "link": "" }
            ];
        }
    ])
;