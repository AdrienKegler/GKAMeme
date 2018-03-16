<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TagRepository")
 */
class Tag
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=100, name="Tag_name")
     */
    private $name;

    /**
     * @ORM\Column(type="integer", name="Tag_likes")
     */
    private $likes = 0;

    /**
     * @ORM\Column(type="string", length=100, nullable=TRUE,  name="Tag_dscrp")
     */
    private $dscrp;

    /** Ci-dessous : liens extérieurs */

    /**
     * Many Tags have Many Files.
     * @ORM\ManyToMany(targetEntity="File", inversedBy="tags")
     * @ORM\JoinTable(name="Tags_Files")
     */
    private $files;

    /**
     * Many Tags have Many Tags.
     * @ORM\ManyToMany(targetEntity="Tag", mappedBy="myFriends")
     */
    private $tagsRelatedToMe;

    /**
     * Many Tags have many Tags.
     * @ORM\ManyToMany(targetEntity="Tag", inversedBy="friendsWithMe")
     * @ORM\JoinTable(name="friends",
     *      joinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="friend_user_id", referencedColumnName="id")}
     *      )
     */
    private $myRelatedTags;



    public function __construct() {
        $this->files = new \Doctrine\Common\Collections\ArrayCollection();
        $this->tagsRelatedToMe = new \Doctrine\Common\Collections\ArrayCollection();
        $this->myRelatedTags = new \Doctrine\Common\Collections\ArrayCollection();
    }
}
