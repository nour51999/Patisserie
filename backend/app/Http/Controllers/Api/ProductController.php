<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product; // ✅ Import du modèle
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(Product::all());
    }

    public function store(Request $request)
    {
        
        $validated = $request->validate([
            'nom' => 'required|string',
            'prix' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpg,jpeg,png'
        ]);
    
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $validated['image'] = basename($path);
        }
    
        $produit = Product::create($validated);
    
        return response()->json([
            'message' => 'Produit enregistré avec succès',
            'produit' => $produit
        ], 201);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id); // ✅ on cherche le produit
        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id); // ✅ on le charge
        $product->update($request->all());
        return response()->json($product);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id); // ✅ on le charge
        $product->delete();
        return response()->json(null, 204);
    }
}
