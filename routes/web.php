<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::any( '/{any}', function () {
    return view('layouts.patients-app');
})->where('any', '.*');

//Auth::routes();
//
//Route::get('/home', 'HomeController@index')->name('home');
