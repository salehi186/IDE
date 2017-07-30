const stateTree = {
    VMSGroups: {
        IsFetching: true,
        List: [
            {
                ID: 12,
                Name: "test",
                VMSList: [
                    {
                        Name: "Shahid ghandi",
                        Id: "123"
                    }, {
                        Name: "Kave",
                        Id: "124"
                    }
                ]
            }, {
                Id: 12,
                Name: "large",
                VMSList: [
                    {
                        Name: "nikbakht",
                        Id: "122"
                    }, {
                        Name: "ferdosi",
                        Id: "121"
                    }
                ]
            }
        ]
    },
    CurrentVMS: {
        Name: "ttt",
        Id: "111",
        Props: {
            Name: "tetst",
            Temprature: "12"
        },
        CurrentCanvas: 1
    },
    PlayList: {
        ActiveItem: -1,
        Id: 12,
        Name: "test",
        Items: [
            {
                img: '{"objects":[{"type":"circle","originX":"left","originY":"top","left":290,"top":1' +
                        '82.98,"width":319.88,"height":319.88,"fill":"#c8c885","stroke":null,"strokeWidth' +
                        '":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","stro' +
                        'keMiterLimit":10,"scaleX":1.23,"scaleY":0.67,"angle":0,"flipX":false,"flipY":fal' +
                        'se,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","' +
                        'fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":n' +
                        'ull,"skewX":0,"skewY":0,"radius":159.94059386257265,"startAngle":0,"endAngle":6.' +
                        '283185307179586},{"type":"i-text","originX":"left","originY":"top","left":135,"t' +
                        'op":91.08,"width":148.96,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"stroke' +
                        'Width":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter",' +
                        '"strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":fals' +
                        'e,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","f' +
                        'illRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":nu' +
                        'll,"skewX":0,"skewY":0,"text":"asdfsfsd","fontSize":40,"fontWeight":"normal","fo' +
                        'ntFamily":"arial","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlig' +
                        'n":"left","textBackgroundColor":"","charSpacing":0,"styles":{"0":{"1":{},"2":{},' +
                        '"3":{},"4":{},"5":{},"6":{},"7":{},"8":{}}}}],"background":""}',
                delay: 30,
                id: 123,
                width: 500,
                height: 500,
                name: "firstImage",
                isChanged: false,
                order:2
            }
        ]

    }
}

// const stateTree2 = {
//     SelectedVMS:-1,
//     IsFetching: true,
//     List:
//     [
//     {
//         "VMS": {
//             "ShutDownTemprature": null,
//             "PlayListScheduleChildren": null,
//             "RuleItemMessageChildren": null,
//             "VMSActionChildren": null,
//             "PlayListTemplateChildren": null,
//             "VMSID": 1,
//             "VMSGroupRef": 1,
//             "VMSGroup": null,
//             "LocationRef": 1,
//             "Location": null,
//             "CommunicationTypeRef": 2,
//             "CommunicationType": null,
//             "ControllerTypeRef": 1,
//             "ControllerType": null,
//             "VMSName": "4",
//             "AssetCode": "444",
//             "Latitude": 0.00,
//             "Longitude": 0.00,
//             "Ip": "192.168.1.10",
//             "Port": 1200,
//             "Direction": null,
//             "Type": 0,
//             "Width": 320,
//             "Height": 80,
//             "DotPitch": 0,
//             "LastState": 0,
//             "State": 0,
//             "Description": null,
//             "CreatedBy": null,
//             "Created": null,
//             "ModifyBy": null,
//             "Modified": "2017/05/08"
//         },
//         "PlayLists": [
//             {
//                 "PlayListTemplateID": 1,
//                 "PlayListTemplateName": "لیست نمایشی 1",
//                 "Items": [
//                     {
//                         "PlayListTemplateItemID": 1,
//                         "PlayOrder": 0,
//                         "PlayListTemplateItemName": "آیتم نمایشی 1",
//                         "Delay": 10,
//                         "ImageID": 1,
//                         "ImageContent": "{\"objects\":[{\"type\":\"circle\",\"originX\":\"left\",\"originY\":\"top\",\"le" +
//                                 "ft\":77,\"top\":24.98,\"width\":319.88,\"height\":319.88,\"fill\":\"#c8c885\",\"" +
//                                 "stroke\":null,\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\":\"but" +
//                                 "t\",\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":10,\"scaleX\":1.23,\"scale" +
//                                 "Y\":0.67,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":nu" +
//                                 "ll,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonz" +
//                                 "ero\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"sk" +
//                                 "ewX\":0,\"skewY\":0,\"radius\":159.94059386257265,\"startAngle\":0,\"endAngle\":" +
//                                 "6.283185307179586},{\"type\":\"i-text\",\"originX\":\"left\",\"originY\":\"top\"" +
//                                 ",\"left\":42,\"top\":30.08,\"width\":148.96,\"height\":45.2,\"fill\":\"rgb(0,0,0" +
//                                 ")\",\"stroke\":null,\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\"" +
//                                 ":\"butt\",\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":10,\"scaleX\":1,\"sc" +
//                                 "aleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":nu" +
//                                 "ll,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonz" +
//                                 "ero\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"sk" +
//                                 "ewX\":0,\"skewY\":0,\"text\":\"asdfsfsd\",\"fontSize\":40,\"fontWeight\":\"norma" +
//                                 "l\",\"fontFamily\":\"arial\",\"fontStyle\":\"\",\"lineHeight\":1.16,\"textDecora" +
//                                 "tion\":\"\",\"textAlign\":\"left\",\"textBackgroundColor\":\"\",\"charSpacing\":" +
//                                 "0,\"styles\":{\"0\":{\"1\":{},\"2\":{},\"3\":{},\"4\":{},\"5\":{},\"6\":{},\"7\"" +
//                                 ":{},\"8\":{}}}}]}",
//                         "ImageURL": null
//                     }, {
//                         "PlayListTemplateItemID": 2,
//                         "PlayOrder": 0,
//                         "PlayListTemplateItemName": "آیتم نمایشی 2",
//                         "Delay": 5,
//                         "ImageID": 2,
//                         "ImageContent": "{\"objects\":[{\"type\":\"rect\",\"originX\":\"left\",\"originY\":\"top\",\"left" +
//                                 "\":50,\"top\":50,\"width\":20,\"height\":20,\"fill\":\"green\",\"stroke\":null," +
//                                 "\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\":\"butt\",\"strokeLi" +
//                                 "neJoin\":\"miter\",\"strokeMiterLimit\":10,\"scaleX\":4.3,\"scaleY\":4.3,\"angle" +
//                                 "\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":t" +
//                                 "rue,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"globalCo" +
//                                 "mpositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY" +
//                                 "\":0,\"rx\":0,\"ry\":0},{\"type\":\"circle\",\"originX\":\"left\",\"originY\":\"" +
//                                 "top\",\"left\":197,\"top\":59,\"width\":40,\"height\":40,\"fill\":\"green\",\"st" +
//                                 "roke\":null,\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\":\"butt" +
//                                 "\",\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":10,\"scaleX\":1.6,\"scaleY" +
//                                 "\":1.6,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null" +
//                                 ",\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzer" +
//                                 "o\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skew" +
//                                 "X\":0,\"skewY\":0,\"radius\":20,\"startAngle\":0,\"endAngle\":6.283185307179586}" +
//                                 "],\"background\":\"rgba(0, 0, 0, 0)\"}",
//                         "ImageURL": null
//                     }
//                 ]
//             }
//         ]
//     }
// ]
// }

export default stateTree;