<?php
require __DIR__ . '/vendor/autoload.php';

$config = require __DIR__ . '/common/config/main-local.php';
$dbConfig = $config['components']['db'];

$dsn = $dbConfig['dsn'];
$username = $dbConfig['username'];
$password = $dbConfig['password'];

try {
    $pdo = new PDO($dsn, $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
} catch (PDOException $e) {
    echo "DB connection failed: " . $e->getMessage() . "\n";
    exit(1);
}

$adminUser = 'admin';
$adminPass = 'admin123--';
$adminEmail = 'admin@labarchivistica.co';

$stmt = $pdo->prepare('SELECT id FROM user WHERE username = :u');
$stmt->execute([':u' => $adminUser]);
$existing = $stmt->fetch(PDO::FETCH_ASSOC);

if ($existing) {
    echo "Admin user already exists (id={$existing['id']}). Skipping.\n";
    exit(0);
}

$passwordHash = password_hash($adminPass, PASSWORD_BCRYPT);

$pdo->prepare('INSERT INTO user (username, auth_key, password_hash, email, status, created_at, updated_at, fechaVenceToken, accessToken, verification_token, idRol, idUserTipo, idGdTrdDependencia) VALUES (:u, :ak, :ph, :e, :s, :ca, :ua, :fvt, :at, :vt, :ir, :iut, :igd)')->execute([
    ':u' => $adminUser,
    ':ak' => bin2hex(random_bytes(16)),
    ':ph' => $passwordHash,
    ':e' => $adminEmail,
    ':s' => 10,
    ':ca' => time(),
    ':ua' => time(),
    ':fvt' => date('Y-m-d H:i:s', strtotime('+1 year')),
    ':at' => bin2hex(random_bytes(32)),
    ':vt' => bin2hex(random_bytes(32)),
    ':ir' => 1,
    ':iut' => 1,
    ':igd' => 1,
]);

$userId = $pdo->lastInsertId();

$pdo->prepare('INSERT INTO userDetalles (idUser, nombreUserDetalles, apellidoUserDetalles, documento, cargoUserDetalles, idTipoIdentificacion, creacionUserDetalles, estadoUserDetalles) VALUES (:id, :n, :a, :d, :c, :iti, :cu, :eu)')->execute([
    ':id' => $userId,
    ':n' => 'Administrador',
    ':a' => 'del Sistema',
    ':d' => '0000000000',
    ':c' => 'Administrador del Sistema',
    ':iti' => 1,
    ':cu' => time(),
    ':eu' => 10,
]);

echo "Admin user created successfully!\n";
echo "Username: admin\n";
echo "Password: admin123--\n";
