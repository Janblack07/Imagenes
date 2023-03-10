<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'imagens';
    protected $fillable =['nombreI','url_imagen','imagen_id','imagen_google','cantidad'];
}
