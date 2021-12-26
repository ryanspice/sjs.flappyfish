
<?php 
$server = mysql_connect("localhost","rspice","yahoo123") or die("ERROR - Could not connect to mySQL Server"); 
mysql_select_db("rspice_snow") or die("ERROR - Could not select database");
$result = mysql_query("INSERT INTO  `rspice_snow`.`flappy` (`id` ,`name` ,`score`) VALUES ( NULL ,  '".$_GET['name']."',  '".$_GET['score']."' );");
echo $result;
mysql_close($server);
?>