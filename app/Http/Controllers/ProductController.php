<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(){
        return Inertia::render("products/index");
    }

    public function create(){
        return Inertia::render("products/create");
    }

    public function store(Request $request){
        // dd($request);
        $request->validate([
            "name"=> "required|string|max:255",
            "price"=> "required|numeric",
            "description"=> "nullable|string",
        ]);

        Products::create($request->all());
        return redirect()->route('products.index');

        
    }
    

}
