-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2022 at 01:36 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iams`
--

-- --------------------------------------------------------

--
-- Table structure for table `assettypes`
--

CREATE TABLE `assettypes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `assettypes`
--

INSERT INTO `assettypes` (`id`, `name`, `isdelete`, `status`, `created_by`, `created_at`) VALUES
(1, 'Consumable', 0, 1, 1, '2022-06-10 07:38:36'),
(2, 'Non consumable', 0, 1, 1, '2022-06-10 07:40:47');

-- --------------------------------------------------------

--
-- Table structure for table `branchmasters`
--

CREATE TABLE `branchmasters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `branchname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `officerincharge` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branchmasters`
--

INSERT INTO `branchmasters` (`id`, `branchname`, `officerincharge`, `created_at`, `updated_at`) VALUES
(1, 'Nazarat', 1, NULL, NULL),
(2, 'Electronics', 1, NULL, NULL),
(3, 'Stationary', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `isdelete`, `status`, `created_by`, `created_at`) VALUES
(1, 'IT Equipments', 0, 1, 1, '2022-06-10 07:33:57');

-- --------------------------------------------------------

--
-- Table structure for table `draftorderitems`
--

CREATE TABLE `draftorderitems` (
  `id` int(10) UNSIGNED NOT NULL,
  `orderid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `draftordermasters`
--

CREATE TABLE `draftordermasters` (
  `id` int(10) UNSIGNED NOT NULL,
  `orderno` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderdate` date NOT NULL,
  `branchid` int(11) NOT NULL,
  `remarks` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(10) UNSIGNED NOT NULL,
  `subcatid` int(11) NOT NULL,
  `assettype` int(11) NOT NULL,
  `itemcode` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remarks` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `approverate` decimal(8,2) NOT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `subcatid`, `assettype`, `itemcode`, `name`, `remarks`, `approverate`, `isdelete`, `status`, `created_by`, `created_at`, `modified_by`, `modified_on`) VALUES
