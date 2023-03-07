-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2023 at 06:12 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `contact` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `email`, `contact`, `password`) VALUES
(5229, 'raj', 'raj@gmail.com', '5465646547', '$2b$10$0f1xaPoA4nt3I3G2Cc5KhedsHKtH/Zm8DQ..5nISM30y0lqbms7kC'),
(5230, 'abhishek', 'abhi@gmail.com', '45458485485', '$2b$10$sjzBTZ3Rj8Ka6URTDQoO2OGqEcxQcWLy.FuB7fNdrrt3uC3Ou3Dn.'),
(5231, 'rajnish sharma', 'rajnishsharma29120@gmail.com', '548547545', '$2b$10$BWa9TibkWfKOS0QD8Wl.aerrWBI4C9M/ihKf.iO8wNu3EjrWBCYD2'),
(5232, 'utkarsh', 'ut@gmail.com', '45745647878', '$2b$10$RP1cmMgSptw6SRHMMhEGf.DYWtfWcbp/qfnWS1eP2sKQZhx4ASD2a'),
(5233, 'sachin sharma', 'sac@gmail.com', '457976989', '$2b$10$2z/9H/essb8IwuCAha4XmOzACzYlTLBAp09TPHkpR7j.PY4GB9goW'),
(5234, 'ashish', 'ashish@gmail.com', '24568695', '$2b$10$0TZTxIR7Uqp1I/rZqZt8B.ihDY/eNti8/WK4DSTbKWGYgrKb/hrgS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5235;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
