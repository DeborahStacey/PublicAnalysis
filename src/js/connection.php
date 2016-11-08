<?php
    // header('Content-Type: application/json');


    // $conn_string = "Data Source=welcat-working.cz3evk2oqbiz.us-west-2.rds.amazonaws.com;Initial Catalog=WelcatWorking; User ID=wellcatreaders2;Password=thatbackendtho;Provider=SQLOLEDB";
    // $dbconn4 = pg_connect($conn_string);

    // $aResult = array();

    // $aResult['text'] = 'Not found function!';

    // // if( !isset($_POST['functionname']) ) { $aResult['error'] = 'No function name!'; }

    // //if( !isset($_POST['arguments']) ) { $aResult['error'] = 'No function arguments!'; }

    // // if( !isset($aResult['error']) ) {

    // //}

    // echo json_encode($aResult);

    if ($_GET['dataBase']) :
        $conn_string = "Data Source=welcat-working.cz3evk2oqbiz.us-west-2.rds.amazonaws.com;Initial Catalog=WelcatWorking; User ID=wellcatreaders2;Password=thatbackendtho;Provider=SQLOLEDB";
        echo ($conn_string);
    endif;


?>