---
title: O.Auth_10
desc_long: Die Anwendung MUSS nach einer angemessenen Zeit in der sie aktiv verwendet wurde (active time) eine erneute Authentisierung zur Reaktivierung der Serversitzung fordern.
desc_short: Erneute Authentifizierung nach angemessenen Zeit in der die Anwendung dauerhaft aktiv verwendet wurde.
depth: check
remarks: Der Evaluator validiert, dass nach einer der Anwendung angemessenen Zeit, in der sie dauerhaft aktiv verwendet wurde, eine erneute Authentifizierung erfolgen muss. Die Güte der geforderten Authentifizierung muss dem Vertrauensniveau angemessen sein (vgl. O.Auth_3).
---

Bei dieser Anforderung muss eine angemessenen Frist definieren, aber Achtung: Das BSI hat genau Vorstellungen. 60 Minuten scheinen als active-time akzeptiert zu werden. Längere Zeiten müssen separat begründet werden und führen vermutlich zu einem FAIL des Kriteriums, möglicherweise aber nicht zum Scheitern der gesamten Zertifizierung.

"erneute Authentisierung" ist in Kombination mit O.Auth_3 zu betrachten.

Hierbei müssen BSI-Zertifizierte Produkte beobachtet werden, welche Zeiten zertifizierbar sind.