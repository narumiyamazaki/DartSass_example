//windowサイズを取得
$(window).resize((event) => {
    //横幅を取得
    var width = $(window).width();

    //とりあえず色を変えてみる
    if (width <= 768) {
        $("p").css("color", "tomato");
    }
    else {
        $("p").css("color", "skyblue");
    }

    $(function () {
        //windowサイズが768px未満の時
        if (width <= 768) {
            //追加されるHTML親要素
            //<div class="p-item-section--cotainer"></div>を親要素に指定する
            var div = $('<div class="p-item-section--cotainer">');
            //.c-item-section1のついたクラスに
            $(".c-item-section1").wrapAll(div);
            //$('.inner').wrapAll('<div class="new" />');
        }
        //768px以上なら何もしない
        else {
            ;
        }
    });
});