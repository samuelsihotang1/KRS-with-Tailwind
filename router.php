<?php
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
  '/' => 'controllers/index.php',
  '/krs' => 'controllers/krs.php',
  '/contact' => 'controllers/contact.php',
  '/login' => 'controllers/login.php',
  '/register' => 'controllers/register.php',
];

function routeToController($uri, $routes)
{
  if (array_key_exists($uri, $routes)) {
    require $routes[$uri];
  } else {
    abort();
  }
}

function abort()
{
  http_response_code(404);

  require "controllers/404.php";

  die();
}

routeToController($uri, $routes);