<?php
global $context;
$context->siteroot = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; 
$gpsarray = explode('/' ,$context->siteroot);
    if(count($gpsarray) > 4 || count($gpsarray) < 2 )
    {
        if (in_array("authentication", $gpsarray))
        {
            include 'includes/frontendfooter.php';
        }else{
            include 'includes/backendfooter.php';
        }
    }

?>