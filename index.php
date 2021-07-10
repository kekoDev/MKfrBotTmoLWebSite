<?php
function getInfoKey($key)
{
    $data = file_get_contents("https://bot.keko.dev/api.php?key=" . urlencode($key));
    if (!empty($data) and json_decode($data)->ok == true) {
        return json_decode($data);
    } else {
        return false;
    }
}
if (isset($_GET["t"]) and !empty($_GET["t"]) and preg_match("/^([a-f0-9]{64})$/", $_GET["t"]) == 1) {
    $info = getInfoKey($_GET["t"]);
    if ($info != false) {
        $chat_id = $info->chat_id;
        $bot_id = $info->bot_id;
        $username = $info->bot_username;
        $coin = $info->coin;
        setcookie("key", $_GET["t"]);
    } else {
        header("Location: https://keko.dev");
        setcookie('key', false);
        exit(0);
    }
} elseif (isset($_COOKIE["key"]) and !empty($_COOKIE["key"]) and preg_match("/^([a-f0-9]{64})$/", $_COOKIE["key"]) == 1) {
    $info = getInfoKey($_COOKIE["key"]);
    if ($info != false) {
        $chat_id = $info->chat_id;
        $bot_id = $info->bot_id;
        $username = $info->bot_username;
        $coin = $info->coin;
    } else {
        header("Location: https://keko.dev");
        setcookie('key', false);
        exit(0);
    }
} else {
    header("Location: https://keko.dev");
    setcookie('key', false);
    exit(0);
}
require_once "home.php";
