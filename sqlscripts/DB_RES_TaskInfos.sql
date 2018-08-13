--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.5

-- Started on 2017-10-12 18:41:45 +0530

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

--
-- TOC entry 2828 (class 0 OID 17694)
-- Dependencies: 317
-- Data for Name: DB_RES_TaskInfos; Type: TABLE DATA; Schema: public; Owner: duo
--

INSERT INTO "DB_RES_TaskInfos" VALUES ('CALL', 'CALL', 'CALL', 'CALL', NULL, true, 1, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "DB_RES_TaskInfos" VALUES ('TICKET', 'TICKET', 'TICKET', 'TICKET', NULL, true, 2, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "DB_RES_TaskInfos" VALUES ('CHAT', 'CHAT', 'CHAT', 'CHAT', NULL, true, 3, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "DB_RES_TaskInfos" VALUES ('SMS', 'SMS', 'SMS', 'SMS', NULL, true, 4, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "DB_RES_TaskInfos" VALUES ('SOCIAL', 'SOCIAL', 'SOCIAL', 'SOCIAL', NULL, true, 5, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');


--
-- TOC entry 2833 (class 0 OID 0)
-- Dependencies: 316
-- Name: DB_RES_TaskInfos_TaskInfoId_seq; Type: SEQUENCE SET; Schema: public; Owner: duo
--

SELECT pg_catalog.setval('"DB_RES_TaskInfos_TaskInfoId_seq"', 4, true);


-- Completed on 2017-10-12 18:41:52 +0530

--
-- PostgreSQL database dump complete
--

