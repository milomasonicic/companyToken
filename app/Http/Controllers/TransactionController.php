<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    //
    public function store(Request $request){

        $transaction = Transaction::create([
            "walletAdress"=> $request->walletAdress,
            "amount"=> $request->amount,
            "user_id"=> $request->user_id,
        ]);
    }
}
