/**
 * #### <font color="cornflowerblue">safe: Funzione che gestisce le promise in modo da evitare l'uso di blocchi try-cacth Prende una promessa (prom) come argomento e</font>
 * #### <font color="cornflowerblue">restituisce una nuova promessa. Quando la promessa originale si risolve con successo, restituisce un array con null come primo</font>
 * #### <font color="cornflowerblue">elemento (che indica nessun errore) e il risultato come secondo elemento. Se la promessa originale rifiuta (lancia un errore),</font>
 * #### <font color="cornflowerblue">restituisce un array con l'errore come primo elemento e undefined come secondo elemento.</font>
 *
 * @function SAFE
 * @version 0.0.1
 * @author Nello
 */
export const safe = (prom) => prom.then((res) => [null, res]).catch((err) => [err]);  
  

/**
 * #### <font color="cornflowerblue">wait: Questa funzione crea una promessa che si risolve dopo un determinato periodo di tempo (in millisecondi).</font>
 * #### <font color="cornflowerblue">Per impostazione predefinita, attende per 1000 millisecondi (1 secondo) se non viene specificato alcun tempo.</font>
 *
 * @function WAIT
 * @version 0.0.1
 * @author Nello
 */
export const wait = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
