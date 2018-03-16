<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserStatusRepository")
 */
class UserStatus
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer", name="userStatus_id")
     */
    private $id;

    /**
     * @ORM\Column(type="string", unique=TRUE, length=100, name="userStatus_name")
     */
    private $name;

}
