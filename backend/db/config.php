  <?php
  session_start();
  $user = "root";
  $password = "";
  $dbname = "dental_clinic";
  $server = 'localhost';
  try{
    $conn = new PDO("mysql:host=$server; dbname=$dbname", $user, $password);
  }catch(PDOException $e){
    echo "Error:" .$e->getMessage();
  }
  ?>