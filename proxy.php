<?php


$context = new stdClass;
$siteroot = '/mvc/public/';


$context->root = explode('/' , $siteroot);

if(in_array("public", $context->root)){
    header('Location:'.$siteroot);
}else{
    $siteroot = $_SERVER['HTTP_HOST'].'/mvc/public/';
}
?>