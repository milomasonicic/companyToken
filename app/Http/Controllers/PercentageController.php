<?php

namespace App\Http\Controllers;

use App\Models\Percentage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PercentageController extends Controller
{
    //

    public function store(Request $request){

        $percentage = Percentage::create([
            "percentage"=> $request->percentage,
            "user_id"=> $request->user_id,
        ]);
    }


public function getHigestPercentage() 
{

    $cacheKey = 'top-owners';

    $topPercentages = Cache::remember($cacheKey, 800, function(){

        $subQuery = Percentage::select('percentages.*')
            ->whereIn('id', function($query){ 
                $query->selectRaw('MAX(id)')
                ->from('percentages')
                ->groupBy('user_id');
            });

        return Percentage::fromSub($subQuery, 'recent_percentages')
            ->orderByDesc('percentage')
            ->limit(3)
            ->with('user')
            ->get();    
    });

    return response()->json($topPercentages);
}
}

/*




*/
