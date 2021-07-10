function escapeHtml(text) {
    return text.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function back(msg) {
    msg = msg + `
    <br>
    <br>
    <a onclick='get_keko()' href="">اعده المحاوله</a>
    `;
    document.getElementById("content").innerHTML = msg
}
function spinner_keko(id) {
    document.getElementById(id).innerHTML = `<center><div class="spinner-border" style="color: #35ace0;width: 130px; height: 130px;" role="status">
            <span class="sr-only">Loading...</span>
          </div><br><br><h3>Loading...</h3></center>`;
}
function get_keko() {
    $.post("https://bot.keko.dev/api.php", function (data) {
        if (data) {
            var keko = JSON.parse(data);
            if (keko.ok) {
                if (keko.photo == false) {
                    keko.photo = ""
                }
                document.getElementById("content").innerHTML = `
                        <img id="photo" width="25%" height="25%" src="`+ keko.photo + `" class="rounded-circle">
                        <br>
                        <br>
                        <h2 id="title" >
                        `+ escapeHtml(keko.title) + `
                        </h2>
                        <a style="color: #8197af; cursor: pointer;" >`+keko.MemberCount+` members</a>
                        <br>
                        <br>
                        <div class="tgme_page_action">
  <a href="`+ escapeHtml(keko.tgurl) + `">` + escapeHtml(keko.url) + `</a>
</div>
<br>
  <button class="btn btn-primary btn-success" onclick='get_keko2("`+ escapeHtml(keko.id) + `")' type="button">تحقق من الاشتراك</button>
<br>
<br>
<a onclick='get_keko()' href="" style="color: #8197af; cursor: pointer;" >تخطي</a>

                        `
                form_back = document.getElementById("content").innerHTML
            } else {
                back(escapeHtml(keko.msg))
            }
        }
    });
}
get_keko();
function get_keko2(id) {
    spinner_keko("content");
    $.post("https://bot.keko.dev/api.php?c=" + id, function (data) {
        if (data) {
            var keko = JSON.parse(data);
            if (keko.ok) {
                if (keko.photo == false) {
                    keko.photo = ""
                }
                var alert = "";

                for (var index = 0; index < keko.f.length; index++) {
                    var e = keko.f[index];
                    alert = alert + `<div class="alert ` + e.alert + ` alert-dismissible fade show" role="alert">
                    `+ e.msg + `
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>`;
                }
                if (alert) {
                    alert = alert + "<br><br>";
                }
                var dd = document.getElementById("coinkeko").innerText;
                var howadd = keko.coin - dd;
                if (!howadd || howadd == 0) {
                    howadd = "";
                } else if (howadd > 0) {
                    howadd = "(+" + howadd + ")";
                } else {
                    howadd = "(" + howadd + ")";
                }
                document.getElementById("coinkeko").innerText = keko.coin + " " + howadd;
                document.getElementById("content").innerHTML = alert + `
                    <img id="photo" width="25%" height="25%" src="`+ keko.photo + `" class="rounded-circle">
                    <br>
                    <br>
                    <h2 id="title" >
                    `+ escapeHtml(keko.title) + `
                    </h2>
                    <a style="color: #8197af; cursor: pointer;" >`+keko.MemberCount+` members</a>
                    <br>
                    <br>
                    <div class="tgme_page_action">
<a href="`+ escapeHtml(keko.tgurl) + `">` + escapeHtml(keko.url) + `</a>
</div>
<br>
<button class="btn btn-primary btn-keko" onclick='get_keko2("`+ escapeHtml(keko.id) + `")' type="button">تحقق من الاشتراك</button>
<br>
<br>
<a onclick='get_keko()' href="" style="color: #8197af; cursor: pointer;" >تخطي</a>
                    `
                window.setTimeout(function () {
                    $(".alert").fadeTo(500, 0).slideUp(500, function () {
                        $(this).remove();
                    });
                }, 6000);
                form_back = document.getElementById("content").innerHTML
            } else {
                back(escapeHtml(keko.msg))
            }
        }
    });
}