(1, 1, 2, '001', 'ink', 'n/a', '500.00', 0, 1, 1, '2022-06-10 18:35:14', NULL, NULL),
(2, 2, 1, '002', 'Toner', 'n/a', '1000.00', 0, 1, 1, '2022-06-10 18:40:32', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_03_23_081330_create_organisations', 1),
(6, '2022_03_29_011428_create_assettypes', 1),
(7, '2022_03_29_011517_create_categories', 1),
(8, '2022_03_29_011540_create_subcategories', 1),
(9, '2022_03_29_011601_create_items', 1),
(10, '2022_03_29_011718_create_ordermasters', 1),
(11, '2022_03_29_011752_create_stockmasters', 1),
(12, '2022_03_29_012952_create_orderitems', 1),
(13, '2022_03_29_014610_create_branchmasters', 1),
(14, '2022_03_29_014658_create_addcolumn_stockmaster', 1),
(15, '2022_05_26_191113_create_temporderdetails_table', 2),
(16, '2022_05_29_120150_create_draftordermasters_table', 3),
(17, '2022_05_29_120322_create_draftorderitems_table', 3),
(18, '2022_05_31_160150_create_temporderdetails_table', 4),
(19, '2022_06_02_141615_create_temporderdata_table', 5),
(20, '2022_06_11_065816_add_column_finalquantity', 6),
(21, '2022_06_11_130819_add_foreign_key_to_ordermasters_table', 7),
(22, '2022_06_11_184606_rename_name_to_branchname_in_branchmasters_table', 8);

-- --------------------------------------------------------

--
-- Table structure for table `orderitems`
--

CREATE TABLE `orderitems` (
  `id` int(10) UNSIGNED NOT NULL,
  `orderid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `finalquanity` int(11) DEFAULT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orderitems`
--

INSERT INTO `orderitems` (`id`, `orderid`, `itemid`, `description`, `quantity`, `finalquanity`, `isdelete`, `status`, `created_by`, `created_at`, `modified_by`, `modified_on`) VALUES
(1, 3, 1, 'n/A', 2, 2, 0, 1, 1, '2022-06-12 18:28:34', NULL, NULL),
(2, 3, 2, 'n/a', 2, 2, 0, 1, 1, '2022-06-12 18:28:34', NULL, NULL),
(3, 3, 2, 'n/a', 2, 2, 0, 1, 1, '2022-06-12 18:28:34', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ordermasters`
--

CREATE TABLE `ordermasters` (
  `id` int(10) UNSIGNED NOT NULL,
  `orderno` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderdate` date NOT NULL,
  `branchid` bigint(20) UNSIGNED NOT NULL,
  `remarks` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ordermasters`
--

INSERT INTO `ordermasters` (`id`, `orderno`, `orderdate`, `branchid`, `remarks`, `isdelete`, `status`, `created_by`, `created_at`, `modified_by`, `modified_on`) VALUES
(1, 'ORD1_1_1', '2022-06-10', 1, 'n/a', 0, 1, 1, '2022-06-10 19:16:45', NULL, NULL),
(2, 'ORD2_1_1', '2022-06-12', 1, 'n/a', 0, 1, 1, '2022-06-12 17:37:06', NULL, NULL),
(3, 'ORD3_1_1', '2022-06-12', 1, 'n/a', 0, 1, 1, '2022-06-12 18:28:34', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `organisations`
--

CREATE TABLE `organisations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` int(11) NOT NULL,
  `email` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone1` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone2` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fax` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address1` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address2` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address3` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(27, 'App\\Models\\User', 2, 'admin@iams.in_Token', 'b5afcd5eeb3d916fbfa42c67c45b2463628fa23f5e1595e1c141428413ab2c02', '[\"*\"]', '2022-06-10 00:02:47', '2022-06-09 10:37:18', '2022-06-10 00:02:47'),
(31, 'App\\Models\\User', 1, 'admin@iams.in_Token', '0ee918bcf8d221f52845b7a30e3cfb263012262b23decdc5734197e4f4de0a9d', '[\"*\"]', '2022-06-13 05:41:35', '2022-06-10 01:24:32', '2022-06-13 05:41:35');

-- --------------------------------------------------------

--
-- Table structure for table `stockmasters`
--

CREATE TABLE `stockmasters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `orderid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity_in` int(11) NOT NULL,
  `supply_on` date NOT NULL,
  `supplierrate` decimal(8,2) NOT NULL,
  `cgst` decimal(8,2) NOT NULL,
  `sgst` decimal(8,2) NOT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subcategories`
--

CREATE TABLE `subcategories` (
  `id` int(10) UNSIGNED NOT NULL,
  `catid` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remarks` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subcategories`
--

INSERT INTO `subcategories` (`id`, `catid`, `name`, `remarks`, `isdelete`, `status`, `created_by`, `created_at`, `modified_by`, `modified_on`) VALUES
(1, 1, 'Computer Set', 'na', 0, 1, 1, '2022-06-10 07:35:01', NULL, NULL),
(2, 1, 'Printer', 'na', 0, 1, 1, '2022-06-10 07:35:10', NULL, NULL),
(3, 1, 'Scanner', 'na', 0, 1, 1, '2022-06-10 07:35:20', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `temporderdata`
--

CREATE TABLE `temporderdata` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userid` int(11) NOT NULL,
  `ipaddress` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderdate` date NOT NULL,
  `itemid` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` int(11) NOT NULL,
  `designation` int(11) NOT NULL,
  `isdelete` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile`, `role`, `designation`, `isdelete`, `status`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'admin@iams.in', '7002274743', 1, 1, 0, 1, '$2y$10$wAW2LsbxXqPUAOBBGI4yi.9k4HujQxD0S5bcajPQTCftv.tIwAZAi', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assettypes`
--
ALTER TABLE `assettypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branchmasters`
--
ALTER TABLE `branchmasters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `draftorderitems`
--
ALTER TABLE `draftorderitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `draftordermasters`
--
ALTER TABLE `draftordermasters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ordermasters`
--
ALTER TABLE `ordermasters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ordermasters_branchid_foreign` (`branchid`);

--
-- Indexes for table `organisations`
--
ALTER TABLE `organisations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `organisations_email_unique` (`email`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `stockmasters`
--
ALTER TABLE `stockmasters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `temporderdata`
--
ALTER TABLE `temporderdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assettypes`
--
ALTER TABLE `assettypes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `branchmasters`
--
ALTER TABLE `branchmasters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `draftorderitems`
--
ALTER TABLE `draftorderitems`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `draftordermasters`
--
ALTER TABLE `draftordermasters`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `orderitems`
--
ALTER TABLE `orderitems`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ordermasters`
--
ALTER TABLE `ordermasters`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `organisations`
--
ALTER TABLE `organisations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `stockmasters`
--
ALTER TABLE `stockmasters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `temporderdata`
--
ALTER TABLE `temporderdata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ordermasters`
--
ALTER TABLE `ordermasters`
  ADD CONSTRAINT `ordermasters_branchid_foreign` FOREIGN KEY (`branchid`) REFERENCES `branchmasters` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
