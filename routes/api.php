<?php

use App\Appointment;
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
        return App\Patient::with(array('appointments' => function($query) {
            $query->orderBy('start_date', 'DESC');
        }))->find($id);
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
    $patient->first_name = $request->input('first_name');
    $patient->last_name = $request->input('last_name');
    $patient->phone_number = $request->input('phone_number');
    $patient->birth_date = $request->input('birth_date');
    $patient->save();
});

Route::post('/patient/{id}/appointment', function (Request $request, $id) {
    $appointment = new Appointment();
    $appointment->patient_id = $id;
    $appointment->start_date = $request->input('start_date');
    $appointment->type = $request->input('type');
    $appointment->save();
});
