<?php

class Database
{
  public $pdo;

  public function __construct($config, $username = "root", $password = "root", $fetch = [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC])
  {
    try {
      $this->pdo = new PDO("mysql:" . http_build_query($config, "", ";"), $username, $password, $fetch);
      $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $exception) {
      echo "Connection failed: " . $exception->getMessage();
    }
  }

  public function connect($query)
  {
    $statement = $this->pdo->prepare($query);
    $statement->execute();

    return $statement;
  }
}
