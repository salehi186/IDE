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
            },
            {
                img: '{"objects":[{"type":"circle","originX":"left","originY":"top","left":290,"top":1' +
                        '82.98,"width":319.88,"height":200.88,"fill":"#cccccc","stroke":null,"strokeWidth' +
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
                        'll,"skewX":0,"skewY":0,"text":"xxxxxxxxxxxxxxxxx","fontSize":40,"fontWeight":"normal","fo' +
                        'ntFamily":"arial","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlig' +
                        'n":"left","textBackgroundColor":"","charSpacing":0,"styles":{"0":{"1":{},"2":{},' +
                        '"3":{},"4":{},"5":{},"6":{},"7":{},"8":{}}}}],"background":""}',
                delay: 50,
                id: 1258,
                width: 500,
                height: 500,
                name: "YUouer sdf",
                isChanged: false,
                order:3
            },
             {
                img: '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"gre' +
                        'en","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"sca' +
                        'leX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable"' +
                        ':true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparent' +
                        'Corners":true,"perPixelTargetFind":false,"rx":0,"ry":0}],"background":"rgba(0, 0' +
                        ', 0, 0)"}',
                delay: 40,
                id: 1243,
                width: 500,
                height: 500,
                name: "firstImage",
                isChanged: false,
                order:1
            }
        ]

    }
}

export default stateTree;