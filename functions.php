<?php

function dd($value)
{
  echo "<pre>";
  var_dump($value);
  echo "</pre>";

  die();
}

function urlIs($value)
{
  return $_SERVER['REQUEST_URI'] === $value;
}

function registration($data, $db)
{
  $username = strtolower($data['username']);
  $password = $data['password'];
  $confirm_password = $data['confirm_password'];
  $typeUser = $data['type'];

  if ($password !== $confirm_password) {
    return "Password doesn't match";
  }

  $existingUser = $db->connect("SELECT * FROM users WHERE username = '$username'")->fetchAll(PDO::FETCH_COLUMN);
  if (count($existingUser) > 0) {
    return "Username already exists";
  }

  if ($typeUser === "student") {
    $existingStudent = $db->connect("SELECT nim FROM students WHERE nim = $username")->fetchAll(PDO::FETCH_COLUMN);
    if (count($existingStudent) < 1) {
      return "Your username is not found in Student data as NIM";
    }
  } else if ($typeUser === "lecturer") {
    $existingLecturer = $db->connect("SELECT nidn FROM lecturers WHERE nidn = $username")->fetchAll(PDO::FETCH_COLUMN);
    if (count($existingLecturer) < 1) {
      return "Your username is not found in Lecturer data as NIDN";
    }
  }

  $password = password_hash($password, PASSWORD_DEFAULT);

  $db->connect("INSERT INTO users (username, password, type_user) VALUES ('$username', '$password', '$typeUser');");

  return "Registration success";
}

function login($data, $db)
{
  $username = strtolower($data['username']);
  $password = $data['password'];

  $existingUser = $db->connect("SELECT * FROM users WHERE username = '$username'")->fetch(PDO::FETCH_ASSOC);
  if ($existingUser && password_verify($password, $existingUser['password'])) {
    $typeUser = $db->connect("SELECT type_user FROM users WHERE username = '$username'")->fetchColumn();

    if ($typeUser === "student") {
      $nameUser = $db->connect("SELECT name_std FROM students WHERE nim = $username")->fetchColumn();
    } else if ($typeUser === "lecturer") {
      $nameUser = $db->connect("SELECT name_lct FROM lecturers WHERE nidn = $username")->fetchColumn();
    }
    $_SESSION['login'] = true;
    $_SESSION['username'] = "$username";
    $_SESSION['nameUser'] = "$nameUser";
    $_SESSION['typeUser'] = "$typeUser";
    return "You are logged in as $username";
  } else {
    return "Username or Password is wrong";
  }
}
