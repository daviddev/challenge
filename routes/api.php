<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('person/{name}', function ($name) {
    $client = app()->offsetGet('guzzle');
    $res = $client->get('https://api.github.com/users/' . $name);
    $body = $res->getBody();
    return response()->json(['person' => json_decode($body)]);
});

