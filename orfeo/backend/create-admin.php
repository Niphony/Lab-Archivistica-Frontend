<?php
require __DIR__ . '/vendor/autoload.php';

$config = require __DIR__ . '/common/config/main-local.php';
$db = new $config['components']['db']['class']($config['components']['db']);

$username = 'admin';
$password = 'admin123--';
$email = 'admin@labarchivistica.co';

$existing = $db->createCommand(
    'SELECT id FROM user WHERE username = :u',
    [':u' => $username]
)->queryOne();

if ($existing) {
    echo "Admin user already exists (id={$existing['id']}). Skipping.\n";
    exit(0);
}

$passwordHash = password_hash($password, PASSWORD_BCRYPT);

$db->createCommand()->insert('user', [
    'username' => $username,
    'auth_key' => bin2hex(random_bytes(32)),
    'password_hash' => $passwordHash,
    'password_reset_token' => null,
    'email' => $email,
    'status' => 10,
    'created_at' => time(),
    'updated_at' => time(),
    'verification_token' => bin2hex(random_bytes(32)),
    'idRol' => 1,
    'idUserTipo' => 1,
    'idTipoIdentificacion' => 1,
])->execute();

$userId = $db->getLastInsertID();

$db->createCommand()->insert('userDetalles', [
    'idUser' => $userId,
    'nombres' => 'Administrador',
    'apellidos' => 'del Sistema',
    'documento' => '0000000000',
    'idTipoPersona' => 1,
    'telefono' => '0000000000',
    'direccion' => 'Oficina Principal',
])->execute();

echo "Admin user created successfully!\n";
echo "Username: admin\n";
echo "Password: admin123--\n";
