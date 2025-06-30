---
title: O.Auth_8
desc_long: Wurde die Anwendung unterbrochen (in den Hintergrundbetrieb versetzt), MUSS nach Ablauf einer angemessenen Frist (Grace Period) eine erneute Authentisierung durchgeführt werden.
desc_short: Erneute Authentifizierung bei unterbrochener Anwendung.
depth: check
remarks: Der Evaluator validiert, dass nach einer der Anwendung angemessenen Zeit, in der sie in den Hintergrundmodus versetzt wurde, eine erneute Authentifizierung erfolgen muss. Die Güte der geforderten Authentifizierung muss dem Vertrauensniveau angemessen sein (vgl. O.Auth_3).
---

Bei dieser Anforderung muss eine angemessenen Frist definieren, aber Achtung: Das BSI hat genau Vorstellungen. 5 Minuten scheinen als Grace-Period akzeptiert zu werden. Längere Zeiten müssen separat begründet werden und führen vermutlich zu einem FAIL des Kriteriums, möglicherweise aber nicht zum Scheitern der gesamten Zertifizierung.

"erneute Authentisierung" ist in Kombination mit O.Auth_3 zu betrachten.

Hierbei müssen BSI-Zertifizierte Produkte beobachtet werden, welche Zeiten zertifizierbar sind.

