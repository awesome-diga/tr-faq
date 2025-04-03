---
title: O.Arch_7
desc_long: Das Hintergrundsystem MUSS alle Anfragen der Anwendung über eine vollständig dokumentierte API entgegennehmen. Es DARF KEINE nicht dokumentierten Zugriffsmöglichkeiten enthalten.
desc_short: Vollständig dokumentierte API.
depth: check
remarks: Der Evaluator prüft durch Quelltextanalyse und praktische Tests, ob die Dokumentation der API die tatsächliche Funktionalität vollständig abdeckt.
---

## Was soll mit dieser Anforderung verhindert werden?

`Quelle: Gespräche mit TÜViT`

Diese Anforderung soll verhindern, dass beim Prüfen der Anwendung Teile der API, die eigentlich im Scope sind, nicht geprüft werden.

## Welche Art von Dokumentation ist gefordert?

`Quelle: Gespräche mit TÜViT`

Die Dokumentation kann in verschiedenen Formen vorliegen. Zum Beispiel OpenAPI Spec, Ergebnisse von Introspection Queries oder Ähnliches. Bei GraphQL ist auch eine Dokumentation im Quellcode und Verweise darauf in Ordnung.
