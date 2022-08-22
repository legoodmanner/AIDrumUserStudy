$(document).ready(function () {

    urls  = [
        'https://zh.surveymonkey.com/r/PW8JPTX',
        'https://zh.surveymonkey.com/r/PWRSXYH',
        'https://zh.surveymonkey.com/r/PWT6PCJ',
        'https://zh.surveymonkey.com/r/B6MHWPP',
        'https://zh.surveymonkey.com/r/PWNKK2S',
    ]
    
    

    index = Math.floor(Math.random() * urls.length)

    $('#web').attr('src', urls[index])

})
