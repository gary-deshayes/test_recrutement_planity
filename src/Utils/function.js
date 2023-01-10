/**
 * Converti une heure en date pour avoir un object Date
 * @param {String} time 
 * @returns Date
 */
function timeToDate(time) {
    return new Date('01 Jan 1970 ' + time + ':00 GMT')
}

/**
 * Fonction de calcul de la durée d'un event
 * @param {String} duration 
 * @returns Number
 */
function calcDurationDisplay(duration) {
    //On prends la durée et on divise par 15, il n'y a pas de nombre exact pour les graduations de temps mais j'ai pris 15 pour un quart d'heure
    return Math.round(duration / 15)
}
export default {
    timeToDate,
    calcDurationDisplay
}