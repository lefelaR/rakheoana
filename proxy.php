<?php


$context = new stdClass;
$context->siteroot = '/mvc/public';


function url($string)
{
    global $context;
    if (strpos($string, '.')) {
        $string = '/' . $string;
    }
    echo $context->siteroot. $string;
}






$context = new stdClass;

$context->root = explode('/' , $siteroot);

if(in_array("public", $context->root)){
    header('Location:'.$siteroot);
}else{
    $siteroot = $_SERVER['HTTP_HOST'].'/mvc/public/';
}



?>