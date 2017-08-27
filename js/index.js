$(function(){
    $("#menu").on("click",".item:nth-child(8)",function(){
        $("#menu .item:nth-last-child(-n+4)").toggle();
    })
    menuProduct()
    discountProduct()
})

function menuProduct(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getindexmenu",
        success:function(data){
            //console.log(data)
            var html  = template("menu-Product",data);
            $("#menu").html(html)
        }

    })
}

function discountProduct(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getmoneyctrl",
        success:function(data){
            //console.log(data)
            var html = template("discount-product",data);
            $(".discount-product").html(html)
        }
    })
}