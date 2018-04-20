<?php
/**
 * User: MD. Eyakub Sorkar
 * Date: 4/20/2018
 * Time: 12:41 PM
 */

include "newStudent.php";

//first student
$n = new newStudent;
$n->setName("Eyakub");
$n->setAge(23);

echo $n->getName(). ", ".$n->getAge().'<br>'.'<br>';

//second student
$m = new newStudent;
$m->setName("Sorkar");
$m->setAge(23);
echo $m->getName(). ", ".$m->getAge().'<br>'.'<br>';