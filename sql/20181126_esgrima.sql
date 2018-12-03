-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: esgrima
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accion_reaccion`
--

DROP TABLE IF EXISTS `accion_reaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `accion_reaccion` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `quien_inicia` varchar(50) NOT NULL,
  `accion` varchar(50) NOT NULL,
  `reaccion` varchar(50) NOT NULL,
  `toque` varchar(50) NOT NULL,
  `zona` int(10) NOT NULL,
  `observacion` varchar(500) DEFAULT NULL,
  `combateID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accion_reaccion`
--

LOCK TABLES `accion_reaccion` WRITE;
/*!40000 ALTER TABLE `accion_reaccion` DISABLE KEYS */;
INSERT INTO `accion_reaccion` VALUES (1,'niki','AH','REM RIP','ALEX',3,'6TA',0),(2,'niki','AS','ASPRE','NIKI',3,'',0),(3,'niki','AS','ASPRE','NIKI',3,'',0),(4,'niki','AS','CONTRA','ALEX',3,'DISAPARICION',0),(5,'alex','AS','ASPRE','NIKI',2,'',0),(6,'alex','AR','PAR RIP','SIMULTANEO',2,'2DA',0),(7,'niki','AS','AS','NIKI',2,'COUPE',0),(8,'alex','AS','AS','SIMULTANEO',2,'',0),(9,'niki','AS','PAR RIP','ALEX',2,'',0),(10,'niki','AS','AR','ALEX',3,'',0),(11,'niki','AS','PAR RIP','ALEX',3,'',0),(12,'alex','AS','PAR RIP','NIKI',2,'',0),(13,'niki','AS','CONTRA','NIKI',3,'',0),(14,'niki','AR','PAR RIP','NIKI',3,'4TA',0),(15,'niki','AS','PAR RIP','NIKI',3,'4TA',0),(16,'alex','AS','\\N','NIKI',1,'',0),(17,'alex','AC','CONTRA','ALEX',1,'',0),(18,'niki','AS','CONTRA','SIMULTANEO',1,'DISAPARICION',0),(19,'alex','AR','CONTRA','ALEX',1,'DISAPARICION',0),(20,'niki','AC','\\N','NIKI',1,'',0),(21,'niki','AR','PAR REM','NIKI',1,'6TA',0),(22,'alex','AS','ASPRE','NIKI',1,'',0);
/*!40000 ALTER TABLE `accion_reaccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `combates`
--

DROP TABLE IF EXISTS `combates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `combates` (
  `CombateID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `esgrimista1` int(10) unsigned NOT NULL,
  `esgrimista2` int(10) unsigned NOT NULL,
  PRIMARY KEY (`CombateID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `combates`
--

LOCK TABLES `combates` WRITE;
/*!40000 ALTER TABLE `combates` DISABLE KEYS */;
INSERT INTO `combates` VALUES (1,1,2);
/*!40000 ALTER TABLE `combates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `esgrimistas`
--

DROP TABLE IF EXISTS `esgrimistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `esgrimistas` (
  `esgrimistaID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `lastname` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pais` varchar(50) NOT NULL,
  PRIMARY KEY (`esgrimistaID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `esgrimistas`
--

LOCK TABLES `esgrimistas` WRITE;
/*!40000 ALTER TABLE `esgrimistas` DISABLE KEYS */;
INSERT INTO `esgrimistas` VALUES (1,'bogdan','niki','ucrania'),(2,'gonzalez','alex','colombia');
/*!40000 ALTER TABLE `esgrimistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inicia`
--

DROP TABLE IF EXISTS `inicia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `inicia` (
  `inicia` varchar(50) NOT NULL,
  `cantidad_inicios` int(10) unsigned DEFAULT NULL,
  `porcentaje_inicios` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inicia`
--

LOCK TABLES `inicia` WRITE;
/*!40000 ALTER TABLE `inicia` DISABLE KEYS */;
INSERT INTO `inicia` VALUES ('niki',14,0.64),('alex',8,0.36);
/*!40000 ALTER TABLE `inicia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-26 20:24:16
