// ==UserScript==
// @name        NiconicoRemodelSearchOption
// @namespace   https://github.com/nonane31
// @author      non_shi
// @include     http://www.nicovideo.jp/search/*
// @include     http://www.nicovideo.jp/tag/*
// @version     1
// @grant       none
// @description	Remodeling search option on Niconico
// ==/UserScript==

(function(){
    function create_sort_button(sort,order,label){
        var link=document.createElement("a");
        link.textContent=label;
        link.className="switchingBtn";
        var search_url=location.origin+location.pathname+"?";
        var params=new URLSearchParams(location.search);
        params.set("sort",sort);
        params.set("order",order);
        link.href=search_url+params.toString();
        var div=document.createElement("div");
        div.style.cssText="float:right;margin:3px 2px;";
        div.appendChild(link);
        return div;
    }

    var toolbar=document.getElementsByClassName("toolbar")[0];
    var rich_sort_bar=document.createElement("div");
    rich_sort_bar.id="rich_sort_bar";
    rich_sort_bar.style.cssText="width:100%;height:30px;margin-bottom:4px;border:1px solid #aaa;border-radius:4px;background:#fff;color:#333;";
    toolbar.insertBefore(rich_sort_bar,toolbar.firstChild);
    var search_option=document.getElementsByClassName("searchOption")[0];
    search_option.style.marginBottom="4px";
    toolbar.insertBefore(search_option,rich_sort_bar.nextSibling);

    var label_sort=document.createElement("div");
    label_sort.style.cssText="height:22px;line-height:22px;margin:4px;padding:0 4px;display:inline-block;text-align:center;font-size:93%;";
    label_sort.innerText="並び方 : "+document.getElementsByClassName("searchOptionBtn switchingBtn expand")[0].innerText.substr(1);
    rich_sort_bar.appendChild(label_sort);

    var searchOptionBtn=toolbar.getElementsByClassName("searchOptionBtn");
    var btn_SO_expand=searchOptionBtn[0];
    btn_SO_expand.firstChild.innerText="検索オプション▼";
    btn_SO_expand.style.cssText+="float:right;margin:3px 2px;margin-right:6px;";
    rich_sort_bar.appendChild(btn_SO_expand);
    var btn_SO_collapse=searchOptionBtn[1].parentNode;
    btn_SO_collapse.firstChild.innerText="検索オプション▲";
    btn_SO_collapse.style.cssText+="float:right;margin:3px 2px;";
    rich_sort_bar.appendChild(btn_SO_collapse);

    var btn_sort_fd=create_sort_button("f","d","動画新着順");
    rich_sort_bar.appendChild(btn_sort_fd);
    var btn_sort_nd=create_sort_button("n","d","コメント新着順");
    rich_sort_bar.appendChild(btn_sort_nd);
}());
