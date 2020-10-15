<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    //

    protected $fillable = ['first_name', 'last_name', 'birth_date', 'phone_number'];

    public function appointments()
    {
        return $this->hasMany('App\Appointment');
    }
}
