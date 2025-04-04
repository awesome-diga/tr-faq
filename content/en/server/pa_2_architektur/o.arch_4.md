---
title: O.Arch_4
desc_long: In Backups gespeicherte sensible Daten MÜSSEN gemäß dem Stand der Technik verschlüsselt sein.
desc_short: Keine unverschlüsselten sensiblen Daten in Backups.
depth: examine
remarks: Der Evaluator prüft durch Quelltextanalyse und praktische Tests, ob sensible Daten unverschlüsselt in Backups vorhanden sind.
---

## Was genau ist mit 'in' Backups gemeint?

`Quelle: Gespräche mit TÜViT`

Hier gibt es scheinbar zumindest 2 gängige Auslegungen der Prüfstellen.
Auslegung 1 ist, dass **in** hier nicht auf die Inhalte der Backups abstellt, sondern darauf, dass Backup-Dateien selbst nicht unverschlüsselt sein dürfen. Auslegung 2 ist, dass der Inhalt einer Backup-Datei nicht unverschlüsselt sein darf.

Folgend Auslegung 1 wäre ein, zum Beispiel mit PGP verschlüsselter, SQL-Dump erfüllend. Nach Auslegung 2 nicht. Welches Format genau Auslegung 2 erfüllen würde, ist unklar.

Praktisch wurde die Verwendung der Backup-Funktionalität des Cloudanbieters bei aktiver Verschlüsselung mit Customer Managed Key im Cloudanbieter KMS akzeptiert.
