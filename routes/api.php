<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PriceController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\PercentageController;
use App\Http\Controllers\TransactionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

//storeTransaction
Route::post('/storeTransaction', [TransactionController::class, "store"])->name("transaction.store");

//getTransactions-no older than 24 hours
Route::get('/recent', [TransactionController::class, "getRecentTransactions"]);

//userTranasaction
Route::get('/your/{id}', [TransactionController::class, "userTransactions"]);

Route::get( '/users', [ProfileController::class, "all"]);

//changing token value
Route::post( '/newprice', [PriceController::class, "store"]);

//send percentage
Route::post( '/percentage', [PercentageController::class, "store"]);

//topOwnes
Route::get('/top-owners', [PercentageController::class, 'getHigestPercentage']);

//number of transactions
Route::get('/transactionnumber', [TransactionController::class, 'totalTransactions']);