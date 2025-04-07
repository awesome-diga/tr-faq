---
title: O.Source_6
desc_long: Bei Programmumgebungen mit manueller Speicherverwaltung (d.h., die Anwendung kann selbst exakt festlegen, wann und wo Speicher gelesen und beschrieben wird) MUSS die Anwendung für lesende und schreibende Zugriffe auf Speichersegmente auf sichere Funktionsalternativen (z. B. printf_s statt printf) zurückgreifen.
desc_short: Nutzung von sicheren Funktionsalternativen beim Zugriff auf Speichersegmente.
depth: examine
remarks: Der Evaluator prüft durch Quelltextanalyse, ob die Anwendung auf unsichere Funktionen zum Zugriff auf den Speicher zurückgreift. Die Prüfung umfasst sämtlichen vom Hersteller implementierten Quelltext. Externe Drittanbieter- Software wird in den O.TrdP Testcharakteristiken behandelt.
---

## Noch keine Inhalte

Du kannst diese Seite unter [github.com/awesome-diga](https://github.com/awesome-diga/tr-faq) mit deinem Wissen ergänzen.
