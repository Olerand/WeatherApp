export function getDayOfMonth(string:string):number{
    return new Date(string).getDate()
}
export function getMonthName(string:string):string{
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Now','Dec']
    return month[new Date(string).getMonth()]
}
export function getNameOfDayWeek(string:string):string{
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[new Date(string).getDay()]
}
export function getTime(string:string,metric:boolean){
    if(!metric){
        return( new Date(string).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' }))
    }
    return( new Date(string).toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' }))

}
export function getYear(string:string){
    return new Date(string).getFullYear()-2000
}