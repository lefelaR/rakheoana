<?php
// this is goingt to controll the communication between models and views
class Controller
{
// construct  function
    public function __construct()
    {
        
    }

    
    public function model($model)
    {
        require_once '../app/models/' . $model . '.php';
        return new $model();
    }

    public function view( $view, $data = []) 
    {
        require_once '../app/views/' . $view .  '.php';
        return $view;
    }

}