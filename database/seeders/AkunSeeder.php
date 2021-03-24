<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class AkunSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
        	'nama_petugas' => 'admin',
        	'username' => 'admin1',
        	'password' => bcrypt('admin'),
        	'level' => 'admin'
        ]);
    }
}
