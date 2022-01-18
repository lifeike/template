# template


## change port number

```javascript
//webpack.config.js
devServer{
    port:3000 //default
}
```

## config url

```javascript
//webpack.config.js
if(env.productionDevelopmentBranch){
    mode="production",
    Base_URL="something here"
    sourceMapType=false
}

```


## pass some varible

```javascript
//webpack.config.js
new DefinePlugin({
    key:"value"
})
//then you can use key in your source code anywhere

```

## add browser compatibility    

```javascript
//package.json
"browserslist":[
    ">0.01",
    "last 2 version",
    "not dead"
]

```

## proxy
```javscript
//webpack.config.js
devServer:{
    "/v1":{
        targt:"https://api.staging.com",
        pathRewrite:{"^/v1":""},
        changeOrigin:true
    }
}

```

`let me know you need some other configurations, I'm happy to add it, because I wish I can use it in my project as well.`

