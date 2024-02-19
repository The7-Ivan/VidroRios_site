<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'description',
    ];

    public function images()
    {
        return $this->belongsToMany(Image::class, 'product_relations', 'product_id', 'image_id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_relations', 'product_id', 'category_id');
    }
}
