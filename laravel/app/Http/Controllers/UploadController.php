<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class UploadController extends Controller
{
    public function upload(Request $request)
        {
        // Validate the request
        $request->validate([
        'document' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);
        //First
        // // Store the file
        // $path = $request->file('document')->store('uploads');
        // Return a response
        // return response()->json(['path' => $path], 200);


        //second
        // Get the uploaded file
        $image = $request->file('document');

        // Generate a unique file name
        $fileName = uniqid() . '.' . $image->getClientOriginalExtension();

        // Store the file in MinIO under 'uploads' directory
        $path = Storage::disk('minio')->putFileAs('uploads', $image, $fileName);

        // Return a JSON response with the public URL
        return response()->json([
            'image_url' => Storage::disk('minio')->url($path)
        ]);
    }

}
