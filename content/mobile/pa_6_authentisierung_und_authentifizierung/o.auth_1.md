---
title: O.Auth_1
desc_long: Der Hersteller MUSS ein Konzept zur Authentisierung auf angemessenem Vertrauensniveau (vgl. [TR03107-1]), zur Autorisierung (Rollenkonzept) und zum Beenden einer Anwendungssitzung dokumentieren.
desc_short: Herstellerkonzept zur Authentisierung , Autorisierung und Beenden von Anwendungssitzungen.
depth: check
remarks: Der Evaluator prüft das vom Hersteller bereitgestellt Konzept zur Authentisierung, Autorisierung und Beenden der Anwendungssitzung. Er bewertet die Güte der eingesetzten Verfahren Anhand des aktuellen Standes der Technik. Nach Einschätzung des BSI existieren aktuell keine Verbraucherendgeräte, die in einem unüberwachten Anwendungsszenario Biometrie zur Identifikation oder Authentisierung auf einem Vertrauensniveau „hoch“ einsetzen können.
---

Im Allgemeinen handelt es sich bei dieser Anforderung um eine Dokumentationsanforderung. D.h. es muss ein dokumentiertes (geschriebenes) Konzept existieren. Natürlich sollte dieses Konzept dann auch technisch umgesetzt sein.

Hierfür ist unbedingt die [BSI-FAQ](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03161/TR-03161-FAQ/FAQ-TR-03161_node.html) Frage zu akzeptierten Authentisierungsverfahren zu beachten (Frage: "Welche Authentisierungsverfahren sind im Rahmen der TR-Zertifizierung zulässig?").

Zusätzlich ist es wichtig den Unterschied zwischen einem substanziellen und einem hohen Vertrauenniveau zu verstehen. Hoch steht hierbei über substanziell. Achtung: Das BSI bezeichnet in seiner FAQ die substanziellen Faktoren als "mit niedrigem Sicherheitsniveau". Der Unterschied ist jedoch, dass der Nutzer sich bei einem hohen Vertrauensniveau eindeutig identifizieren muss (z.B. per Perso oder per eGK) und bei einem substanziellen Niveau aktuelle technische Verfahren eingesetzt werden und den Zugang abzusichern, ohne jedoch die Identität des Nutzer festzustellen. 

Ein Kozept besagt nun, welche Faktoren in welchen Fällen verwendet werden. Die Fälle, die es zu bedenken gilt sind:
- Sign-up (Account Erstellung)
- Login
- Reset von Faktoren

Jede Authentisierung muss immer mit zwei Faktoren aus zwei Kategorien erfolgen (Wissen, Besitz & Inhärenz, d.h. Biometrie).

### Beispiel 1 - 2FA mit "nur" 2 Faktoren

1. Faktor: Nutzername + Passwort (Wissen)
2. Faktor: TOTP ()

Gehen wir durch die 3 Fälle:
- **Sign-Up**: 
  - Laut BSI-FAQ handelt es sich in beiden Fällen um substanzielle Faktoren, d.h. es braucht eine Einwilligung in die Nutzer dieser Faktoren (Connection zu O.Purp_5: der Nutzer muss eine Einwilligung Widerrufen können; was in diesem Beispiel nur zur Löschung des Accounts führen kann)
  - Der Nutzer setzt seinen Benutzernamen und sein Passwort
  - Der Nutzer speichert das TOTP secret und gibt einen Test code ein
- **Login**: 
  - Der Nutzer loggt sich mit Nutzername, Passwort und TOTP code ein
- **Reset von Faktoren**:
  - O.Auth_11 besagt, dass eine Änderung eines Authentisierungsfaktors erst nach einer Authentisierung erfolgen darf
  - O.Auth_3 besagt, dass jede Authentisierung 2FA sein muss.
  - O.Auth_11 und O.Auth_3 in Kombination führen dazu, dass der Nutzer in diesem Fall keinen seiner Faktoren resetten kann, denn wenn er einen vergessen hat, gibt es nur noch einen weiteren Faktor und dieser reicht nicht aus für eine Authentisierung nach O.Auth_3
  - Achtung: O.Pass_3 besagt, dass man sein Passwort ändern können muss. In diesem Beispiel wird das durch die fehlende Möglichkeit eine 2FA Authentisierung verhindert, d.h. man würde einen FAIL auf O.Pass_3 bekommen. Es ist unbekannt, ob dieser dazu führt, dass man nicht zertifizierbar ist. Dieses Beispiel dient daher mehr dazu Verständnis für ein "Authentisierungskonzept" zu schaffen, also eine reale Implementierungs-Anleitung zu sein.

### Beispiel 2 - 2FA mit 4 Faktoren - jeder einzelne resetbar

1. Faktor: Nutzername + Passwort (Wissen)
2. Faktor: System-PIN (Wissen)
3. Faktor: TOTP (Besitz)
4. Faktor: Gerätebindung (Besitz)

Gehen wir durch die 3 Fälle:
- **Sign-Up**: 
  - Laut BSI-FAQ handelt es sich in allen Fällen um substanzielle Faktoren, d.h. es braucht eine Einwilligung in die Nutzer dieser Faktoren (Connection zu O.Purp_5: der Nutzer muss eine Einwilligung Widerrufen können; was in diesem Beispiel nur zur Löschung des Accounts führen kann)
  - Der Nutzer setzt seinen Benutzernamen und sein Passwort
  - Der Nutzer gibt sein System-Kennwort in der App ein
  - Der Nutzer speichert das TOTP secret und gibt einen Test code ein
  - Es wird eine Gerätebindung aufgebaut
- **Login**:
  - Der Nutzer loggt sich mit Nutzername, Passwort und Gerätebindung ein
- Reset von Faktoren:
  - Im konkreten Fall kann der Nutzer jeden einzelnen Faktor verlieren und ihn mit den 3 verbliebenen Faktoren wieder aufsetzen.
  - Der Nutzer hat sein Passwort (Wissen) vergessen: Um eine 2FA zu realisieren brauchen wir den anderen Wissenfaktor (System-PIN) und können und einen der zwei Besitz Faktoren für den Reset aussuchen.
  - Der Nutzer hat sein Systemkennwort (Wissen) vergessen: Um eine 2FA zu realisieren brauchen wir den anderen Wissenfaktor (Nutzername + Passwort) und können und einen der zwei Besitz Faktoren für den Reset aussuchen.
  - Der Nutzer hat seine Gerätebindung (Besitz) verlohren: Hier brauchen wir den anderen Faktor aus der Kategorie Besetz (TOTP) und können uns einen Wissenfaktor aussuchen.
  - Der Nutzer hat seinen TOTP (Besitz) verlohren: Hier brauchen wir den anderen Faktor aus der Kategorie Besetz (Gerätebindung) und können uns einen Wissenfaktor aussuchen.

Notiz: Die beiden Beispiele dienen dazu zu erklären, was ein Authentisierungskonzept ist. Sie stellen nicht unbedingt die Beste UX für den Nutzer dar. Dazu kommt dann noch, dass sich auch Teufel in den Details der Umsetzung verstecken, z.B. wenn der Nutzer sein Smartphone verliert und seine Gerätebindung verliert, hat er dann wirklich noch ein (Cloud-)Backup seiner TOTP secrets?