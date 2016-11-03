<?php
    header('Content-Type: application/json');


    $aResult = array();

    if( !isset($_POST['functionname']) ) { $aResult['error'] = 'No function name!'; }

    //if( !isset($_POST['arguments']) ) { $aResult['error'] = 'No function arguments!'; }

    if( !isset($aResult['error']) ) {

      switch($_POST['functionname']) {
        case 'test':
          $conn_string = "host=sheep port=5432 dbname=test user=lamb password=bar";
          //$dbconn4 = pg_connect($conn_string);
          $aResult['error'] = 'Not found function '.$_POST['functionname'].'!';
        break;

        default:
          $aResult['error'] = 'Not found function '.$_POST['functionname'].'!';
        break;
      }

    }

    echo json_encode($aResult);

?>