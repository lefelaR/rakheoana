
<?php
global $context;
$gps = $_SERVER["HTTP_REFERER"];
$gpsarray = explode('/', $gps);

if(count($gpsarray) > 5 || count($gpsarray) < 2 ){

if (in_array("authentication", $gpsarray))
{
        include 'includes/loginheader.php';

    }

     if(in_array("dashboard", $gpsarray)){

        // include 'includes/backendheader.php';
    }
}else{
    include 'includes/frontendheader.php';
}
?>
