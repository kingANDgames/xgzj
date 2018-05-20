-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 05 月 20 日 07:47
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `xgzj`
--
CREATE DATABASE `xgzj` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `xgzj`;

-- --------------------------------------------------------

--
-- 表的结构 `fenlei1`
--

CREATE TABLE IF NOT EXISTS `fenlei1` (
  `num` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(100) CHARACTER SET utf8 NOT NULL,
  `pirce` varchar(10) CHARACTER SET utf8 NOT NULL,
  `fpirce` varchar(10) CHARACTER SET utf8 NOT NULL,
  `exl` varchar(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`num`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `fenlei1`
--

INSERT INTO `fenlei1` (`num`, `url`, `pirce`, `fpirce`, `exl`) VALUES
(1, 'http://www.xianguozhijia.com/images/201706/thumb_img/664_thumb_G_1497769432683.jpg', '138.0', '220.0', '美国进口水果车厘子2磅908克 美国加州'),
(2, 'http://www.xianguozhijia.com/images/201706/thumb_img/649_thumb_G_1496303378417.jpg', '46.0', '73.0', '澳大利亚无籽红提2斤装 澳洲提子葡萄'),
(3, 'http://www.xianguozhijia.com/images/201706/thumb_img/646_thumb_G_1496302616526.jpg', '109.0', '174.0', '澳洲金手指无籽黑提2斤 新鲜黑手指美人'),
(4, 'http://www.xianguozhijia.com/images/201705/thumb_img/642_thumb_G_1496217574046.jpg', '88.0', '140.0', 'Yummy新西兰Ambrosia苹果8个'),
(5, 'http://www.xianguozhijia.com/images/201705/thumb_img/641_thumb_G_1496217343962.jpg', '70.0', '112.0', '新西兰Jazz爵士苹果8个140g以上/'),
(6, 'http://www.xianguozhijia.com/images/201705/thumb_img/640_thumb_G_1496217023822.jpg', '49.0', '78.0', 'Appolonia波兰Gala嘎啦果8个'),
(7, 'http://www.xianguozhijia.com/images/201705/thumb_img/638_thumb_G_1496216356533.jpg', '79.0', '126.0', '美国华盛顿品纳塔苹果8个约220g/个 '),
(8, 'http://www.xianguozhijia.com/images/201705/thumb_img/637_thumb_G_1496216137838.jpg', '49.0', '78.0', '浙江特产仙居荸荠杨梅4斤装');

-- --------------------------------------------------------

--
-- 表的结构 `gwc`
--

CREATE TABLE IF NOT EXISTS `gwc` (
  `id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `index` tinyint(1) unsigned NOT NULL,
  `iurl` varchar(100) CHARACTER SET utf8 NOT NULL,
  `exl` varchar(20) CHARACTER SET utf8 NOT NULL,
  `price` varchar(10) CHARACTER SET utf8 NOT NULL,
  `num` tinyint(1) NOT NULL,
  `zprice` varchar(10) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `gwc`
--

INSERT INTO `gwc` (`id`, `index`, `iurl`, `exl`, `price`, `num`, `zprice`) VALUES
(1, 1, 'http://www.xianguozhijia.com/images/201510/thumb_img/354_thumb_P_1446077902902.jpg', '【现摘】云南蒙自特级甜枇杷3斤 新鲜水果', '139.0', 1, '139.0'),
(3, 255, '3333', '33', '33', 33, '33');

-- --------------------------------------------------------

--
-- 表的结构 `koubei`
--

CREATE TABLE IF NOT EXISTS `koubei` (
  `num` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(100) CHARACTER SET utf8 NOT NULL,
  `price` varchar(10) CHARACTER SET utf8 NOT NULL,
  `exl` varchar(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`num`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `koubei`
--

INSERT INTO `koubei` (`num`, `imgurl`, `price`, `exl`) VALUES
(1, 'http://www.xianguozhijia.com/images/201510/thumb_img/340_thumb_G_1446071784133.jpg', '498.0', '智利甜心车厘子樱桃J 5斤装'),
(2, 'http://www.xianguozhijia.com/images/201510/thumb_img/345_thumb_G_1446072965604.jpg', '56.0', '现货 台湾芭乐珍珠番石榴 5斤装'),
(3, 'http://www.xianguozhijia.com/images/201512/thumb_img/439_thumb_G_1450081103503.jpg', '69.0', '海南蜜宝红心火龙果2.5kg'),
(4, 'http://www.xianguozhijia.com/images/201510/thumb_img/330_thumb_G_1445911890923.jpg', '118.0', '新鲜进口山竹3斤 死竹坏果包赔'),
(5, 'http://www.xianguozhijia.com/images/201510/thumb_img/336_thumb_G_1446003094375.jpg', '96.0', '佳沛新西兰鸭嘴金奇异果8粒 进口黄肉猕猴'),
(6, 'http://www.xianguozhijia.com/images/201510/thumb_img/337_thumb_G_1446003251028.jpg', '148.0', '新西兰进口佳沛阳光金奇异果12粒(单个9'),
(7, 'http://www.xianguozhijia.com/images/201510/thumb_img/338_thumb_G_1446003366236.jpg', '139.0', '新西兰佳沛绿奇异果16粒(单个约105g'),
(8, 'http://www.xianguozhijia.com/images/201512/thumb_img/449_thumb_G_1450245595331.jpg', '79.0', '陕西翠香甜心猕猴桃2kg原箱（22-24');

-- --------------------------------------------------------

--
-- 表的结构 `lfenlei`
--

CREATE TABLE IF NOT EXISTS `lfenlei` (
  `num` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(100) CHARACTER SET utf8 NOT NULL,
  `exl` varchar(20) CHARACTER SET utf8 NOT NULL,
  `color` varchar(7) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`num`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `lfenlei`
--

INSERT INTO `lfenlei` (`num`, `url`, `exl`, `color`) VALUES
(1, 'http://www.xianguozhijia.com/data/afficheimg/1452326120976397741.jpg', '进口水果', '#adcd7c'),
(2, 'http://www.xianguozhijia.com/data/afficheimg/1416855525072158827.jpg', '国产水果', '#d12e49'),
(3, 'http://www.xianguozhijia.com/data/afficheimg/1416857143577228903.jpg', '水果礼盒', '#aed1a9'),
(4, 'http://www.xianguozhijia.com/data/afficheimg/1416783269946371731.jpg', '水果礼品卡', '#f6ba74');

-- --------------------------------------------------------

--
-- 表的结构 `xinxi`
--

CREATE TABLE IF NOT EXISTS `xinxi` (
  `num` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 NOT NULL,
  `email` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` varchar(40) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`num`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `xinxi`
--

INSERT INTO `xinxi` (`num`, `username`, `email`, `password`, `phone`) VALUES
(2, 'zhangsan', 'zhangsan@qq.com', 'b0baee9d279d34fa1dfd71aadb908c3f', '11111111111'),
(3, 'wangwu', 'wangwu@qq.com', 'b0baee9d279d34fa1dfd71aadb908c3f', '11111111111'),
(5, 'zhaosi', 'zhaosi@qq.com', '7fa8282ad93047a4d6fe6111c93b308a', '11111111111'),
(6, 'qianliu', 'qianliu@qq.com', '8e33b486b10ebfb61ace1aaa96508708', '11111111111');
