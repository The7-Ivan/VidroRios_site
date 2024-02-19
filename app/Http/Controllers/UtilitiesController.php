<?php
// app/Http/Controllers/UtilitiesController.php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Log;


class UtilitiesController extends Controller
{

    public function getWimg()
    {
        // Define the path to the image file
        $imagePath = 'websiteImages/whatapp.png';

        // Get the full path to the image file
        $fullPath = public_path('images\websiteImages\whatapp.png');
        echo( $fullPath );

        // Check if the file exists
        if (Storage::exists($fullPath)) {
            // Read the file contents
            $file = Storage::get($fullPath);

            // Set the appropriate headers for the image
            $headers = [
                'Content-Type' => Storage::mimeType($fullPath),
                'Cache-Control' => 'public, max-age=604800, immutable', // Cache for 1 week (604800 seconds)
            ];

            // Return the image file as the HTTP response
            return Response::make($file, 200, $headers);
        } else {
            // Return a JSON response with error message if the file is not found
            return response()->json(['error' => 'File not found'], 404);
        }
    }


    public function postImage(Request $request)
    {
        $data = $request->all(); // Retrieve JSON data from the request

        // Check if the 'path' key exists in the JSON data
        if (isset($data['path'])) {
            $path = $data['path'];
            $fullPath = public_path('images\\' . $path);

            if (Storage::exists($fullPath)) {
                $file = Storage::get($fullPath);

                $headers = [
                    'Content-Type' => Storage::mimeType($fullPath),
                    'Cache-Control' => 'public, max-age=604800, immutable', // Cache for 1 week (604800 seconds)
                ];

                return Response::make($file, 200, $headers);
            } else {
                return response()->json(['error' => 'File not found'], 404);
            }
        } else {
            return response()->json(['error' => 'Path parameter missing'], 400);
        }
    }
}
