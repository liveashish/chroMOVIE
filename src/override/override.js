var tags = ["bollywood", "indian movies", "kollywood", "tollywood"]
var search = tags[Math.floor(Math.random()*tags.length)]
// alert(search)
var url = 'http://api.giphy.com/v1/gifs/random?tag='+search+'&api_key=ATA4YlBTvGBVw7Ml9bYV56YdLvA2uHs5&limit=1'
$.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function (result) {
        var d = new Date()
        var time = formatAMPM(d)
        var date = d.toDateString()
        $('.time p').html(time)
        $('.date p').html(date)
        var img = result.data.images.downsized.url
        img = img.replace("media0", "i")
        RGBaster.colors(img, {
            success: function(payload) {
                var dominant_color = payload.dominant
                $('body').css("background",dominant_color)
                $("#gif_img").attr("src", img)
            }
        });
    },
    
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log('error')
    }
    
});


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
