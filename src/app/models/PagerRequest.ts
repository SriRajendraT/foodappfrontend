export class PagerRequest {
    currentPage?:number=1;
    pageSize?:number=12;
    maxPages?:number=10;
    view?:string="table-view";
}

export class PagerResponse<T> {
    TotalItems?:number;
    CurrentPage?:number;
    PageSize?:number;
    TotalPages?:number;
    StartPage?:number;
    EndPage?:number;
    StartIndex?:number;
    EndIndex?:number;
    Pages?:Array<T>=[];
    VIEW?:string;
}