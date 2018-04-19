<?php
$cookie_name = "username";
$cookie_value = "Eyakub Sorkar";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); //86400 = 1 day

//reload twice two see the result that cookie is set or not


// set the expiration date of cookie for whole month
//setcookie("user", "", time() - 86400 * 30);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Cookie</title>
</head>
<body>
<?php
if (!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Cookie value is: " . $_COOKIE[$cookie_name];
}
?>


Deleting Cookie
===============
<?php
unset($_COOKIE["yourcookie"]);
/*Or*/
setcookie("yourcookie","yourvalue",time()-1);
/*it expired so it's deleted*/
?>

</body>
</html>