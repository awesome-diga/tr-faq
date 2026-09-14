---
title: O.Auth_9
desc_long: Die Anwendung MUSS nach einer angemessenen Zeit in der sie nicht aktiv verwendet wurde (idle time) eine erneute Authentisierung fordern.
desc_short: Erneute Authentifizierung nach angemessenen Zeit in der die Anwendung nicht aktiv verwendet wurde.
depth: check
remarks: Der Evaluator validiert, dass nach einer der Anwendung angemessenen Zeit, in der sie nicht aktiv verwendet wurde, eine erneute Authentifizierung erfolgen muss. Die Güte der geforderten Authentifizierung muss dem Vertrauensniveau angemessen sein (vgl. O.Auth_3).
---

Bei dieser Anforderung muss eine angemessenen Frist definieren, aber Achtung: Das BSI hat genau Vorstellungen. 30 Minuten scheinen als idle-time akzeptiert zu werden. Längere Zeiten müssen separat begründet werden und führen vermutlich zu einem FAIL des Kriteriums, möglicherweise aber nicht zum Scheitern der gesamten Zertifizierung.

"erneute Authentisierung" ist in Kombination mit O.Auth_3 zu betrachten.

Hierbei müssen BSI-Zertifizierte Produkte beobachtet werden, welche Zeiten zertifizierbar sind.