<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProducts()
    {
        $client = new Client();

        $responseOfApi = $client->get("localhost:3000/products");
        $response = json_decode($responseOfApi->getBody());

        $response = array_map(function ($element) {
            return [
                'nameOfCar' => "{$element->name} {$element->description}",
                'price' => $element->price,
            ];
        }, $response);

        return response()->json(
            [
                'msg' => 'From ProductController',
                'response_localhost_3000' => $response,
            ]
            );
    }
}
