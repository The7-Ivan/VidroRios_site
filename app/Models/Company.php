<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'company';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'contacts',
        'phone',
        'whatsapp',
        'email',
        'address',
        'working_hours',
        'front_image_path',
        'logo_image_path',
        'section',
    ];

}
