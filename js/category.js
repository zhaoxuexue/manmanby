/**
 * Created by Administrator on 17.8.16.
 */
$(function(){
   $("#category").on("click",".category-ul>li>a",function(){
       $(this).parent().find("ul").toggle();
       $(this).parent().siblings().find("ul").slideUp();
       var titleid = $(this).attr("data-title-id");
       //console.log(titleid);
       $that = $(this)
       categoryProduct(titleid,$that);
   })
    categoryTitle()
})

function categoryTitle(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcategorytitle",
        success:function(data){
            //console.log(data);
            var html = template("category-title",data);
            $(".category-ul").html(html)
        }
    })
}

function categoryProduct(titleid,$that){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcategory?titleid="+titleid,
        success:function(data){
            //console.log(data);
            var html = template("category-product",data);
            var $ul = $that.siblings("ul");
            $ul.html(html);
        }
    })
}