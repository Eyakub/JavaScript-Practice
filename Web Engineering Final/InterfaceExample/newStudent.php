<?php
/**
 * User: MD. Eyakub Sorkar
 * Date: 4/20/2018
 * Time: 11:47 AM
 */
include "student.php";

class newStudent implements student
{
    //private $var = array();
    public $name;
    public $age;

    public function setName($name)
    {
        $this->name = $name;
    }
    public function setAge($age)
    {
        $this->age = $age;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getAge()
    {
        return $this->age;
    }
}

