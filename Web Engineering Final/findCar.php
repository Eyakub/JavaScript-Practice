<?php

    $cars = array("JEEP", "Chrysler", "Datsun", "Roewe", "Lada", "BMW", "Mini", "Lagonda");
    //echo array_search("BMW", $cars); return the index number if found

    $car_search = "Datsun";

    for($i = 0; $i < count($cars); $i++){
        if($cars[$i] == $car_search){
            echo $cars[$i]." found in our car list.";
        }else{
            echo $car_search." Not found in our car list";
        }
    }