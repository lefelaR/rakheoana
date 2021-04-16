<?php

class Authentication extends Controller
{



    public function register()
    {

        echo "Authentication/register";
    }


    public function login()
    {

        return $this->view('authentication/login');
    }


    public function forgotpassword()
    {

        
    }

    public function resetpassword()
    {

        
    }


}