import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from 'angular2/core';


@Component({
    selector: 'pagination',
    templateUrl: 'app/pagination.component.html'
})

export class PaginationComponent implements OnChanges{

    @Input() postsToCrawl = [];
    @Input() postsPerPage;
    @Output() updateCurrentPage =  new EventEmitter();
    pageNumbers: any[];
    currentPage;


    ngOnChanges(){
        this.currentPage = 1;
        var numberOfPages = Math.ceil(this.postsToCrawl.length/this.postsPerPage);
        this.pageNumbers = [];
        for(var i=1; i<= numberOfPages; i++){
            this.pageNumbers.push(i);
        }
    }

    selectNewPage(val){
        this.currentPage = val;
        this.updateCurrentPage.emit(this.currentPage);
    }
}