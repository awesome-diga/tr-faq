---
title: O.Cryp_4
desc_long: Kryptographische Schlüssel DÜRFEN NICHT für mehr als genau einen Zweck eingesetzt werden. Der Hersteller des Hintergrundsystems MUSS ein Verschlüsselungskonzept vorlegen, aus dem alle verwendeten Schlüssel und deren Hierarchien hervorgehen.
desc_short: Zweckbindung kryptographischer Schlüssel.
depth: examine
remarks: Der Evaluator prüft die verwendeten kryptographischen Schlüssel auf ihre Zweckgebundenheit. Es wird der Zweck nach Schutz durch Verschlüsselung und Authentisierung unterschieden.
---

## Muss hier tatsächlich eine Liste aller Schlüssel erstellt werden?

`Quelle: QnA mit TÜViT`

Die initiale Antwort war hier ein Ja. Selbst wenn die Schlüssel mit hoher Frequenz (<=24h) rotiert werden. In der Praxis wurde dann eine Liste der Schlüssel nach Verwendungszweck mit ggf. einem konkreten Beispiel akzetiert.

### Beispiel

| Identifier    | Usage                  | KeyID | Remarks           |
| ------------- | ---------------------- | ----- | ----------------- |
| Workload Keys | mTLS between workloads | 1234  | rotates every 12h |
