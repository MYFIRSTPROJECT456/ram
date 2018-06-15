-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: freeads
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.17.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adkeywords`
--

DROP TABLE IF EXISTS `adkeywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adkeywords` (
  `ADKEYWORDID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ADID` int(20) NOT NULL,
  `KEYWORDID` int(20) NOT NULL,
  `CREATIONDATE` datetime NOT NULL,
  `UPDATIONDATE` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ADKEYWORDID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adkeywords`
--

LOCK TABLES `adkeywords` WRITE;
/*!40000 ALTER TABLE `adkeywords` DISABLE KEYS */;
/*!40000 ALTER TABLE `adkeywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `ADMINID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ADMINUSER` varchar(30) NOT NULL,
  `ADMINPASSWORD` varchar(30) NOT NULL,
  PRIMARY KEY (`ADMINID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'deepakc','123');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ads`
--

DROP TABLE IF EXISTS `ads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ads` (
  `ADID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `TITLE` varchar(100) NOT NULL,
  `TAGSKEYS` varchar(100) NOT NULL,
  `DISCRIPTION` text NOT NULL,
  `UPLOADIMG` varchar(100) NOT NULL,
  `WEBSITE` varchar(35) NOT NULL,
  `CATEGORYID` int(20) NOT NULL,
  `SUB_CATEGORY` varchar(50) NOT NULL,
  `STATEID` int(20) NOT NULL,
  `CITYID` int(20) NOT NULL,
  `LOCALITYID` int(20) NOT NULL,
  `AREA` varchar(100) NOT NULL,
  `STATUS` enum('Approved','Pending','Rejected') NOT NULL,
  `CREATIONDATE` datetime NOT NULL,
  `UPDATIONDATE` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `EXT` varchar(10) DEFAULT '',
  PRIMARY KEY (`ADID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ads`
--

LOCK TABLES `ads` WRITE;
/*!40000 ALTER TABLE `ads` DISABLE KEYS */;
INSERT INTO `ads` VALUES (1,'Krishna Computers','All computer parts available','All Kinds of computer parts is available here and computer is also repaire here','computer.jpeg','www.krishnarepaireparts.com',1,'1',1,1,1,'bhim nagar','Approved','2017-11-08 13:32:39','2017-11-08 13:33:04','jpeg'),(2,'Motorcycle','Motorcycle all parts is available here','All types of motorcycle is celling  here if you want to contact our dealers ','motercycle.png','www.allmotorcycle.com',32,'32',1,1,1,'KoperKhaine','Approved','2017-11-08 16:57:36','2017-11-08 16:57:36','png'),(3,'All type of footwear sales','All type of footwear sales anytime','All company footwear sales if any one need to purchase please contact to our dealers','footwear.jpg','www.allkindsoffootwear.com',55,'55',1,1,1,'nerul','Approved','2017-11-08 17:03:01','2017-11-08 17:03:01','png'),(4,'Led Light & Bulbs','All Bulbs Availables','All company bulbs availables here if you want to contact our dealers','light.jpg','www.ledlights.com',1,'1',1,1,1,'Rabale','Approved','2017-11-08 17:06:06','2017-11-08 17:06:06','png'),(5,'Tvs Tyres','All kind of Tyres','Tvs company tyres sales if any one need to purchase please contact to our dealers','tyers.png','www.tvstyres.com',32,'32',1,1,1,'KoperKhaine','Approved','2017-11-08 17:09:27','2017-11-08 17:09:27','png'),(6,'Ultratech Cements','Cements','Ultratech company sales in holsel if any one need to purchase please contact to our dealers','cement.jpeg','www.ultratechcements.com',71,'71',1,1,1,'nerul','Approved','2017-11-08 17:11:51','2017-11-08 17:11:51','png'),(7,'Sandisk Memory','Memory','Sandisk company memory sales if any one need to purchase please contact to our dealers','sandisk.jpg','www.sandisk.com',14,'14',1,1,1,'Rabale','Approved','2017-11-08 17:14:06','2017-11-08 17:14:06','png'),(8,'Mobile Phones ','Mobile','All company mobile sales if any one need to purchase please contact to our dealers','mobile.jpeg','www.allkindofmobile.com',14,'14',1,1,1,'KoperKhaine','Approved','2017-11-08 17:15:19','2017-11-08 17:15:19','png'),(9,'Food Machinery','Food Machinery','All types of food machinery is available to selling here if you want to contact our dealers','food.jpeg','www.foodmechinery.com',7,'7',1,1,1,'nerul','Approved','2017-11-08 17:17:42','2017-11-08 17:17:42','png'),(10,'Ayurvedic, Herbal Oils & Cosmetics','Ayurvedic, Herbal Oils & Cosmetics','All companies Ayurvedic, Herbal Oils & Cosmetics is available in holesale rate please contact to dealers','herbaloil.jpg','www.AyurvedicHerbal.com',64,'64',1,1,1,'Nerul','Approved','2017-11-08 17:23:55','2017-11-08 17:23:55','png');
/*!40000 ALTER TABLE `ads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adsimages`
--

DROP TABLE IF EXISTS `adsimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adsimages` (
  `IMAGEID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ADID` int(20) NOT NULL,
  `IMAGENAME` varchar(40) NOT NULL,
  `CREATIONDATE` datetime NOT NULL,
  `UPDATIONDATE` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`IMAGEID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adsimages`
--

LOCK TABLES `adsimages` WRITE;
/*!40000 ALTER TABLE `adsimages` DISABLE KEYS */;
/*!40000 ALTER TABLE `adsimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `CATEGORYID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `CATEGORYNAME` varchar(250) NOT NULL,
  `PARENTCATEGORYID` int(30) NOT NULL,
  `CREATIONDATE` datetime NOT NULL,
  `UPDATIONDATE` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`CATEGORYID`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Electronics & Electrical',0,'2017-11-08 14:55:41','2017-11-08 14:55:41'),(2,'LED Lights & Bulbs',1,'2017-11-08 14:57:30','2017-11-08 14:57:30'),(3,'Color & Ventilation Devices',1,'2017-11-08 15:02:25','2017-11-08 15:02:25'),(4,'Freez & Refrigerators & Chille',1,'2017-11-08 15:28:32','2017-11-08 15:28:32'),(5,'Home Appliances & machines',1,'2017-11-08 15:30:46','2017-11-08 15:30:46'),(6,'Biometric & Access Control Dev',1,'2017-11-08 15:33:32','2017-11-08 15:33:32'),(7,'Industrial Machinery',0,'2017-11-08 15:34:36','2017-11-08 15:34:36'),(8,'Industrial Machines & Equipmen',7,'2017-11-08 15:35:28','2017-11-08 15:35:28'),(9,'Printing Machinery & Equipment',7,'2017-11-08 15:36:14','2017-11-08 15:36:14'),(10,'Water Treatment & purifying pl',7,'2017-11-08 15:37:02','2017-11-08 15:37:02'),(11,'Plastic  Work & Processing Mac',7,'2017-11-08 15:37:42','2017-11-08 15:37:42'),(12,'Bakery & Dairy Machinery',7,'2017-11-08 15:38:25','2017-11-08 15:38:25'),(13,'Food Processing plant & Machin',7,'2017-11-08 15:39:11','2017-11-08 15:39:11'),(14,'Mobile & Telecom',0,'2017-11-08 15:40:26','2017-11-08 15:40:26'),(15,'Mobile Phone & Accessries',14,'2017-11-08 15:40:59','2017-11-08 15:40:59'),(16,'SanDisk Pen Drives',14,'2017-11-08 15:41:38','2017-11-08 15:41:38'),(17,'Telecommunication Equipment & ',14,'2017-11-08 15:42:16','2017-11-08 15:42:16'),(18,'Antenas, Wifi & Communication ',14,'2017-11-08 15:43:09','2017-11-08 15:43:09'),(19,'Transmitters & Receivers',14,'2017-11-08 15:43:33','2017-11-08 15:43:33'),(20,'Samsung Mobile Phones',14,'2017-11-08 15:44:03','2017-11-08 15:44:03'),(21,'Telecom Services & Maintenance',14,'2017-11-08 15:44:46','2017-11-08 15:44:46'),(22,'Solar & Renewable Energy Products',1,'2017-11-08 15:45:19','2017-11-08 15:54:46'),(23,'Motorola Walkie Talkies',14,'2017-11-08 15:48:18','2017-11-08 15:48:18'),(24,'Computer & Office',0,'2017-11-08 15:49:11','2017-11-08 15:49:11'),(25,'Computer Hardware & Peripherals',24,'2017-11-08 15:49:51','2017-11-08 15:54:28'),(26,'Router, Cables & Networking Devices',24,'2017-11-08 15:56:42','2017-11-08 15:56:42'),(27,'Computer And Mobile Softwares & Apps',24,'2017-11-08 15:57:25','2017-11-08 15:57:25'),(28,'Laptops, PC, Mainframes & Computers',24,'2017-11-08 15:58:20','2017-11-08 15:58:20'),(29,'Computer Stationery Products',24,'2017-11-08 15:58:59','2017-11-08 15:58:59'),(30,'Computer PCI Cards, Cables & Modules',24,'2017-11-08 15:59:57','2017-11-08 15:59:57'),(31,'HP Laser Printers',24,'2017-11-08 16:00:36','2017-11-08 16:00:36'),(32,'Automobile Parts',0,'2017-11-08 16:04:47','2017-11-08 16:04:47'),(33,'Automobile Parts & Components',32,'2017-11-08 16:05:13','2017-11-08 16:05:13'),(34,'Automobile Interiors & Accessories',32,'2017-11-08 16:05:46','2017-11-08 16:05:46'),(35,'Cars, Trucks & Commercial Vehicles',32,'2017-11-08 16:06:58','2017-11-08 16:06:58'),(36,'Automotive Repair Tools & Equipments',32,'2017-11-08 16:07:54','2017-11-08 16:07:54'),(37,'Motorcycles & Cars',32,'2017-11-08 16:08:39','2017-11-08 16:08:39'),(38,'Tractors Parts & Assemblies',32,'2017-11-08 16:09:09','2017-11-08 16:09:09'),(39,'Bridgestone Tyres',32,'2017-11-08 16:09:38','2017-11-08 16:09:38'),(40,'Hand & Machine Tools',0,'2017-11-08 16:11:34','2017-11-08 16:11:34'),(41,'Milling & Grinding Machines',40,'2017-11-08 16:12:07','2017-11-08 16:12:07'),(42,'Cutting  Machine & Equipments',40,'2017-11-08 16:12:34','2017-11-08 16:12:34'),(43,'Woodworking Machine & Tools',40,'2017-11-08 16:13:08','2017-11-08 16:13:08'),(44,'Pliers, Scredrivers & Hammers',40,'2017-11-08 16:13:53','2017-11-08 16:13:53'),(45,'Saw, Chainsaws & Saw Blades',40,'2017-11-08 16:14:32','2017-11-08 16:14:32'),(46,'Hydraulic & Pneumatic Tools',40,'2017-11-08 16:15:18','2017-11-08 16:15:18'),(47,'Apparel & Garments',0,'2017-11-08 16:16:18','2017-11-08 16:16:18'),(48,'Womens Ethnic Wear',47,'2017-11-08 16:16:57','2017-11-08 16:16:57'),(49,'Womens Western Wear',47,'2017-11-08 16:17:33','2017-11-08 16:17:33'),(50,'Mens Wear',47,'2017-11-08 16:18:57','2017-11-08 16:18:57'),(51,'Kids Wear',47,'2017-11-08 16:19:13','2017-11-08 16:19:13'),(52,'Winter Wear',47,'2017-11-08 16:19:28','2017-11-08 16:19:28'),(53,'Uniforms',47,'2017-11-08 16:19:46','2017-11-08 16:19:46'),(54,'Sewing Threads, Laces & Accessories',47,'2017-11-08 16:20:30','2017-11-08 16:20:30'),(55,'Fashion Accessories',0,'2017-11-08 16:22:21','2017-11-08 16:22:21'),(56,'Footwear',55,'2017-11-08 16:22:34','2017-11-08 16:22:34'),(57,'Woodland Shoes',55,'2017-11-08 16:23:05','2017-11-08 16:23:05'),(58,'Watches & Clocks',55,'2017-11-08 16:23:30','2017-11-08 16:23:30'),(59,'Eyewear',55,'2017-11-08 16:23:53','2017-11-08 16:23:53'),(60,'Puma Shoes',55,'2017-11-08 16:24:23','2017-11-08 16:24:23'),(61,'Fashion Jewelry',55,'2017-11-08 16:24:52','2017-11-08 16:24:52'),(62,'Gold Jewelry',55,'2017-11-08 16:25:18','2017-11-08 16:25:18'),(63,'Other Accessories',55,'2017-11-08 16:25:41','2017-11-08 16:25:41'),(64,'Cosmetics & Personal Care',0,'2017-11-08 16:26:54','2017-11-08 16:26:54'),(65,'Cosmetics, Hair & Beauty Products',64,'2017-11-08 16:27:37','2017-11-08 16:27:37'),(66,'Soaps, Detergent Powder & Cakes',64,'2017-11-08 16:28:24','2017-11-08 16:28:24'),(67,'Lux Soaps',64,'2017-11-08 16:28:40','2017-11-08 16:28:40'),(68,'Salon, Spa kits & Equipments',64,'2017-11-08 16:29:21','2017-11-08 16:29:21'),(69,'Ayurvedic, Herbal Oils & Cosmetics',64,'2017-11-08 16:30:12','2017-11-08 16:30:12'),(70,'Child & Baby Care Products',64,'2017-11-08 16:30:40','2017-11-08 16:30:40'),(71,'Building & Construction',0,'2017-11-08 16:32:17','2017-11-08 16:32:17'),(72,'Doors & Windows',71,'2017-11-08 16:32:39','2017-11-08 16:32:39'),(73,'Bricks, Concrete & Building Material',71,'2017-11-08 16:33:31','2017-11-08 16:33:31'),(74,'Ambuja Cement',71,'2017-11-08 16:34:10','2017-11-08 16:34:10'),(75,'Building & Construction Machines',71,'2017-11-08 16:34:37','2017-11-08 16:34:37'),(76,'Greenply Plywoods',71,'2017-11-08 16:35:17','2017-11-08 16:35:17'),(77,'False Ceiling & Roofing Supplies',71,'2017-11-08 16:36:00','2017-11-08 16:36:00'),(78,'Ultratech Cements',71,'2017-11-08 16:36:39','2017-11-08 16:36:39');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `CITYID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `CITYNAME` varchar(30) NOT NULL,
  `STATEID` int(11) NOT NULL,
  `CREATIONDATE` datetime NOT NULL,
  `UPDATIONDATE` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`CITYID`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Port Blair',1,'2017-11-08 11:16:44','2017-11-08 11:16:44'),(2,'Hyderabad ',2,'2017-11-08 11:17:05','2017-11-08 11:17:05'),(3,'Itanagar',3,'2017-11-08 11:17:24','2017-11-08 11:17:24'),(4,'Dispur',4,'2017-11-08 11:17:35','2017-11-08 11:17:35'),(5,'Patna',5,'2017-11-08 11:17:50','2017-11-08 11:17:50'),(6,'Chandigarh',6,'2017-11-08 11:18:13','2017-11-08 11:18:13'),(7,'Bilaspur',7,'2017-11-08 11:18:36','2017-11-08 11:18:36'),(8,'Silvassa',8,'2017-11-08 11:18:48','2017-11-08 11:18:48'),(9,'Daman',9,'2017-11-08 11:19:11','2017-11-08 11:19:11'),(10,'New Delhi',10,'2017-11-08 11:19:22','2017-11-08 11:19:22'),(11,'Porvorim',11,'2017-11-08 11:19:40','2017-11-08 11:19:40'),(12,'Gandhinagar',12,'2017-11-08 11:19:53','2017-11-08 11:19:53'),(13,'Chandigarh',13,'2017-11-08 11:20:13','2017-11-08 11:20:13'),(14,'Shimla',14,'2017-11-08 11:20:27','2017-11-08 11:20:27'),(15,'Srinagar ',15,'2017-11-08 11:20:48','2017-11-08 11:20:48'),(16,'Ranchi',16,'2017-11-08 11:21:02','2017-11-08 11:21:02'),(17,'Bengaluru',17,'2017-11-08 11:21:13','2017-11-08 11:21:13'),(18,'Thiruvananthapuram',18,'2017-11-08 11:21:25','2017-11-08 11:21:25'),(19,'Kavaratti',18,'2017-11-08 11:21:36','2017-11-08 11:21:36'),(20,'Bhopal',20,'2017-11-08 11:21:50','2017-11-08 11:21:50'),(21,'Navi Mumbai ',21,'2017-11-08 11:22:16','2017-11-08 12:01:58'),(22,'Nagpur',21,'2017-11-08 11:22:35','2017-11-08 11:22:35'),(23,'Imphal',22,'2017-11-08 11:23:41','2017-11-08 11:23:41'),(24,'Shillong',23,'2017-11-08 11:24:00','2017-11-08 11:24:00'),(25,'Aizawl',24,'2017-11-08 11:24:15','2017-11-08 11:24:15'),(26,'Kohima',25,'2017-11-08 11:24:32','2017-11-08 11:24:32'),(27,'Bhubaneswar',26,'2017-11-08 11:24:44','2017-11-08 11:24:44'),(28,'Chennai',27,'2017-11-08 11:25:06','2017-11-08 11:25:06'),(29,'Chandigarh',28,'2017-11-08 11:25:21','2017-11-08 11:25:21'),(30,'Jaipur',29,'2017-11-08 11:25:31','2017-11-08 11:25:31'),(31,'Gangtok',30,'2017-11-08 11:25:54','2017-11-08 11:25:54'),(32,'Chennai',31,'2017-11-08 11:26:09','2017-11-08 11:26:09'),(33,'Hyderabad',32,'2017-11-08 11:26:26','2017-11-08 11:26:26'),(34,'Agartala',33,'2017-11-08 11:26:43','2017-11-08 11:26:43'),(35,'Lucknow',34,'2017-11-08 11:26:57','2017-11-08 11:26:57'),(36,'Dehradun',35,'2017-11-08 11:27:08','2017-11-08 11:27:08'),(37,'Kolkata',36,'2017-11-08 11:27:23','2017-11-08 11:27:23'),(38,'Mumbai',21,'2017-11-12 11:27:05','2017-11-12 11:27:05');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactus`
--

DROP TABLE IF EXISTS `contactus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contactus` (
  `contactid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `emailid` varchar(50) NOT NULL,
  `mobileno` bigint(30) NOT NULL,
  `message` varchar(200) NOT NULL,
  `creationdate` datetime NOT NULL,
  `updationdate` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`contactid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactus`
--

LOCK TABLES `contactus` WRITE;
/*!40000 ALTER TABLE `contactus` DISABLE KEYS */;
INSERT INTO `contactus` VALUES (1,'hgkj','jkhk',67576,'jkjkjmnh','2017-11-19 19:00:59','2017-11-19 19:00:59'),(2,'deepak','dchdeepak@gmail.com',8898375465,'hello','2017-11-19 19:05:29','2017-11-19 19:05:29'),(3,'Gsjs','Trane@',2866,'Yhf','2017-11-19 20:11:57','2017-11-19 20:11:57'),(4,'Gsjs','Trane@',2866,'Yhf','2017-11-19 20:15:23','2017-11-19 20:15:23'),(5,'Deepak','Dchdeepak@gmail.com',8898375465,'Hi friend','2017-11-20 10:31:44','2017-11-20 10:31:44');
/*!40000 ALTER TABLE `contactus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keywords`
--

DROP TABLE IF EXISTS `keywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keywords` (
  `KEYWORDID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `KEYWORD` varchar(200) NOT NULL,
  `CREATIONDATE` datetime NOT NULL,
  `UPDATIONDATE` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`KEYWORDID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keywords`
--

LOCK TABLES `keywords` WRITE;
/*!40000 ALTER TABLE `keywords` DISABLE KEYS */;
/*!40000 ALTER TABLE `keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locality`
--

DROP TABLE IF EXISTS `locality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `locality` (
  `LOCALITYID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `LOCALITYNAME` varchar(30) NOT NULL,
  `CITYID` int(11) NOT NULL,
  `CREATIONDATE` datetime NOT NULL,
  `UPDATIONDATE` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`LOCALITYID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locality`
--

LOCK TABLES `locality` WRITE;
/*!40000 ALTER TABLE `locality` DISABLE KEYS */;
INSERT INTO `locality` VALUES (1,'Rabale',21,'2017-11-12 11:25:11','2017-11-12 11:25:11'),(2,'Thane',21,'2017-11-12 11:25:28','2017-11-12 11:25:28');
/*!40000 ALTER TABLE `locality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `state` (
  `STATEID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `STATENAME` varchar(40) NOT NULL,
  `CREATIONDATE` datetime NOT NULL,
  `UPDATIONDATE` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`STATEID`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'Andaman Nicobar','2017-11-08 11:02:16','2017-11-08 11:10:31'),(2,'Andhra Pradesh','2017-11-08 11:02:33','2017-11-08 11:02:33'),(3,'Arunachal Pradesh','2017-11-08 11:02:46','2017-11-08 11:02:46'),(4,'Assam','2017-11-08 11:02:57','2017-11-08 11:02:57'),(5,'Bihar','2017-11-08 11:03:11','2017-11-08 11:03:11'),(6,'Chandigarh','2017-11-08 11:03:30','2017-11-08 11:03:30'),(7,'Chhattisgarh','2017-11-08 11:03:49','2017-11-08 11:03:49'),(8,'Dadra and Nagar Haveli','2017-11-08 11:04:21','2017-11-08 11:04:21'),(9,'Daman and Diu','2017-11-08 11:04:33','2017-11-08 11:04:33'),(10,'Delhi','2017-11-08 11:04:52','2017-11-08 11:04:52'),(11,'Goa','2017-11-08 11:05:07','2017-11-08 11:05:07'),(12,'Gujarat','2017-11-08 11:05:19','2017-11-08 11:05:19'),(13,'Haryana','2017-11-08 11:05:28','2017-11-08 11:05:28'),(14,'Himachal Pradesh','2017-11-08 11:05:38','2017-11-08 11:05:38'),(15,'Jammu and Kashmir','2017-11-08 11:05:50','2017-11-08 11:05:50'),(16,'Jharkhand','2017-11-08 11:05:59','2017-11-08 11:05:59'),(17,'Karnataka','2017-11-08 11:06:07','2017-11-08 11:06:07'),(18,'Kerala','2017-11-08 11:06:15','2017-11-08 11:06:15'),(19,'Lakshadweep','2017-11-08 11:06:54','2017-11-08 11:06:54'),(20,'Madhya Pradesh','2017-11-08 11:07:07','2017-11-08 11:07:07'),(21,'Maharashtra','2017-11-08 11:07:19','2017-11-08 11:07:19'),(22,'Manipur','2017-11-08 11:07:29','2017-11-08 11:07:29'),(23,'Meghalaya','2017-11-08 11:07:37','2017-11-08 11:07:37'),(24,'Mizoram','2017-11-08 11:07:49','2017-11-08 11:07:49'),(25,'Nagaland','2017-11-08 11:07:59','2017-11-08 11:07:59'),(26,'Odisha','2017-11-08 11:08:11','2017-11-08 11:08:11'),(27,'Puducherry','2017-11-08 11:08:47','2017-11-08 11:08:47'),(28,'Punjab','2017-11-08 11:08:56','2017-11-08 11:08:56'),(29,'Rajasthan','2017-11-08 11:09:03','2017-11-08 11:09:03'),(30,'Sikkim','2017-11-08 11:09:09','2017-11-08 11:09:09'),(31,'Tamil Nadu','2017-11-08 11:09:16','2017-11-08 11:09:16'),(32,'Telangana','2017-11-08 11:09:24','2017-11-08 11:09:24'),(33,'Tripura','2017-11-08 11:09:31','2017-11-08 11:09:31'),(34,'Uttar Pradesh','2017-11-08 11:09:42','2017-11-08 11:09:42'),(35,'Uttarakhand','2017-11-08 11:09:52','2017-11-08 11:09:52'),(36,'West Bengal','2017-11-08 11:10:01','2017-11-08 11:10:01');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategory` (
  `SUBID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `SUB_CATEGORYNAME` varchar(250) CHARACTER SET utf8 NOT NULL,
  `CATEGORYID` int(11) NOT NULL,
  PRIMARY KEY (`SUBID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (1,'new category',1);
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `tid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tagsname` varchar(120) NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `USERID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `USERNAME` varchar(30) NOT NULL,
  `MOBILENO` bigint(20) NOT NULL,
  `EMAILID` varchar(25) NOT NULL,
  `STATUS` enum('Confirm','Unconfirmed') NOT NULL,
  `USERPASSWORD` int(40) NOT NULL,
  `CREATIONDATE` datetime NOT NULL,
  `UPDATIONDATE` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`USERID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'deepak chauhan',8898375465,'dchdeepak@gmail.com','Confirm',123,'2017-11-04 15:36:10','2017-11-04 15:36:10');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-20 11:51:51
