---
title: O.Auth_7
desc_long: Die Anwendung MUSS Maßnahmen umsetzen, die ein Ausprobieren von Login-Parametern (z. B. Passwörter) erschweren.
desc_short: Verhinderung des Ausprobierens von Login-Parametern.
depth: check
remarks: Der Evaluator validiert, dass ein Ausprobieren von Login-Parametern verhindert wird. Dies kann beispielsweise durch Verzögerung nachfolgender Login-Versuche oder den Einsatz von sogenannten Captchas erreicht werden.
---

Es muss ein Brute-Force Schutz implementiert werden, z.B. rate-limiting.
