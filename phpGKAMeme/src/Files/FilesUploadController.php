<?php

namespace App\Files;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class FilesUploadController
{
    public function sampleAnswer()
    {
        header('Access-Control-Allow-Origin');
        return new Response(var_dump($_FILES));
    }
}

