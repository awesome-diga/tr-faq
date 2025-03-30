---
title: O.Data_2
desc_long: Die Anwendung MUSS sensible Daten verschlüsselt speichern. Die betriebssystemeigene Verschlüsselung des Dateisystems genügt nicht. Das Schlüsselmaterial für diese Verschlüsselung DARF NICHT unverschlüsselt persistiert werden. Dies gilt sowohl für flüchtiges Ablegen (z. B. im Arbeitsspeicher), als auch für dauerhaftes Speichern (z. B. in einer Cloud-Umgebung). Eine hardwareunterstützte Schlüsselverwaltung der Plattform SOLL bevorzugt verwendet werden.
desc_short: Verschlüsselung aller sensiblen Daten.
depth: examine
remarks: Der Evaluator validiert, dass sensible Daten (s. Anhang A) von der Anwendung nur verschlüsselt gespeichert werden können. Der Evaluator prüft weiterhin, ob eine hardwaregestützte Schlüsselverwaltung des Betriebssystems für die Speicherung der hierfür notwendigen Schlüssel verwendet wird. Ist ein hinreichender Schutz der Schlüssel durch die Plattform sichergestellt (z. B. in einem embedded Secure Element/Trusted Execution Environment), muss die Anwendung diese Schlüssel wirksam gegen Offenlegung schützen. Der Evaluator nimmt die Wirksamkeit gegenüber Reverse Engineering in die Risikobewertung auf.
---

## Noch keine Inhalte

Du kannst diese Seite unter [github.com/awesome-diga](https://github.com/awesome-diga/tr-faq) mit deinem Wissen ergänzen.
