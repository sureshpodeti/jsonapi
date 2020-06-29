import { Component, OnInit } from '@angular/core';
import { DatastoreService } from './services/datastore.service';
import { Author } from './models/author';
import { JsonApiQueryData } from 'angular2-jsonapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jsn';

  authors: Author[];

  author: Author;
  constructor(private dataStoreService: DatastoreService){
  }

  ngOnInit(): void {
    // this.dataStoreService.findAll(Author).subscribe(
    //   (authors:JsonApiQueryData<Author>) => {
    //     this.authors = authors.getModels();
    //   }
    // ) 
    
    this.dataStoreService.query(Author, {
      include: 'books'
    }).subscribe(
      (authors:Author[]) => {
        this.authors = authors;
        console.log("values:", this.authors);
      }
    )

    this.dataStoreService.findRecord(Author, '6', {
      include: 'books'
    }).subscribe(
      (author: Author) => {
        this.author = author;
        console.log("author:", this.author);
      }
    );

  }

  create(){
    // this.dataStoreService.createRecord(Author, {
    //   name: 'Abdum kalam',
    //   birthplace: 'Chennai',
    //   date_of_birth: '2000-10-10',
    //   date_of_death: '2070-10-8'
    // });

    let author = this.dataStoreService.createRecord(Author,
      {
        name: 'Abdul kalam',
        birthplace: 'chennai',
        date_of_birth: '2000-10-10'
      });

    author.save().subscribe(
      next => {
        console.log("successfully created!");
      },
      error => {
        console.log("Problem in creation");
      }
    );
   }

   update(){
     this.dataStoreService.findRecord(Author, '2').subscribe(
       (author: Author) => {
         author.name = "abdul kalam"
         author.save().subscribe(
           next => {
             console.log("successfully updated");
           },
           error => {
             console.log("problem in updating");
           }
         );
       }
     );
   }

 
}
