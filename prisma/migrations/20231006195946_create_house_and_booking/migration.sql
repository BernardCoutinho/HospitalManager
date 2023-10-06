-- CreateTable
CREATE TABLE `Patient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `rg` VARCHAR(10) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Patient_cpf_key`(`cpf`),
    UNIQUE INDEX `Patient_rg_key`(`rg`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
