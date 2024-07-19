<?php

namespace App\Http\Controllers;

use App\Models\Percentage;
use Illuminate\Http\Request;

class PercentageController extends Controller
{
    //

    public function store(Request $request){

        $percentage = Percentage::create([
            "percentage"=> $request->percentage,
            "user_id"=> $request->user_id,
        ]);
    }
}
