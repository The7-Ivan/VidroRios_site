<?php
namespace App\Http\Controllers;

use App\Models\Company;

class CompanyController extends Controller
{
    public function getAllCompanies()
    {
        $companies = Company::all();
        return response()->json($companies);
    }
}

