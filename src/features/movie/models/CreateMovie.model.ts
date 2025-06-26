export default interface CreateMovie{
    title: string;
    dateRelease: string;
    trailer?:string;
    poster?:File | string;
    gendersId?: number[]
}