<?php

class Authentication extends Controller
{

/**
   * 
   * The default controller method 
   * 
   * @return void
   * */ 

    public function register()
    {
        echo "Authentication/register";
    }


    public function login()
    {
$test = 'test';
$another = $test;
        return $this->view('authentication/login');
    }


    public function postlogin($data)
    {
         echo 123; die;
        $user = new User();
        $profile = user::Login($data);

        return $this->redirect('home/index');
    }
   

    public function forgotpassword()
    {
        
    }

    public function resetpassword()
    {
        
    }

    
}