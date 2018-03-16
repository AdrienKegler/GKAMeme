<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180316211622 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE Users (status_id INT DEFAULT NULL, User_id INT AUTO_INCREMENT NOT NULL, User_mail VARCHAR(100) NOT NULL, User_password VARCHAR(100) NOT NULL, User_name VARCHAR(100) NOT NULL, User_firstname VARCHAR(100) NOT NULL, User_birthday DATE NOT NULL, User_subscription_birthday DATE NOT NULL, UNIQUE INDEX UNIQ_D5428AEDA9566222 (User_mail), INDEX IDX_D5428AED6BF700BD (status_id), PRIMARY KEY(User_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE Users ADD CONSTRAINT FK_D5428AED6BF700BD FOREIGN KEY (status_id) REFERENCES user_status (id)');
        $this->addSql('DROP TABLE groups');
        $this->addSql('ALTER TABLE file ADD CONSTRAINT FK_8C9F361016678C77 FOREIGN KEY (uploader_id) REFERENCES Users (id)');
        $this->addSql('ALTER TABLE tags_files ADD CONSTRAINT FK_E3CD9AD5BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tags_files ADD CONSTRAINT FK_E3CD9AD593CB796C FOREIGN KEY (file_id) REFERENCES file (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE friends ADD CONSTRAINT FK_21EE7069A76ED395 FOREIGN KEY (user_id) REFERENCES tag (id)');
        $this->addSql('ALTER TABLE friends ADD CONSTRAINT FK_21EE706993D1119E FOREIGN KEY (friend_user_id) REFERENCES tag (id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE file DROP FOREIGN KEY FK_8C9F361016678C77');
        $this->addSql('CREATE TABLE groups (status_id INT DEFAULT NULL, User_id INT AUTO_INCREMENT NOT NULL, User_mail VARCHAR(100) NOT NULL COLLATE utf8_unicode_ci, User_password VARCHAR(100) NOT NULL COLLATE utf8_unicode_ci, User_name VARCHAR(100) NOT NULL COLLATE utf8_unicode_ci, User_firstname VARCHAR(100) NOT NULL COLLATE utf8_unicode_ci, User_birthday DATE NOT NULL, User_subscription_birthday DATE NOT NULL, UNIQUE INDEX UNIQ_F06D3970A9566222 (User_mail), INDEX IDX_F06D39706BF700BD (status_id), PRIMARY KEY(User_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('DROP TABLE Users');
        $this->addSql('ALTER TABLE friends DROP FOREIGN KEY FK_21EE7069A76ED395');
        $this->addSql('ALTER TABLE friends DROP FOREIGN KEY FK_21EE706993D1119E');
        $this->addSql('ALTER TABLE Tags_Files DROP FOREIGN KEY FK_E3CD9AD5BAD26311');
        $this->addSql('ALTER TABLE Tags_Files DROP FOREIGN KEY FK_E3CD9AD593CB796C');
    }
}
