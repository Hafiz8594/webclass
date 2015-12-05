-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2015 at 05:08 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `animal_survey`
--

-- --------------------------------------------------------

--
-- Table structure for table `survey_data`
--

CREATE TABLE IF NOT EXISTS `survey_data` (
  `survey_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `comment` varchar(160) NOT NULL,
  `rating` int(11) NOT NULL,
  PRIMARY KEY (`survey_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `survey_data`
--

INSERT INTO `survey_data` (`survey_id`, `name`, `email`, `comment`, `rating`) VALUES
(1, 'Clark Kent', 'ckent@animalkingdom.com', 'I loved the animal kingdom! The tropical exhibit was very awesome and unique.', 5),
(8, 'A James', 'Clark', 'I really liked it.', 3),
(18, 'Lamar Jones', 'lj@animalkingdom.com', 'Totally awesome!', 4),
(21, 'Dez Bryant', 'dbryant@animalkingdom.com', 'It was okay.', 3),
(22, 'Cameron Jordan', 'cjordan@animalkingdom.com', 'Bad experience.', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
