---
title: O.Data_5
desc_long: Sensible Daten wie private Schlüssel DÜRFEN NICHT aus der Komponente, auf der sie erzeugt wurden, exportiert werden, außer es ist für den rechtmäßigen Zweck der Anwendung notwendig (s. Tabelle 15).
desc_short: Kein Export sensibler Daten aus der Quelle.
depth: examine
remarks: Der Evaluator prüft, ob sensible Daten aus der Komponente, auf der sie erzeugt wurden, exportiert werden und ob dies für den Zweck notwendig ist.
---

## Wie ist dies Anforderung im Bezug auf TLS terminierende Systeme zu verstehen?

`Quelle: QnA TÜViT`

> TLS Zertifikate und Schlüssel sollten auf dem terminierenden System erzeugt und insbesondere private Schlüssel nicht von dort exportiert werden.

Dies ist, je nach Technologiestack und verwendeten Zertifikaten vermutlich schwer möglich. Seitens TÜV wurden gängige Verfahren zur Verwaltung, wie zum Beispiel [cert-manager](https://cert-manager.io/) während der Prüfung akzeptiert.
