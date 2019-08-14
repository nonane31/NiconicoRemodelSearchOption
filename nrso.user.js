// ==UserScript==
// @name        NiconicoRemodelSearchOption
// @namespace   https://github.com/nonane31
// @author      non_shi
// @include     http://www.nicovideo.jp/search/*
// @include     http://www.nicovideo.jp/tag/*
// @version     1.1
// @grant       none
// @description	Remodeling search option on Niconico
// ==/UserScript==

(function(){

	const toolbar=document.getElementsByClassName("toolbar")[0];
	const elm_rich_sort_bar=(()=>{
		const elm_sort_bar=document.createElement("div");
		elm_sort_bar.id="rich_sort_bar";
		elm_sort_bar.style.cssText="width:100%;height:30px;margin-bottom:4px;border:1px solid #aaa;border-radius:4px;background:#fff;color:#333;";
		elm_sort_bar.appendChild((()=>{
			const elm_label_sort=document.createElement("div");
			elm_label_sort.style.cssText="height:22px;line-height:22px;margin:4px;padding:0 4px;display:inline-block;text-align:center;font-size:93%;";
			elm_label_sort.innerText="並び方 : "+document.getElementsByClassName("searchOptionBtn switchingBtn expand")[0].innerText.substr(1);
			return elm_label_sort;
		})());
		const searchOptionBtn=toolbar.getElementsByClassName("searchOptionBtn");
		elm_sort_bar.appendChild((()=>{
			const btn_option_expander= document.querySelector("div[data-search-option-open]");
			btn_option_expander.firstChild.innerText="検索オプション▼";
			btn_option_expander.style.cssText+="float:right;margin:3px 2px;margin-right:6px;";
			return btn_option_expander;
		})());
		elm_sort_bar.appendChild((()=>{
			const btn_option_collapser=document.querySelector("div[data-search-option-close]");
			btn_option_collapser.firstChild.innerText="検索オプション▲";
			btn_option_collapser.style.cssText+="float:right;margin:3px 2px;";
			return btn_option_collapser;
		})());
		return elm_sort_bar;
	})();

	(()=>{//inject_rich_sort_bar
		toolbar.insertBefore(elm_rich_sort_bar,toolbar.firstChild);
		const search_option=document.getElementsByClassName("searchOption")[0];
		search_option.style.marginBottom="4px";
		toolbar.insertBefore(search_option,elm_rich_sort_bar.nextSibling);
	})();

	(()=>{//add_fast_sort_button
		const create_sort_button=(sort,order,label)=>{
			const elm_link=document.createElement("a");
			elm_link.textContent=label;
			elm_link.className="switchingBtn";
			let params=new URLSearchParams(location.search);
			params.set("sort",sort);
			params.set("order",order);
			params.delete("page");
			elm_link.href=location.origin+location.pathname+"?"+params.toString();
			const elm_outer=document.createElement("div");
			elm_outer.style.cssText="float:right;margin:3px 2px;";
			elm_outer.appendChild(elm_link);
			return elm_outer;
		}
		elm_rich_sort_bar.appendChild(create_sort_button("f","d","動画新着順"));
		elm_rich_sort_bar.appendChild(create_sort_button("n","d","コメント新着順"));
	})();
}());

