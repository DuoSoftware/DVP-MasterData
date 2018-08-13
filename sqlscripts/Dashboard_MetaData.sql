--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.5

-- Started on 2017-10-12 19:14:14 +0530

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
-- TOC entry 2828 (class 0 OID 17941)
-- Dependencies: 347
-- Data for Name: Dashboard_MetaData; Type: TABLE DATA; Schema: public; Owner: duo
--

INSERT INTO "Dashboard_MetaData" VALUES ('SloatStatus', 'Available', 'AfterWork', 'AFTERWORK', -1, true, true, false, false, 0, 3, '2016-03-25 10:46:07.231086+05:30', '2016-03-25 10:46:07.231086+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('SloatStatus', 'Completed', 'AfterWork', 'AFTERWORK', 1, true, true, false, false, 0, 4, '2016-03-25 10:45:38.48465+05:30', '2016-03-25 10:45:38.48465+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'NotAvailable', 'Break', 'BREAK', 1, true, true, false, false, 0, 5, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'Available', 'EndBreak', 'BREAK', -1, true, true, false, false, 0, 6, '2016-03-25 10:35:16.337765+05:30', '2016-03-25 10:35:16.337765+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ARDS', 'REQUEST', 'REJECT', 'AGENTREJECT', 1, true, false, false, false, 0, 7, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('CALLSERVER', 'CHANNEL', 'CREATE', 'CALLCHANNELS', 1, true, false, false, false, 0, 10, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('CALLSERVER', 'CHANNEL', 'DESTROY', 'CALLCHANNELS', -1, true, false, false, false, 0, 11, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('CALLSERVER', 'CALL', 'CREATE', 'CALLS', 1, true, false, false, false, 0, 12, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ARDS', 'AGENT', 'ROUTED', 'ROUTEDCALLS', 1, true, false, false, false, 0, 13, '2016-04-20 18:10:15.83+05:30', '2016-04-20 18:10:15.83+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ARDS', 'QUEUE', 'DROPPED', 'QUEUEDROPPED', 1, true, false, false, false, 0, 14, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ARDS', 'QUEUE', 'ANSWERED', 'QUEUEANSWERED', 1, true, false, false, false, 0, 15, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'Available', 'Register', 'LOGIN', 1, true, true, false, false, 0, 18, '2016-03-25 10:32:51.757126+05:30', '2016-03-25 10:32:51.757126+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'NotAvailable', 'UnRegister', 'LOGIN', -1, true, true, false, false, 0, 19, '2016-03-25 10:33:51.155287+05:30', '2016-03-25 10:33:51.155287+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'NotAvailable', 'Meeting', 'BREAK', 1, true, true, false, false, 0, 25, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'NotAvailable', 'TeaBreak', 'BREAK', 1, true, true, false, false, 0, 21, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'NotAvailable', 'AUXBreak', 'BREAK', 1, true, true, false, false, 0, 23, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('Resource', 'Productivity', 'EndWorking', 'PRODUCTIVITY', -1, true, true, false, false, 0, 27, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('Resource', 'Productivity', 'StartWorking', 'PRODUCTIVITY', 1, true, true, false, false, 0, 26, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('SloatStatus', 'Connected', 'CALL', 'CONNECTED', 1, true, true, false, false, 0, 8, '2016-03-25 10:45:38.48465+05:30', '2016-03-25 10:45:38.48465+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('SloatStatus', 'Completed', 'CALL', 'CONNECTED', -1, true, true, false, false, 0, 9, '2016-03-25 10:45:38.48465+05:30', '2016-03-25 10:45:38.48465+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'NotAvailable', 'Training', 'BREAK', 1, true, true, false, false, 0, 40, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'NotAvailable', 'ProcessRelatedBreak', 'BREAK', 1, true, true, false, false, 0, 24, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'Reopen', 'REOPENTICKET', 1, false, false, false, false, 0, 41, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'firstCallResolution', 'FIRSTCALLRESOLUTION', 1, false, false, false, false, 0, 42, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'closed', 'CLOSEDTICKET', 1, false, false, false, false, 0, 39, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'NotAvailable', 'OfficialBreak', 'BREAK', 1, true, true, false, false, 0, 22, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ResourceStatus', 'NotAvailable', 'MealBreak', 'BREAK', 1, true, true, false, false, 0, 20, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'SLA', 'slaviolated', 'SLAVIOLATED', 1, false, false, false, false, 0, 43, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ARDS', 'QUEUE', 'ADDED', 'QUEUE', 1, true, true, false, true, 10, 1, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('ARDS', 'QUEUE', 'REMOVED', 'QUEUE', -1, true, true, false, true, 10, 2, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'new', 'NEWTICKET', 1, false, true, true, false, 0, 28, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'Endnew', 'NEWTICKET', -1, false, true, true, false, 0, 29, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'open', 'OPENTICKET', 1, false, true, true, false, 0, 30, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'Endopen', 'OPENTICKET', -1, false, true, true, false, 0, 32, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'progressing', 'PROGRESSINGTICKET', 1, false, true, true, false, 0, 33, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'Endprogressing', 'PROGRESSINGTICKET', -1, false, true, true, false, 0, 34, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'parked', 'PARKEDTICKET', 1, false, true, true, false, 0, 35, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'Endparked', 'PARKEDTICKET', -1, false, true, true, false, 0, 36, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'solved', 'SOLVEDTICKET', 1, false, true, true, false, 0, 37, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'STATUS', 'Endsolved', 'SOLVEDTICKET', -1, false, true, true, false, 0, 38, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'RESOLUTION', 'new', 'TICKETRESOLUTION', 1, false, true, true, false, 0, 44, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('TICKET', 'RESOLUTION', 'closed', 'TICKETRESOLUTION', -1, false, true, true, false, 0, 45, '2016-03-25 10:34:46.787778+05:30', '2016-03-25 10:34:46.787778+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('CALLSERVER', 'CALL', 'HOLD', 'AGENTHOLD', 1, true, true, false, false, 0, 46, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('CALLSERVER', 'CALL', 'UNHOLD', 'AGENTHOLD', -1, true, true, false, false, 0, 47, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('CALLSERVER', 'CALL', 'TRANSFER', 'AGENTTRANSFER', 1, true, false, false, false, 0, 48, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('CALLSERVER', 'CALL', 'BRIDGE', 'BRIDGE', 1, true, true, false, false, 0, 16, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');
INSERT INTO "Dashboard_MetaData" VALUES ('CALLSERVER', 'CALL', 'UNBRIDGE', 'BRIDGE', -1, true, true, false, false, 0, 17, '2016-03-01 01:33:26.965+05:30', '2016-03-01 01:33:26.965+05:30');


--
-- TOC entry 2833 (class 0 OID 0)
-- Dependencies: 346
-- Name: Dashboard_MetaData_DashboardMetaDataId_seq; Type: SEQUENCE SET; Schema: public; Owner: duo
--

SELECT pg_catalog.setval('"Dashboard_MetaData_DashboardMetaDataId_seq"', 2, true);


-- Completed on 2017-10-12 19:14:17 +0530

--
-- PostgreSQL database dump complete
--

