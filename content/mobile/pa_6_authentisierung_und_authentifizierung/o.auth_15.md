---
title: O.Auth_15
desc_long: Wird eine Anwendungssitzung ordnungsgemäß beendet, MUSS die Anwendung das Hintergrundsystem darüber informieren, sodass Session-Identifier bzw. Authentisierungstoken sicher gelöscht werden. Dies gilt sowohl für das aktive Beenden durch den Benutzer (log-out), als auch für das automatische Beenden durch die Anwendung (vgl. O.Auth_9 und O.Auth_10).
desc_short: Benachrichtigung des Hintergrundsystems über beendete Anwendungssitzungen durch die Anwendung
depth: check
remarks: Der Evaluator prüft, ob das Hintergrundsystem bei einer ordnungsgemäßen Beendigung der Anwendungssitzung durch die Anwendung informiert wird.
---

Backend und die App sollten immer zusammen gedacht werden. Bei einem Logout-Vorgang reicht es nicht, wenn Session Tokens auf dem Smartphone gelöscht werden, es muss auch ein call an das backend gerichtet werden, damit auch auf der Seite des Backends Tokens invalidiert werden.

Hierbei werden explizit, die inactive-time (O.Auth_9) und die active time (O.Auth_10) genannt, d.h. man kann davon ausgehen, dass diese Fälle geprüft werden.