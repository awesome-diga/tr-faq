---
title: O.Source_2
desc_long: Die Anwendung MUSS eingehende und ausgehende Daten maskieren beziehungsweise von potenziell schadhaften Zeichen bereinigen oder deren Verarbeitung ablehnen.
desc_short: Nutzung einer Escape-Syntax bei strukturierten Daten.                      
depth: check
remarks: Der Evaluator prüft, ob eine Escape- Syntax von strukturierten Daten für alle Eingaben vorhanden ist. Schadhafte Zeichen sind kontextabhängig zu betrachten. Im Datenbank-Kontext sind beispielsweise Hochkommata oder Prozentzeichen gegebenenfalls schadhaft, während im Web/HTML Kontext eher Tag-Klammern (<) schadhaft sind. Grundsätzlich muss die Input-Validierung daher kontextbezogen stattfinden. Wird eine potenziell schädliche Eingabe erkannt, muss sie entweder bereinigt/maskiert oder abgelehnt/verworfen werden. Das Verwerfen sollte dem Bereinigen vorgezogen werden. Sofern vorher maskierte oder bereinigte Eingaben weitergegeben werden, müssen diese so maskiert oder enkodiert werden, dass sie im Kontext der Weitergabe keine schädlichen Effekte haben.
---

## Noch keine Inhalte

Du kannst diese Seite unter [github.com/awesome-diga](https://github.com/awesome-diga/tr-faq) mit deinem Wissen ergänzen.
