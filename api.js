'use strict';
const express = require('express');
const cors = require('cors');
const app = express();



const PORT = process.env.PORT || 3000;
app.use(express.static("src"))

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
})

app.get('/', (req, res, next)=>{
    res.json([
        {
            title:"Cachorros silvestres",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus tortor, vel finibus justo iaculis et. Donec sit amet laoreet velit, ut bibendum enim. Morbi nec erat nec lorem convallis maximus non nec enim. Phasellus pellentesque ex ut posuere vehicula. Phasellus facilisis efficitur lorem, at ultricies orci sagittis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales accumsan est, sit amet consequat ex blandit non.",
            linkContent: {
                link:"https://www.lipsum.com/feed/html",
                name:"Ipsum"
            }
        },
        {
            title:"Galinhas da Malásia",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus tortor, vel finibus justo iaculis et. Donec sit amet laoreet velit, ut bibendum enim. Morbi nec erat nec lorem convallis maximus non nec enim. Phasellus pellentesque ex ut posuere vehicula. Phasellus facilisis efficitur lorem, at ultricies orci sagittis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales accumsan est, sit amet consequat ex blandit non.",
            linkContent: {
                link:"https://www.lipsum.com/feed/html",
                name:"MALASIA"
            }
        }
    ])
});

app.listen(PORT, ()=>{
    console.log('escutando a porta:' + PORT)
})