<?php
$servername = "sql301.epizy.com";
$username = "epiz_33668131";
$password = "pXup7zlkxXd4ro";
$dbname = "epiz_33668131_web";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM users ";
$result = $conn->query($sql);
$row=$result->fetch_assoc();
echo json_encode($row);
$sql = "UPDATE users SET `count`=`count`+.5 where id=1";
$result = $conn->query($sql);
?>