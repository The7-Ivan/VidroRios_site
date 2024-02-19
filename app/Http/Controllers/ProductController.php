<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ProductController extends Controller
{
    public function getAllProducts()
    {
        $productsData = Product::with('images', 'categories')->get();
        
        $products = $productsData->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'images' => $product->images->toArray(),
                'categories' => $product->categories->toArray(),
            ];
        });

        return response()->json($products);
    }
}
