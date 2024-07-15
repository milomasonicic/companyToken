<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Carbon\Carbon;

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

    public function getRecentTransactions(){

        $now = Carbon::now();

        $yesterday = $now->subDay();
       
        $transactions = Transaction::where('created_at', '>=', 
        $yesterday)->with('user')
        ->orderBy('created_at', 'desc')
        ->get(); 

        $formattedTransactions = $transactions->map(function ($transaction) {
            $createdAt = Carbon::parse($transaction->created_at);

            // Primeri formata: "pre nekoliko minuta", "pre sat vremena", "10:30"
            $formattedDate = $createdAt->format('H:i');

            // Dodavanje formatiranog polja u objekat transakcije
            $transaction->formatted_created_at = $formattedDate;

            return $transaction;
        });

        return response()->json($formattedTransactions);
    }
}
