--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.5

-- Started on 2017-10-12 18:45:39 +0530

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
-- TOC entry 2828 (class 0 OID 16933)
-- Dependencies: 222
-- Data for Name: CSDB_FileCategories; Type: TABLE DATA; Schema: public; Owner: duo
--

INSERT INTO "CSDB_FileCategories" VALUES (3, 'user', 'HOLDMUSIC', true, false, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "CSDB_FileCategories" VALUES (2, 'user', 'VOICEMAIL', true, false, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "CSDB_FileCategories" VALUES (1, 'user', 'CONVERSATION', true, false, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "CSDB_FileCategories" VALUES (4, 'user', 'IVRCLIPS', true, false, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "CSDB_FileCategories" VALUES (5, 'user', 'TICKET_ATTACHMENTS', true, false, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "CSDB_FileCategories" VALUES (6, 'user', 'REPORTS', true, false, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "CSDB_FileCategories" VALUES (7, 'user', 'PROFILE_PICTURES', true, false, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "CSDB_FileCategories" VALUES (8, 'user', 'NOTICE_ATTACHMENTS', true, false, '2017-04-27 00:00:00+05:30', '2017-04-27 00:00:00+05:30');
INSERT INTO "CSDB_FileCategories" VALUES (9, 'user', 'CHAT_ATTACHMENTS', true, false, '2017-02-12 00:00:00+05:30', '2017-01-12 00:00:00+05:30');


--
-- TOC entry 2833 (class 0 OID 0)
-- Dependencies: 221
-- Name: CSDB_FileCategories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: duo
--

SELECT pg_catalog.setval('"CSDB_FileCategories_id_seq"', 9, true);


-- Completed on 2017-10-12 18:45:42 +0530

--
-- PostgreSQL database dump complete
--

