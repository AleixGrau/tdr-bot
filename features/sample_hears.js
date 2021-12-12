/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.on('welcome_back',function(bot,message){
        bot.reply(message,'Benvingut, en que et puc ajudar?');
    });

    //Salutacions
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('hola') || 
        message.text.toLowerCase().includes('bon') || message.text.toLowerCase().includes('hello')|| 
        message.text.toLowerCase().includes('hey')), ['message'], async (bot, message) => {
        await bot.reply(message, 'Hola!') 
        await bot.reply(message,'En que et puc ajudar?');
    });

    //Què ofereix el Diploma Dual?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('diploma') || 
        message.text.toLowerCase().includes('títol') || message.text.toLowerCase().includes('informació')|| 
        message.text.toLowerCase().includes('ofereix') || message.text.toLowerCase().includes('proporciona')), ['message'], async (bot, message) => {
        await bot.reply(message, 'El Diploma Dual ofereix la possibilitat d’obtenir dues titulacions alhora: el batxillerat del país d’origen, de manera presencial, i l’American High School Diploma, en modalitat online.');
    });

    //L’alumne està matriculat als Estats Units?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('matricula') && 
        message.text.toLowerCase().includes('estats units')), ['message'], async (bot, message) => {
        await bot.reply(message, 'Una vegada acceptada la seva sol·licitud, l\'alumne queda matriculat a l’American High School Diploma com un alumne estatunidenc més d’Academica.');
    });

    //Quina nota d’accés es demana a l’alumne?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('nota') || 
        message.text.toLowerCase().includes('mitjana')), 
        ['message'], async (bot, message) => {
        await bot.reply(message, 'Tot i que, En general, es recomana tenir una mitjana de 7, no hi ha una nota de tall. Per accedir al programa s’analitza el conjunt d’assignatures cursades i superades i es fa una avaluació del nivell d’anglès.');
    });

    //En quin curs es pot començar el Batxillerat Dual?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('curs') && 
        message.text.toLowerCase().includes('començar') ||  message.text.toLowerCase().includes('iniciar')), ['message'], async (bot, message) => {
        await bot.reply(message, 'El diploma del batxillerat dual es pot començar desde 2n d’ESO, 3r d’ESO, 4t d’ESO o 1r de Batxillerat.');
    });

    //Quantes assignatures haurà de cursar en total?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('assignatures') || 
        message.text.toLowerCase().includes('materies')) , ['message'], async (bot, message) => {
        await bot.reply(message, 'Un alumne espanyol només haurà de cursar 6 crèdits (4 assignatures obligatòries i 2 d’optatives). L’excel·lència del Diploma Dual permet convalidar el 75% dels crèdits que s’exigeixen per obtenir l’American High School Diploma.');
    });

    //En que consisteix el Batxillerat Dual?
    controller.hears(async (message) => message.text && message.text.toLowerCase().includes('que es') ||  
        message.text.toLowerCase().includes('consisteix') ||  message.text.toLowerCase().includes('tracta'),
        ['message'], async (bot, message) => {
        await bot.reply(message, 'El Diploma Dual és un programa interdisciplinari que emfatitza la immersió educativa en anglès, la capacitació tecnològica i el desenvolupament personal de l’alumne.');
    });

    //Quins materials necessita l’alumne?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('necessita') || 
        message.text.toLowerCase().includes('necessiten') || message.text.toLowerCase().includes('necessito') || 
        message.text.toLowerCase().includes('necessaris') || message.text.toLowerCase().includes('cal') || 
        message.text.toLowerCase().includes('necessari') || message.text.toLowerCase().includes('calen') || 
        message.text.toLowerCase().includes('falta') || message.text.toLowerCase().includes('requereix')) && 
        (message.text.toLowerCase().includes('material') || message.text.toLowerCase().includes('materials')),
        ['message'], async (bot, message) => {
        await bot.reply(message, 'Qualsevol alumne ha de dispossar de un ordinador amb connexió a internet i es recomenable que disposi de uns auriculars amb micròfon. També se li serà facilitat tots els continguts i activitats per a la comunicació amb els professors i els alumnes.');
    });

    //Quina garantia de qualitat ofereix el Diploma Dual?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('garantia') || 
        message.text.toLowerCase().includes('fiabilitat')), ['message'], async (bot, message) => {
        await bot.reply(message, 'El diploma del batxillerat dual proporciona una garantia de qualitat total ja que els alumnes que cursen aquest programa reben la mateixa titulació que els estudiants dels EUA, la qual té validesa en tots els estats i universitats dels EUA..');
    });

    //Cal fer algun tipus de convalidació per fer el procés de sol·licitud d’entrades a universitat americanes?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('convalidació') || 
        message.text.toLowerCase().includes('convalidar')), ['message'], async (bot, message) => {
        await bot.reply(message, 'Gràcies a que el títol que reben els alumnes al acabar el batxillerat dual es el títol oficial del batxillerat dels EUA, els alumnes no hauràn de convalidar res si volen anar a estudiar a la universitat als Estats Units.');
    });

    //I si l’alumne no acaba fent Batxillerat, què?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('acaba') || 
        message.text.toLowerCase().includes('acabar') || message.text.toLowerCase().includes('acabat') || 
        message.text.toLowerCase().includes('finalitzat') || message.text.toLowerCase().includes('finalitzar') ) && 
        message.text.toLowerCase().includes('no') && message.text.toLowerCase().includes('batxillerat'), 
        ['message'], async (bot, message) => {
        await bot.reply(message, 'Si un alumne decideix fer cicles formatius pot continuar fent el Diploma Dual igualment i endur-se tot l’enriquiment que això suposa. No podrà obtenir el High School Diploma, ja que es necessiten les notes de batxillerat per fer les convalidacions. Els dos títols de batxillerat estan íntimament lligats.  En casos com aquest el que reben els alumnes en acabar el Diploma Dual és un Certificate of Completion on s’acredita que han cursat aquestes 6 assignatures del sistema educatiu estatunidenc.');
    });

    //Quant temps he de dedicar setmanalment al batxillerat dual?
    controller.hears(async (message) => message.text && message.text.toLowerCase().includes('temps'),
        ['message'], async (bot, message) => {
        await bot.reply(message, 'Cada alumne haurà de dedicar les hores que ell consideri necessàries per tal de poder portar al dia les tasques que se li encomanen.');
    });

    //En quins horaris es poden fer les classes?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('horaris') ||
        message.text.toLowerCase().includes('horari')),
        ['message'], async (bot, message) => {
        await bot.reply(message, 'L\'alumne pot decidir quins dies fer les clases per tal de poder organitzar-se de la millor manera possible.');
    });

    //Com s'han d'enviar les tasques?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('treballs') ||
        message.text.toLowerCase().includes('tasques')),
        ['message'], async (bot, message) => {
        await bot.reply(message, 'Les tasques, treballs o fitxes que hagin de fer, tindran una data limit per ser entregades i s\'haura d\'anomenar el document amb un nom determinat, de la seguent manera:"any,cognom de l\'alumne,nom de l\'alumne,nom de la matèria,títol de la fitxa".');
    });
    
    //Amb qui poden parlar els alumnes en cas de tenir dubtes sobre algun aspecte del dual?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('dubtes') ||
        message.text.toLowerCase().includes('dubte') || message.text.toLowerCase().includes('problemes') ||
        message.text.toLowerCase().includes('problema')),
        ['message'], async (bot, message) => {
        await bot.reply(message, 'En cas de tenir dubtes o algun problema sobre algun aspecte determinat del dual, els alumnes poden parlar amb el professorat de l\'escola que s\'encarrega del batxillerat dual, que els podran aclarir o solucionar aquests dubtes.');
    });

    //Per defecte
    controller.hears(async (message) => message.text, ['message'], async (bot, message) => {
        await bot.reply(message, {text: 'No entenc el teu missatge', typingDelay: 5000});
        await bot.reply(message, 'Pots formular la pregunta d\'una altre manera?');
    });

}