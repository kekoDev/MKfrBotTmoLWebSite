<?php
if (!isset($bot_id)) {
    exit(0);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo htmlspecialchars($username); ?></title>
    <link rel="stylesheet" href="https://bot.keko.dev/bootstrap.min.css">
    <link rel="stylesheet" href="main.css?<?php echo rand(0, 10000); ?>=<?php echo rand(0, 10000); ?>">
</head>
<body>
    <nav class="navbar navbar-light bg-light" style="background:#5166c3">
        <a class="navbar-brand"  href="tg://resolve?domain=<?php echo htmlspecialchars($username); ?>">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" width="35" height="33" class="img-responsive d-inline-block align-top" alt="">
            <?php echo htmlspecialchars($username); ?>
        </a>
        <a class="nav-link">#<?php echo htmlspecialchars($chat_id); ?></a>
    </nav>
    <center>
        <a class="tgme_head_dl_button" href="https://t.me/<?php echo htmlspecialchars($username); ?>">
            عدد نقاطك : <strong id="coinkeko" ><?php echo htmlspecialchars($coin); ?></strong>
        </a>
    <br>
    <br>
    <br>
        <div id="content" class="container">
            <div class="spinner-border" style="color: #35ace0;width: 130px; height: 130px;" role="status">
            <span class="sr-only">Loading...</span>
          </div><br><br><h3>Loading...</h3>
        </div>

        <div class="fixed-bottom endwebsite">
            <a href="tg://resolve?domain=MkFrBot">
                powered by <img src="https://bot.keko.dev/Echo png.png" width="35" height="33" class="img-responsive d-inline-block align-top" alt=""> <strong> Telegram Bots</strong><i class="tgme_icon_arrow"></i>
            </a>
        </div>
        </center>
    <script src="https://bot.keko.dev/jquery.js"></script>
    <script src="https://bot.keko.dev/bootstrap.min.js"></script>
    <script src="main.js?<?php echo rand(0, 10000); ?>=<?php echo rand(0, 10000); ?>"></script>
</body>
</html>
