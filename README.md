## Epptec interview coding assignment
Zdravím. 
Vítejte u mého řešení úlohy Junior FE developer.

### Disclaimer
Jak jsem říkal paní Šerákové při prvním kole našeho interview, hlásím se na pozici Angular vývojáře jako úplný starter. Angular jsem ještě před dvěma dny znal akorát podle názvu a o Typescript jsem do téhle úlohy také nikdy nezavadil. Kód tedy rozhodně **není best-practice**. Je to výsledek víkendového snažení se naučit se základy frameworku a vyprodukovat to, co se po mně chtělo tak, aby to fungovalo. 

Kód bohužel občas nedodržuje ani základní poučky jako třeba DRY. Někde se mi prostě nedařilo mezi komponenty sdílet to, co jsem potřeboval. :)

### Známé bugy
- Při opakovaném načítání stránky se občas nepropíší jména postujících. Budu rád když mi při druhém kole řeknete co je špatně a jak to opravit.
- ~~Při testování na localhost lze do URL vložit id určitého postu a aplikace ho najde. Naopak při testování na serveru na Heroku tento feature nefunguje.~~ -Opraveno

### Chybějící feature
- Na hlavní stánce by mělo body postu mít omezenou délku a až po rozkliknutí by se měl ukázat plný text. Toto se mi nedaří jednoduše implementovat. Narážím na stejný problém jako u bugu s občasným nenačtením jmen. *Myslím*, že skript který by měl body zkracovat probíhá dřív než se naplní array postů.

### Appendix
- ['Live server na heroku'](https://epptec-angular.herokuapp.com/)
- ['Zadání'](./Uloha_zadani.pdf)