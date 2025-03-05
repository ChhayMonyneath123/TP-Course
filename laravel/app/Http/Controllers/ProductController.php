<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    // ---- Get /api/products
    public function getProducts(): Collection{
        $products = Product::all();
        return $products;
        // return [" message" => " Getting list of products"];
    }
    // ---- Post /api/products
    public function createProducts(Request $request):array{
        $product = new Product();
        $product->name = $request->get('name');
        $product->price = $request->get('price');
        $product->category_id = $request->get('category_id');
        $product->active = $request->get('active');

        $product->save();
        return ["message" => "success"]

        // return [" message" => " Creating 1 new product"];
    }
    // ---- Get /api/products/{productId}
    public function getProduct($productId): Product|null{
        $products = Product::find($productId);
        return $products;
        // return [" message" => "Getting 1 product base on given productId"];
    }
    // ---- Patch /api/products/{productId}
    public function updateProduct(Request $request, $productId): array
    {
        $product = Product::find($productId);
        if (!$product) {
            return ["message" => "Product not found"];
        }

        $product->update($request->all());

        return ["message" => "success"];
    }

    // ---- Delete /api/products/{productId}
    public function deleteProduct($productId): array
    {
        $product = Product::find($productId);
        if (!$product) {
            return ["message" => "Product not found"];
        }

        $product->delete();

        return ["message" => "success"];
    }

    // ---- Get /api/categories/{categoryId}/products
    public function getProductsByCategory($categoryId): Collection
    {
        return Product::where('category_id', $categoryId)->get();
    }
}