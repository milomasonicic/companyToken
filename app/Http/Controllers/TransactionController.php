<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
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

    public function getRecentTransactions(){

        $now = Carbon::now();

        $yesterday = (clone $now)->subDay();
       
        $transactions = Transaction::where('created_at', '>', 
        $yesterday)->with('user')
        ->orderBy('created_at', 'desc')
        ->paginate(10); 

        $formattedTransactions = $transactions->map(function ($transaction) {
            $createdAt = Carbon::parse($transaction->created_at);

            $formattedDate = $createdAt->format('H:i');

            $transaction->formatted_created_at = $formattedDate;

            return $transaction;
        });

        return response()->json($formattedTransactions);
    }

    public function userTransactions($id) {

        $transactions = Transaction::where('user_id', $id)->get();
        $formattedTransactions = $transactions->map(function ($transaction) {
            $createdAt = Carbon::parse($transaction->created_at);

            $formattedDate = $createdAt->format('Y-m-d');

            $transaction->formatted_created_at = $formattedDate;

            return $transaction;
        });
        return response()->json($formattedTransactions);
    }

    //mintPage

    public function mintPage(){

        return Inertia::render('Mint');
    } 
}
