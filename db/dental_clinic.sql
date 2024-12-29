-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2024 at 10:38 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dental_clinic`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `service` varchar(100) NOT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `name`, `email`, `phone`, `date`, `time`, `service`, `notes`, `created_at`) VALUES
(1, 'Drilon Zogaj', 'drilonzoga@gmail.com', '049455688', '2024-12-30', '15:30:00', 'Full Stack Project - Klinika Dentare', 'Projekti per pjesen praktike ne Tectigon Academy!', '2024-12-17 02:32:14'),
(2, 'Drilon Zogaj', 'drilon@mail.com', '044123123', '2024-12-28', '04:00:00', 'Dental Crowns & Bridges', '', '2024-12-17 02:35:11'),
(3, 'Drilon Zogaj', 'drilon@mail.com', '044321321', '2024-12-28', '04:00:00', 'Dental Crowns & Bridges', '', '2024-12-17 02:39:51'),
(4, 'Drilon Zogaj', 'drilon@mail.com', '044123123', '2024-12-28', '04:00:00', 'Dental Crowns & Bridges', '', '2024-12-17 02:40:41'),
(5, 'Drilon Zogaj', 'drilon@mail.com', '044123123', '2024-12-28', '04:00:00', 'Dental Crowns & Bridges', '', '2024-12-17 02:41:53'),
(6, 'Drilon Zogaj', 'drilon@mail.com', '044123123', '2024-12-28', '04:00:00', 'Dental Crowns & Bridges', '', '2024-12-17 02:43:54'),
(7, 'Drilon Zogaj', 'drilon@mail.com', '044123123', '2024-12-28', '04:00:00', 'Dental Crowns & Bridges', '', '2024-12-17 02:44:23'),
(8, 'Drilon Zogaj', 'drilon@mail.com', '044123123', '2024-12-28', '04:00:00', 'Dental Crowns & Bridges', '', '2024-12-17 02:45:46'),
(9, 'Drilon Zogaj', 'drilon@mail.com', '044123123', '2024-12-28', '04:00:00', 'Dental Crowns & Bridges', '', '2024-12-17 02:46:43'),
(10, 'Drilon Zogaj', 'drilon@mail.com', '044123123', '2024-12-28', '04:00:00', 'Dental Crowns & Bridges', '', '2024-12-17 02:48:14'),
(71, 'Drilon Zogaj', 'drilonzoga@gmail.com', '049455688', '2024-12-28', '05:00:00', 'Orthodontics', '', '2024-12-28 22:19:52'),
(72, 'Drilon Zogaj', 'drilonzoga@gmail.com', '049455688', '2024-12-30', '02:00:00', 'Orthodontics', 'Full Stack Project Revere Dental Clinic!', '2024-12-29 19:50:19');

-- --------------------------------------------------------

--
-- Table structure for table `submissions`
--

CREATE TABLE `submissions` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `submissions`
--

INSERT INTO `submissions` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `message`, `created_at`) VALUES
(1, 'Drilon', 'Zogaj', 'drilonzoga@gmail.com', '044956956', 'ContactUs - Form Test', '2024-12-19 01:03:46'),
(2, 'Drilonn', 'Zogaj', 'drilon@clinic.com', '012345678', 'Hello test!', '2024-12-19 01:14:37'),
(3, 'John', 'Doe', 'john.doe@example.com', '0412345678', 'I would like to inquire about your services. Can you provide more details?', '2024-12-19 01:28:50'),
(4, 'Jane', 'Smith', 'jane.smith@example.com', '0423456789', 'My appointment was fantastic. Thank you for the great care!', '2024-12-19 01:28:50'),
(5, 'Alice', 'Johnson', 'alice.johnson@example.com', '0434567890', 'What are your business hours? I would like to schedule an appointment.', '2024-12-19 01:28:50'),
(6, 'Bob', 'Brown', 'bob.brown@example.com', '0445678901', 'I had a great experience. The staff were very friendly and helpful.', '2024-12-19 01:28:50'),
(7, 'Charlie', 'Davis', 'charlie.davis@example.com', '0456789012', 'Can I get more information about your teeth whitening service?', '2024-12-19 01:28:50'),
(8, 'Eve', 'Miller', 'eve.miller@example.com', '0467890123', 'Is it possible to book an emergency appointment? I have a toothache.', '2024-12-19 01:28:50'),
(9, 'David', 'Wilson', 'david.wilson@example.com', '0478901234', 'I would like to know the prices for a dental checkup.', '2024-12-19 01:28:50'),
(10, 'Emily', 'Taylor', 'emily.taylor@example.com', '0489012345', 'The clinic looks amazing! I would love to visit soon.', '2024-12-19 01:28:50'),
(11, 'Frank', 'Anderson', 'frank.anderson@example.com', '0490123456', 'Can I book an appointment for my child? He needs a dental checkup.', '2024-12-19 01:28:50'),
(12, 'Grace', 'Thomas', 'grace.thomas@example.com', '0501234567', 'I want to ask about cosmetic dental procedures you offer, like veneers or implants.', '2024-12-19 01:28:50'),
(24, 'Drilon', 'Zogaj', 'drilonzoga@gmail.com', '049455688', 'Contact Form Revere Dental Clinic!', '2024-12-29 20:18:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
