<?php


$context = new stdClass;
$siteroot = '/rakheoana/public/';


$context->root = explode('/' , $siteroot);

if(in_array("public", $context->root)){
    header('Location:'.$siteroot);
}else{
    $siteroot = $_SERVER['HTTP_HOST'].'/rakheoana/public/';
}
?>