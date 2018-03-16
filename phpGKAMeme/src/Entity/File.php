<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FileRepository")
 */
class File
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer", name="File_id")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, name="File_name")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=512, name="File_path")
     */
    private $path;

    /**
     * @ORM\Column(type="integer", name="File_weight")
     */
    private $weight;

    /**
     * @ORM\Column(type="integer", name="File_sizeX")
     */
    private $sizeX;
    /**
     * @ORM\Column(type="integer", name="File_sizeY")
     */
    private $sizeY;

    /**
     * @ORM\Column(type="date", name="File_uploadDate")
     */
    private $uploadDate;

    /**
     * @ORM\Column(type="integer", name="File_seen")
     */
    private $seen = 0;
    /**
     * @ORM\Column(type="integer", name="File_likes")
     */
    private $likes = 0;
    /**
     * @ORM\Column(type="integer", name="File_downloaded")
     */
    private $downloaded = 0;

    /**
     * @ORM\Column(type="boolean", name="File_isPrivate")
     */
    private $isPrivate = FALSE;

    /**
     * Many Groups have Many Users.
     * @ORM\ManyToMany(targetEntity="Tag", mappedBy="files")
     */
    private $tags;

    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="Users", inversedBy="files")
     * @ORM\JoinColumn(name="uploader_id", referencedColumnName="id")
     */
    private $uploader;

    public function __construct() {
        $this->tags = new \Doctrine\Common\Collections\ArrayCollection();
    }
}
