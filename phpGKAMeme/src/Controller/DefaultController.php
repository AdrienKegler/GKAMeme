<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class DefaultController
{
    public function index()
    {
        return new Response(
            "<h1>HELLO ZA WARUDO !</h1>"
//            json_encode(array(  'object' => "this is the object",
//                                "item2" => "this is Item2"))
        );
    }
}
