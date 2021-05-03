<?php



class Dashboard extends Controller
{

 /**
   * 
   * The default controller method 
   * 
   * @return void
   * */ 

   public function index()
   {
 
     $user =  $this->model('User');  
     $user->name = "test";
     return $this->view('dashboard/index', $user);
   }
}

