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
})

const mediaQueryList = window.matchMedia("(max-width:768px)");

/*イベントリスナー*/

const listener = (event) => {
    //メディアクエリの設定
    if(event.matches){
        //768px以下の時
        $(".p-item-section1").wrapAll('<div class="p-item-section--container1">');
        $(".p-item-section2").wrapAll('<div class="p-item-section--container2">');
        $(".p-item-section3").wrapAll('<div class="p-item-section--container1">');
    } else if($('.p-item-section--container1').length || $('.p-item-section--container2').length) {
        //768px以上の時
        $(".p-item-section1").unwrap();
        $(".p-item-section2").unwrap();
        $(".p-item-section3").unwrap();
    }
};



// リスナー登録
// mediaQueryList.addListener(listener); // @deprecated
mediaQueryList.addEventListener("change", listener);

// 初期化処理
listener(mediaQueryList);

//
    //ボツコード
    //$(function () {
        //windowサイズが768px未満の時
        //if (width <= 768) {
            //追加されるHTML親要素
            //<div class="p-item-section--cotainer"></div>を親要素に指定する
            //var div = $('<div class="p-item-section--cotainer">');
            //.c-item-section1のついたクラスに
            //$(".c-item-section1").wrapAll(div);
            //$('.inner').wrapAll('<div class="new" />');
        //}
        //768px以上なら何もしない
        //else {
            //;
        //}
    //});
//});