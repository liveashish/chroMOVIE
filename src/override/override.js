var tags = ["bollywood", "indian movies"]
var search = tags[Math.floor(Math.random()*tags.length)]
// alert(search)
var url = 'http://api.giphy.com/v1/gifs/random?tag='+search+'&api_key=ATA4YlBTvGBVw7Ml9bYV56YdLvA2uHs5&limit=1'
$.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function (result) {
        var img = result.data.images.downsized.url
        console.log(result)
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