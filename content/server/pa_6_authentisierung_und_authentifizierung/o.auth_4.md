---
title: O.Auth_4
desc_long: Jeder Authentifizierungsvorgang des Nutzers MUSS in Form einer Zwei Faktor Authentisierung umgesetzt werden.
desc_short: Zwei-Faktor-Authentisierung.
depth: examine
remarks: Der Evaluator prüft durch Quelltextanalyse und praktische Tests das Vorhandensein der Zwei-Faktor-Authentisierung. Insbesondere prüft er, ob die verwendeten Faktoren aus unterschiedlichen Kategorien stammen (Wissen, Besitz, Inhärenz) und mit dem in O.Auth_1 beschriebenem Konzept übereinstimmen.
---

## Ist E-Mail ein möglicher zweiter Faktor?

`Quelle: Gespräche mit TÜViT`

Nein. E-Mail ist kein gültiger zweiter Faktor.

## Ist das PassKey Verfahren ein MFA Verfahren?

`Quelle: Gespräche mit TÜViT`

Nein. Passkeys stellen einen einzelnen Faktor der Kategorie `Besitz` dar. Sie können jedoch mit anderen Faktoren aus den Kategorien `Wissen` oder `Inhärenz` im Rahmen eines MFA-Verfahrens genutzt werden.

## Gibt es offizelle Aussagen des BSI zu diesem Thema?

`Quelle: Internet Recherche/Gespräche mit TÜViT`

Ja. Unter anderem [hier](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Studien/2FA/it-sicherheit.pdf?__blob=publicationFile&v=3) und [hier](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Zwei-Faktor-Authentisierung/Bewertung-2FA-Verfahren/bewertung-2fa-verfahren_node.html). Es ist aber auch schon passiert, dass Dinge, die das BSI auf ihrer Homepage veröffentlicht hat, im Rahmen der Bewertung der TR-03161 anders ausgelegt wurden. Vgl. hierzu [PassKey](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Passkeys/passkeys-anmelden-ohne-passwort_node.html).
