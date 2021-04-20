<?php

class Authentication extends Controller
{



    public function register()
    {

        echo "Authentication/register";
    }


    public function login()
    {

        return $this->view('authentication/login',null);
    }


    public function forgotpassword()
    {

        
    }

    public function resetpassword()
    {

        
    }
    public function index()
    {

        return $this->view('authentication/index',null);
    }

}