---
title: O.Arch_8
desc_long: Die Web-Anwendung MUSS beim Start die Aktualität des genutzten Web-Browsers prüfen. Wenn die Installation eines sicherheitsrelevanten Updates noch nicht erfolgt ist, DARF die Web-Anwendung KEINEN Zugriff auf sensible Daten ermöglichen.
desc_short: Prüfung auf Aktualität des genutzten Web-Browsers.                  
depth: check
remarks: Der Evaluator prüft, ob ein Zugriff auf sensible Daten mit einer veralteten Browserversion möglich ist. Das Hintergrundsystem kann im Rahmen der Verbindungsaufnahme durch den Web-Browser über Informationen im HTTP-Header prüfen, welche Version des Web- Browser genutzt wird. Allerdings ist das Hintergrundsystem auf die Kooperation des Web-Browsers angewiesen und kann diese Informationen nicht authentisch ermitteln. Es kann davon ausgegangen werden, dass der Nutzer seinerseits keinen unerlaubten Web- Browser mit einer gefälschten Browser-Kennung verwendet, da er sich an die Nutzungsbedingungen hält (vgl. OSP.User).
---

## Noch keine Inhalte

Du kannst diese Seite unter [github.com/awesome-diga](https://github.com/awesome-diga/tr-faq) mit deinem Wissen ergänzen.
