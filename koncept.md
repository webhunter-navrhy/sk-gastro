# SK GASTRO – koncept (12. 10. 2026, úkol Karolíny #435)

Podklady: maily klienta 12. 10. (UID 11488, 11500, 11504), cenník 3. 10. (UID 7937), 6 vlastných fotiek výrobkov.
Klient s varením končí. Web je o domácej výrobe (knedle, parené buchty, placky, šišky, langoše, palacinky)
pre ľudí aj odberateľov (reštaurácie, jedálne, večierky, potraviny, obchody). Chce čiernu a zlatú „ako má logo“.

## Tri koncepty
1. **Etiketa z balenia** – každý výrobok je na webe ako jeho skutočná etiketa (názov, gramáž/kusy, cena),
   nalepená na fotke z ich nerezového stola; čierna plocha so zlatou, etikety ako biely papier.
2. **Dodací list pre odberateľa** – web ako objednávkový hárok s riadkami výrobkov a množstvom, B2B prvé.
3. **Tabuľa vo výdajni** – čierna tabuľa so zlatou kriedou, ponuka napísaná rukou.

**Výber: 1 – Etiketa.** Na všetkých ich fotkách je biela etiketa s názvom a gramážou, to je ich skutočný
„brand“ v praxi. Unesie to fotky, ktoré máme (balené výrobky na nerezi, nie nastajlované jedlo).
Čierna a zlatá je želanie klienta (brand), biele etikety ju vyvažujú, takže to nie je „tmavý luxus“,
ale výrobňa: nerez, papierová etiketa, zlatý pruh značky. Koncept 2 je použitý ako sekcia pre odberateľov,
tabuľa (3) je generická.

## Skladba
1. Hlavička: SK GASTRO textom (logo nemáme, zlatý wordmark), Ponuka / Pre odberateľov / Kontakt, telefón.
2. Úvod: nadpis + veta klienta, fotka buchiet s etiketou „Parené buchty 6 ks · od 3,70 €“, dve akcie.
3. **Ponuka (signature)**: výrobky ako fotky s nalepenou etiketou (etiketa sa pri príchode do obrazu
   jemne „prilepí“ – CSS scroll-driven rotácia, bez pinningu). Buchty veľké s 5 príchuťami, ostatné v mriežke.
4. Pás „Streda“: šišky / langoše podľa párneho a nepárneho týždňa, JS dopočíta, čo bude túto stredu.
5. Pre odberateľov: text klienta, tri riadky ako dodací list so zaškrtnutím, pečiatka
   „Individuálne ceny podľa odberu“, akcia napísať / zavolať.
6. Kontakt: adresa (odkaz na mapu), telefón, e-mail, formulár objednávky (ukážkový režim).
7. Pätička: prevádzkovateľ podľa etikety.

Signature momenty: etikety na fotkách (1), výpočet „túto stredu“ (2).

## Písmo, farby, fotky
- Archivo (variable, šírka 62–125): display 125 % šírka, 800 – ako tlač na obale; text 100 %, 400. Jedna rodina.
  Test háčkov 12. 10. OK (ľ š č ť ž ý á í é ô ä ň ď), kurzívu nepoužívam.
- Čierna #121110, zlatá #C9A24B (text na čiernej, kontrast 8:1), papier etikety #F6F1E6, nerez #8E8C88 linky.
- Fotky klienta, jednotne bez filtrov, len orez; nič nezväčšené nad 1,3×.

## Zakázané vzory
Žiadny. Tmavá + zlatá je výslovné prianie klienta a farby jeho loga (nie „luxus“): serif, ozdoby a gradienty nepoužívam.

## Porovnanie
- Schválené: SK účtovníctvo v2 (paleta z farby loga), náborový web (foto-led). Beriem princíp: brand klienta a jeho fotky vedú.
- Odmietnuté: Zábranský v1 (tmavá+zlatá+serif, falošné prvky) – tu žiadny serif, žiadne HUD, reálne etikety a fotky;
  Pletánky (moc efektov) – jeden efekt.
- Posledné weby v registri: ebcc (Bricolage Grotesque, čipy povrchov, regál), sk-sempersa (Literata, ciferník).
  Iný display font a iná skladba.
