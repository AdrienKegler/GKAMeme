<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UsersRepository")
 * @ORM\Table(name="Users")
 */
class Users
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer", name="User_id")
     */
    private $id;


    /**
     * @ORM\Column(type="string", unique=TRUE, length=100, name="User_mail")
     */
    private $mail;


    /**
     * @ORM\Column(type="string", length=100, name="User_password")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=100, name="User_name")
     */
    private $name;


    /**
     * @ORM\Column(type="string", length=100, name="User_firstname")
     */
    private $firstname;


    /**
     * @ORM\Column(type="date", name="User_birthday")
     */
    private $birthday;


    /**
     * @ORM\Column(type="date", name="User_subscription_birthday")
     */
    private $subscriptionBirthday;

    /**
     * @ORM\ManyToOne(targetEntity="UserStatus")
     */
    private $status;

    /**
     * One User has Many Files.
     * @ORM\OneToMany(targetEntity="File", mappedBy="uploader")
     */
    private $files;


    public function __construct() {
        $this->files = new ArrayCollection();
    }

}
