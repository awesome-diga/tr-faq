---
title: O.Auth_11
desc_long: Die Authentisierungsdaten DÜRFEN NICHT ohne eine erneute Authentifizierung des Nutzers geändert werden.
desc_short: Ausreichende Authentifizierung des Nutzers für Änderung der Authentisierungsdaten.
depth: examine
remarks: Der Evaluator prüft, ob er ohne angemessene Authentifizierung die Authentisierungsdaten verändern kann. Dies betrifft auch einen Ablauf zum Passwort zurücksetzen. Beruht dieser Ablauf bspw. auf Sicherheitsabfragen, darf die Antwort nicht einfach zu erraten oder gar aus möglicherweise öffentlichen Informationen ermittelbar sein (z.B. Mädchenname der Mutter).
---

Dieser Fall sollte im Konzept von O.Auth_1 bereits abgedeckt sein: Was passiert, wenn der Nutzer einen Faktor verliert?

"erneute Authentisierung" ist in Kombination mit O.Auth_3 zu betrachten und muss zwei Faktoren aus zwei Bereichen (Wissen, Besitz und/oder Inhärenz) beinhalten.

Achtung: Es stellt kein Sicherheitsproblem dar, wenn der Nutzer durch den Verlust eines Authentisierungsfaktors den Zugang zu App verliert. Das ist zwar schlechte UX und bringt möglicherweise andere rechtliche Fragestellungen auf, aber rein auf Informationssicherheit nach der BSI TR betrachtet sollte dieses Vorgehen zertifizierbar sein.
