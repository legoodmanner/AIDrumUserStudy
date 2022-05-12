$(document).ready(function () {

    urls  = [
        https://zh.surveymonkey.com/r/3FWQGVZ](https://zh.surveymonkey.com/r/3FWQGVZ,
        https://zh.surveymonkey.com/r/G3RTGXH](https://zh.surveymonkey.com/r/G3RTGXH,
        https://zh.surveymonkey.com/r/G3F9SYD](https://zh.surveymonkey.com/r/G3F9SYD,
        https://zh.surveymonkey.com/r/3FPQ9YQ](https://zh.surveymonkey.com/r/3FPQ9YQ,
        https://zh.surveymonkey.com/r/G3PS8B9](https://zh.surveymonkey.com/r/G3PS8B9,
    ]
    
    

    index = Math.floor(Math.random() * urls.length)

    $('#web').attr('src', urls[index])

})
