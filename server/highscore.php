
var s = [
<?php 
$server = mysql_connect("localhost","rspice","yahoo123") or die("ERROR - Could not connect to mySQL Server"); 
mysql_select_db("rspice_snow") or die("ERROR - Could not select database");
$result = mysql_query("SELECT * FROM  `flappy` ORDER BY  `score` DESC LIMIT 0 , 3");
		$count = mysql_num_rows($result);
		if ($count)
			{
			$i = 0;
				while($row = mysql_fetch_array($result))
					{
					echo "{id:	".$row['id'].",";
					echo "name:'".$row['name']."',";
					echo "score:".$row['score']."},";
					$i++;
					}
			}
mysql_close($server);
?>
];
App.scores = s;