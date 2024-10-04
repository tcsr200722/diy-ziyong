function ngRenderFormControls(){function t(){$("select.cbi-input-select,select:not([class]),select.cbi-input-text").each(function(){let t=$(this);t.addClass("form-select")})}function e(){$("input.cbi-input-text").each(function(){let t=$(this);t.addClass("form-control")})}$("div.cbi-value").each(function(t,e){let i=$(e);i.addClass("mb-3");let a=i.children("label.cbi-value-title");a.length>0&&(i.addClass("row"),a.addClass("col-md-3 col-lg-3 col-xl-2 col-form-label"));let n=i.children("div.cbi-value-field");n.addClass("col-md-9 col-lg-9 col-xl-6")}),$("input.cbi-input-checkbox").each(function(){let t=$(this);t.addClass("form-check-input")}),t(),e(),$("input[type='text']").each(function(){let t=$(this);t.addClass("form-control mx-1")}),$("textarea").each(function(t,e){let i=$(e);i.addClass("form-control")}),$("input.cbi-input-password").each(function(t,e){let i=$(e);i.addClass("form-control")}),$("span.cbi-value-helpicon").each(function(t,e){let i=$(e),a='<i class="fas fa-info-circle"></i>';i.replaceWith(a)}),$("img[src='/luci-static/resources/cbi/reload.gif']").each(function(t,e){let i=$(e),a='<i class="fas fa-sync" title="'+i.attr("title")+'" onclick="'+i.attr("onclick")+'" style="cursor:pointer"></i>';i.replaceWith(a),i.siblings("input.form-control").each(function(t,e){$(e).css("display","inline"),$(e).css("width","90%")})}),$("img[src='/luci-static/resources/icons/tunnel.png']").each(function(t,e){let i=$(e),a='<i class="mdi mdi-connection" title=\''+i.attr("title")+"'></i>";i.after(a),i.hide()}),$("img[src='/luci-static/resources/icons/ethernet.png']").each(function(t,e){let i=$(e),a='<i class="fas fa-ethernet" title=\''+i.attr("title")+"'></i>";i.after(a),i.hide()})}function renderButtons(){$("input.cbi-button-add").each(function(t,e){let i=$(this);i.addClass("btn btn-success waves-effect waves-light")}),$("input.cbi-button-edit").each(function(t,e){let i=$(this);i.addClass("btn btn-info waves-effect waves-light")}),$("input.cbi-button-apply").each(function(t,e){let i=$(this);i.addClass("btn btn-primary waves-effect waves-light")}),$("input.cbi-button-save").each(function(t,e){let i=$(this);i.addClass("btn btn-info waves-effect waves-light")}),$("input.cbi-button-reset").each(function(t,e){let i=$(this);i.addClass("btn btn-warning waves-effect waves-light")}),$("input.cbi-input-remove").each(function(t,e){let i=$(this);i.addClass("btn btn-danger waves-effect waves-light")}),$("input.cbi-button-remove").each(function(t,e){let i=$(this);i.addClass("btn btn-danger waves-effect waves-light")}),$("input.cbi-button-reload").each(function(t,e){let i=$(this);i.addClass("btn btn-purple waves-effect waves-light")}),$("input.cbi-button-up").each(function(t,e){let i=$(this);i.addClass("btn btn-purple waves-effect waves-light fa"),i.val("")}),$("input.cbi-button-down").each(function(t,e){let i=$(this);i.addClass("btn btn-purple waves-effect waves-light fa"),i.val("")}),$("div.cbi-page-actions").each(function(t,e){let i=$(this);i.addClass("button-list"),i.css("text-align","right")}),$("input.cbi-button").each(function(t,e){let i=$(e);i.hasClass("waves-effect")||i.addClass("btn btn-purple waves-effect waves-light")})}function renderPage(t){function e(){var t={attributes:!1,childList:!0,subtree:!0};$("div[data-dynlist]");let e=$('form[name="cbi"]');if(e.length>0){var i=new MutationObserver(function(t,e){for(var i of t)"childList"===i.type||i.type;$("div[data-dynlist] > input").each(function(t,e){let i=$(e),a=i.next("img");i.addClass("mb-3"),i.addClass("form-control"),i.css("width","calc(100% - 20px)"),a.css("display","inline-block"),i.is(":visible")&&i.css("display","inline-block")}),$("div[data-dynlist] > select").each(function(t,e){let i=$(e),a=i.next("img");i.addClass("mb-3"),i.addClass("form-select"),i.css("display","inline-block"),a.css("display","inline-block"),i.css("width","calc(100% - 20px)")}),renderButtons()});e.each(function(e,a){i.observe(a,t)})}}$("fieldset.cbi-section").each(function(t,e){let i=$(e),a=i.attr("id");if(void 0!==a&&a.startsWith("cbi-apply-"))return i.addClass("col-12 card card-body mb-0"),void i.css("display","block");let n=$('<div class="col-12"></div>'),s=$('<div class="card"></div>');i.wrap(n),i.wrap(s),i.addClass("card-body")}),$(".cbi-section").children("br").each(function(t,e){let i=$(e);i.next().length>0?i.replaceWith("<hr>"):i.remove()}),$("ul.cbi-tabmenu").each(function(t,e){let i=$(e),a=i.children("li");i.addClass("nav nav-tabs nav-bordered");let n=i.next();(n.is("fieldset")||n.hasClass("cbi-section-node")||n.hasClass("cbi-section-node-tabbed"))&&i.addClass("mb-3"),a.each(function(t,e){let i=$(e);i.addClass("nav-item");let a=i.find("a");i.hasClass("cbi-tab-disabled")?a.addClass("nav-link"):a.addClass("nav-link active")})}),renderButtons(),ngRenderFormControls(),$("div.cbi-optionals").each(function(t,e){let i=$(e);i.css("display","flex");let a=i.children("select[data-optionals]");a.each(function(t,e){$(e).addClass("form-select"),$(e).css("width","auto")})}),$("div.cbi-section-create").each(function(t,e){let i=$(e),a=i.children("input.cbi-section-create-name");a.each(function(t,e){let i=$(e);i.css("width","auto")})}),e(),$("table.cbi-section-table").each(function(){let e=$(this),i=e.children("tbody").first(),a=i.find("tr.cbi-section-table-titles").first(),n=i.find("tr.cbi-section-table-descr").first();if(!t&&a.length>0){let t=!0,e=!0;a.children("th").each(function(e,i){let a=$(i).html();null!=a&&null!=a&&""!=a&&(t=!1)}),n.children("th").each(function(t,i){let a=$(i).html();null!=a&&null!=a&&""!=a&&(e=!1)});let s="";if(t)a.remove();else{let t=a.detach();s=t.prop("outerHTML")}let l="";if(e)n.remove();else{let t=n.detach();l=t.prop("outerHTML")}if(!t||!e){let t="<thead>"+s+l+"</thead>";i.before(t)}}e.addClass("table");let s=$('<div class="table-responsive"></div>');e.wrap(s)}),$("table:not([class])").each(function(){let t=$(this);t.addClass("table"),t.addClass("mb-0");let e=$('<div class="table-responsive"></div>');t.wrap(e)}),$("legend").each(function(t,e){let i=$(e);if(null!=i.attr("id"))return;let a='<h4 class="header-title mb-3" style="font-size:large">'+i.text()+"</h4>";i.replaceWith(a)}),$("span.panel-title").each(function(t,e){let i=$(e),a=i.html(),n='<h3 class="card-title">'+a+"</h3>";i.replaceWith(n)})}let titleEle=$("h2[name=content]");if(titleEle.length>0){let t=$(titleEle[0]),e=t.html();$("#homelede_page_title").html(e),$("#homelede_page_desc_popup > div.toast-header > strong.me-auto").html(e),t.css("display","none")}else"undefined"!=typeof PageLevel2Title&&$("#homelede_page_title").html(PageLevel2Title);titleEle.length>1&&titleEle.each(function(t,e){if(t<1)return;let i=$(e);i.addClass("page-title"),i.css("display","inline-block"),i.css("color","#f3f7f9")});let cbiMapDescr=$("div.cbi-map-descr");if(cbiMapDescr.length>0){let t=$(cbiMapDescr[0]),e=t.html(),i=$("#homelede_page_desc");i.html(e),i.attr("title","点击放大页面描述。"),i.click(function(){$("#homelede_page_desc_popup").fadeIn(400,function(){$(this).removeClass("hide").addClass("show")})}),$("#homelede_page_desc_popup > div.toast-body").html(e),t.css("display","none")}if(cbiMapDescr.length>1&&cbiMapDescr.each(function(t,e){if(t<1)return;let i=$(e);i.css("display","inline-block"),i.attr("id","homelede_page_desc")}),"undefined"!=typeof luciLocation){let t=3==luciLocation.length&&"status"==luciLocation[1]&&"overview"==luciLocation[2];renderPage(t)}var functionDeclear=cbi_d_update.toString(),bodyStart=functionDeclear.indexOf("{"),copiedFunc="window.Origin_cbi_d_update = function(){"+functionDeclear.substring(bodyStart+1);eval(copiedFunc),$(function(){if(cbi_init(),eval(copiedFunc),window.cbi_d_update=function(){Origin_cbi_d_update(this),ngRenderFormControls()},$("[data-password]").on("click",function(){"false"==$(this).attr("data-password")?($(this).siblings("input").attr("type","text"),$(this).attr("data-password","true"),$(this).addClass("show-password")):($(this).siblings("input").attr("type","password"),$(this).attr("data-password","false"),$(this).removeClass("show-password"))}),$("ul.nav-tabs>li.nav-item").on("click",function(){$("ul.nav-tabs>li.nav-item>a").each(function(t,e){let i=$(e);i.removeClass("active")});let t=$(this),e=t.find("a");e.addClass("active")}),-1!=window.location.href.indexOf("/docker/overview")){let t=$("div.pure-g.status");if(t.length>0){t.addClass("card-body");let e='<div class="col-12"><div class="card">'+t.prop("outerHTML")+"</div></div>";t.replaceWith(e)}$("div.pure-g.status div.img-con > img").each(function(t,e){let i=$(e);i.css("filter","brightness(0) invert(1)")})}-1!=window.location.href.indexOf("/network/diagnostics")&&$('div.cbi-map fieldset input:not([type="button"])').each(function(t,e){let i=$(e);i.css("cssText","margin-left:0!important;margin-bottom:5px");let a=i.nextAll("select");a.length>0&&a.css("display","inline-block");let n=i.nextAll('input[type="button"]');n.length>0&&n.css("display","inline-block")}),-1!=window.location.href.indexOf("/control/wol")&&$("#wrapper > div.content-page > div > div > form > div:nth-child(3):not([class])").addClass("card card-body"),-1!=window.location.href.indexOf("/status/realtime")&&($("#bwsvg").css("background-color","rgba(54,64,74,.9)"),$("#bwsvg").css("border",""),$("#wrapper > div.content-page > div > div > div.table-responsive").addClass("card card-body"))});