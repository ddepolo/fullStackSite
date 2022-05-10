-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-05-2022 a las 12:27:32
-- Versión del servidor: 8.0.27
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `burger`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `burgers`
--

DROP TABLE IF EXISTS `burgers`;
CREATE TABLE IF NOT EXISTS `burgers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(300) NOT NULL,
  `detalle` text NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `burgers`
--

INSERT INTO `burgers` (`id`, `nombre`, `detalle`, `precio`, `imagen`) VALUES
(1, 'test 1', 'asdadsadas', '100.00', 'burger1.jpg'),
(2, 'burger 2', 'test detalle', '1500.00', 'burger2.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
