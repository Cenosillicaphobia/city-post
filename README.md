# City Post 
 
#### Progetto realizzato in Angular per Ntt-Data, utilizzando le REST API fornite da [GoRest](https://gorest.co.in/)

--- 
 
- Inizializzare il progetto
- Features
- Grafica 

--- 

## Inizializzare il progetto:

[clicca qui](https://city-post-4cbfd.web.app) per accedere alla pagina web del progetto, ti verrà chiesto di inserire il tuo token (se ancora non l'hai fatto puoi generarne uno [qui](https://gorest.co.in/my-account/access-tokens)), sarai poi libero di visualizzare tutte le informazioni ed utilizzare tutte le funzionalità.

Se invece vuoi testare il progetto in locale, scarica tutti i file da questa repository, lancia il comando 'npm install' per installare tutti i pacchetti presenti nel file 'package.json' e successivamente lancia il comando 'ng serve --open' per aprire il progetto in locale. 
 
--- 

## Features 
 
(E' stato implementato uno 'Unit Testing' di tutti i service ed i componenti, raggiungendo una global coverage superiore all'80%) 

Il Login salva il tuo token il locale per richiamarlo nell'header durante tutte le chiamate http e ti porta direttamenta nella users-list page. 
L'accesso alle altre pagine è protetto da un 'AuthGuard' non sarà quindi possibile visualizzarle fino alla corretta esecuzione del Login. 
A seguito del login si viene automaticamente reindirizzati all'interno della users-list page. 
 
La users-list mostra un elenco di tutti gli utenti presenti a sistema e le loro relative info principali.
E' possibile effettuare ricerche e scorrendo verso il termine della pagina è possibile passare a quella successiva o ad una pagina specifica.
Cliccando su 'See More' si accede alla pagina user-data. 
 
Nella pagina user-data è possibile visualizzare tutte le informazioni disponibili relative all'utente selezionato, quali:
- le sue info personali 
- la sua lista 'todos' 
- i post pubblicati con possibilità di visualizzzare i relativi commenti 
Per accedere all'elenco di tutti i post presenti a sistema è necessario cliccare sulla voce 'post/posts list' del menù. 
 
La posts-list mostra un elenco di tutti post presenti a sistema con la possibilità di visualizzare i loro relativi commenti.
E' possibile effettuare ricerche e scorrendo verso il termine della pagina è possibile passare a quella successiva o ad una pagina specifica.  

Dal menù è inoltre possibile ragiungere le seguenti pagine:
- create-post, nella quale è possibile creare un post di un determinato utente.
- create-user, nella quale è possibile aggiungere un nuovo utente. 
- delete-user, nella quale è possibile eliminare un utente.
Tutti i form presenti nelle pagine sono 'Template Driven Forms', non sarà quindi possibile effettuare il Submit fino a quando il form non riterrà completati correttamente tutti i campi richiesti. 
Qualora il form consenta l'invio ma i dati non siano corretti, verrà visulizzato  sopra il form un messaggio di 'warning' con una breve descrizione del problema riportato dal database. 
 
Attraverso il tasto di 'Logout' del menù si verrà riportati alla pagina di login ed il token verrà rimosso dallo storage locale. 
 
--- 
 
## Grafica 
 
Il progetto è stato interamente relizzato attraverso l'utilizzo dello 'UI KIT Nz-Zorro' aggiungendo tramite css alcune mie personalizzazioni. 
L'idea è stata quella di creare un interfaccia il più semplice e pulita possibile con l'aggiunta di pochi piccoli particolari che la rendessero chiara ma originale. 
 
--- 
 
Progetto realizzato da: **Andrea Tommasini**.