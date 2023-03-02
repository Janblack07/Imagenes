<?php

namespace App\Http\Controllers;

use App\Models\Imagen;
use Illuminate\Http\Request;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class ImagenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $imagen = Imagen::all();
        return response()->json(['Imagenes'=>$imagen]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $file = request()->file('imagenP');
        $obj = Cloudinary::upload($file->getRealPath(),['folder'=>'imagenesPractica']);
        $imagen_id = $obj->getPublicId();
        $url = $obj->getSecurePath();

        $imagen = Imagen::create([
            'nombreI'=>$request->nombreI,
            'url_imagen'=>$url,
            'imagen_id'=>$imagen_id,
            'imagen_google'=>$request->imagen_google,
            'cantidad'=>$request->cantidad
        ]);
        return response()->json(['messages'=>'Se creo una imagen.']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Imagen  $imagen
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $imagen = Imagen::find($id);
        return response()->json(['Imagenes'=>$imagen]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Imagen  $imagen
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        //
        $imagenes = Imagen::find($id);
        $url = $imagenes->url_imagen;
        $imagen_id = $imagenes->imagen_id;
        if($request->hasFile('imagenP')){
            Cloudinary::destroy($imagen_id);
            $file = request()->file('imagenP');
            $obj = Cloudinary::upload($file->getRealPath(),['folder'=>'imagenesPractica']);
            $url = $obj->getSecurePath();
            $public_id = $obj->getPublicId();
        }
        $imagenes->update([
            'nombreI'=>$request->nombreI,
            'url_imagen'=>$url,
            'imagen_id'=>$imagen_id,
            'imagen_google'=>$request->imagen_google,
            'cantidad'=>$request->cantidad
        ]);
        return response()->json([
            'messages'=>"Se Actualizo correctamente"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Imagen  $imagen
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $imagen = Imagen::find($id);
        $imagen_id = $imagen->imagen_id;
        Cloudinary::destroy($imagen_id);
        Imagen::destroy($id);

        return response()->json([
            'messages'=>"Se elimino correctamente"
        ]);
    }
}
