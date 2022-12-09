

export function convertMinutesToHourString(minutesAm: number){
    const hour = Math.floor(minutesAm / 60);
    const minutes = minutesAm % 60 ;

    return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

}