<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // ---- Get /api/categories
    public function getCategories(){
        $categories = Category::all();
        return $categories;
        // return [" message" => " Getting list of categories"];
    }
    // ---- Post /api/categories
    public function createCategory(Request $request):array {
        $category = new Category();
        $category->name = $request->get('name');
        
        $category->save();
        return ["message" => "success"];
        // return [" message" => " Creating 1 new category"];
    }
    // ---- Get /api/categories/{categoryId}
    public function getCategory($categoryId): Category|null{
        $categories = Category::find($categoryId)
        return $categories;
        // return [" message" => "Getting 1 category base on given categoryId"];
    }
    // ---- Patch /api/categories/{categoryId}
    public function updateCategory(Request $request, $categoryId):array {
        $category = Category::find ($categoryId);
        if (!$categroy){
            return [" message" => "Category not found"];
        }
        $category->update($request->all());
        return [" message" => "success"];
    }

    // ---- Delete /api/categories/{categoryId}
    public function deleteCategory($categoryId):array{
        $category = Category::find ($categoryId);
        if (!$categroy){
            return [" message" => "Category not found"];
        }
        $category->delete();
        return [" message" => "success"];
    }

}
