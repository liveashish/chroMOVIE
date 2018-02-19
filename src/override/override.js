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
        var hours = d.getHours() % 12 || 12;
        var time = hours + ":" + d.getMinutes()
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

