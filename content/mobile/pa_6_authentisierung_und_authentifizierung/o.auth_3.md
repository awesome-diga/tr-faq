---
title: O.Auth_3
desc_long: Jeder Authentifizierungsvorgang des Nutzers MUSS in Form einer Zwei-Faktor-Authentisierung umgesetzt werden.
desc_short: Zwei-Faktor-Authentisierung.
depth: examine
remarks: Der Evaluator prüft durch Quelltextanalyse und praktische Tests das Vorhandensein und die Güte der Zwei-Faktor- Authentisierung. Insbesondere prüft er, ob die verwendeten Faktoren aus unterschiedlichen Kategorien stammen (Wissen und Besitz) und mit dem in O.Auth_1 beschriebenem Konzept übereinstimmen.
---

Diese Anforderung besagt, dass Authentisierung immer mit 2FA aus zwei Kategorien (Wissen, Besitz und/oder Inhärenz) erfolgen muss. Soweit so einfach.

Implizit heißt diese Anforderung auch, dass jedes andere Requirement in dem Standard, welches von einer Authentifizierung spricht in Kombination mit O.Auth_3 immer eine 2FA bedeutet (Beispiel O.Auth_11 mobile).