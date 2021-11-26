/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

    module.exports = function(controller) {

    controller.on('welcome_back',function(bot,message){
        bot.reply(message,'Benvingut, estic aquí per intentar respodre tots els dubtes que tinguis sobre el Batxillerat Dual, espero poder ajudar-te!');
    });


    //Salutacions
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('hola') || 
        message.text.toLowerCase().includes('bon') || message.text.toLowerCase().includes('hello')|| 
        message.text.toLowerCase().includes('hey')), ['message'], async (bot, message) => {
        await bot.reply(message, 'Hola, que necessites?');
    });

    //Què ofereix el Diploma Dual?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('diploma') || 
        message.text.toLowerCase().includes('títol') || message.text.toLowerCase().includes('informació') && 
        message.text.toLowerCase().includes('dual')) && (message.text.toLowerCase().includes('ofereix') || 
        message.text.toLowerCase().includes('proporciona')), ['message'], async (bot, message) => {
        await bot.reply(message, 'El Diploma Dual ofereix la possibilitat d’obtenir dues titulacions alhora: el batxillerat del país d’origen, de manera presencial, i l’American High School Diploma, en modalitat online.');
    });

    //L’alumne està matriculat als Estats Units?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('matricula') && 
        message.text.toLowerCase().includes('estats units')), ['message'], async (bot, message) => {
        await bot.reply(message, 'Una vegada acceptada la seva sol·licitud, l\'alumne queda matriculat a l’American High School Diploma com un alumne estatunidenc més d’Academica.');
    });

    //Quina nota d’accés es demana a l’alumne?
    controller.hears(async (message) => message.text && ((message.text.toLowerCase().includes('nota') || 
        message.text.toLowerCase().includes('mitjana')) ||  message.text.toLowerCase().includes('d\'accés')), 
        ['message'], async (bot, message) => {
        await bot.reply(message, 'Tot i que, En general, es recomana tenir una mitjana de 7, no hi ha una nota de tall. Per accedir al programa s’analitza el conjunt d’assignatures cursades i superades i es fa una avaluació del nivell d’anglès.');
    });

    //En quin curs es pot començar el Diploma Dual?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('curs') && 
        message.text.toLowerCase().includes('començar')), ['message'], async (bot, message) => {
        await bot.reply(message, 'El diploma del batxillerat dual es pot començar desde 2n d’ESO, 3r d’ESO, 4t d’ESO o 1r de Batxillerat.');
    });

    //Quantes assignatures haurà de cursar en total?
    controller.hears(async (message) => message.text && (message.text.toLowerCase().includes('assignatures') || 
        message.text.toLowerCase().includes('materies')) , ['message'], async (bot, message) => {
        await bot.reply(message, 'Un alumne espanyol només haurà de cursar 6 crèdits (4 assignatures obligatòries i 2 d’optatives). L’excel·lència del Diploma Dual permet convalidar el 75% dels crèdits que s’exigeixen per obtenir l’American High School Diploma.');
    });

    //Quins avantatges ofereix el Diploma Dual a l’alumne?
    controller.hears(async (message) => message.text && message.text.toLowerCase().includes('avantatges'),
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


    // use a regular expression to match the text of the message

    // controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
    //     await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    // });

    // match any one of set of mixed patterns like a string, a regular expression

    // controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
    //     await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    // }); 

    }