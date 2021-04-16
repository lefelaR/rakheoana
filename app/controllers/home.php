<?php


class Home extends Controller{

  /**
   * 
   * The default controller method 
   * 
   * @return void
   * */ 

    public function index($name = '')
    {
       //model stuff here
      // $user =  $this->model('User');  
      //   $user->name = $name;
       
      return $this->view('home/index', $name);
    }
}
