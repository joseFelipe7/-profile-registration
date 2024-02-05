-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_person` VARCHAR(10) NOT NULL,
    `accept_terms` TINYINT NOT NULL,
    `name` VARCHAR(120) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `document_number` VARCHAR(14) NOT NULL,
    `cpf_responsible` VARCHAR(11) NOT NULL,
    `phone` VARCHAR(11) NULL,
    `cellphone` VARCHAR(11) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Profile_document_number_key`(`document_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `id` VARCHAR(191) NOT NULL,
    `id_profile` INTEGER NOT NULL,
    `cep` VARCHAR(8) NOT NULL,
    `street` VARCHAR(120) NOT NULL,
    `number` VARCHAR(8) NOT NULL,
    `complement` VARCHAR(80) NULL,
    `state` VARCHAR(60) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `neighborhood` VARCHAR(80) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_id_profile_fkey` FOREIGN KEY (`id_profile`) REFERENCES `Profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
