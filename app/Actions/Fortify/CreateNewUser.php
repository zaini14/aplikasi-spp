<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'nama_petugas' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string','max:255'],
            'password' => $this->passwordRules(),
            'level' => ['required'],
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['required', 'accepted'] : '',
        ])->validate();

        return User::create([
            'nama_petugas' => $input['nama_petugas'],
            'username' => $input['username'],
            'password' => Hash::make($input['password']),
            'password' => $input['level']
        ]);
    }
}
