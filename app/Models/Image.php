<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = 'images';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'img_path',
        'alt',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_relations', 'image_id', 'product_id');
    }
}
