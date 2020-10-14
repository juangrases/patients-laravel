<?php

use App\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/patient', function (Request $request) {
    return App\Patient::all();
});

Route::get('/patient/{id}', function (Request $request, $id) {
    $includeAppointments = $request->query('includeAppointments');
    if($includeAppointments === 'true'){
        return App\Patient::with('appointments')->find($id);
    }else{
        return App\Patient::find($id);
    }
});

Route::get('/patient/{id}/appointments', function (Request $request, $id) {
    $patient = App\Patient::find($id);
    return $patient
        ->appointments()
        ->get();
});

//Route::get('/patient2/{id}', function (Request $request, $id) {
//    return DB::table('patients')
//        ->join('appointments', 'patients.id', '=', 'appointments.patient_id')
//        ->select('patients.*', 'appointments.*')
//        ->get();
//});

Route::post('/patient', function (Request $request) {
    $patient = new Patient;
    $patient->name = $request->input('name');
    $patient->save();
});
