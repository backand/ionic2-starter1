import {Component} from '@angular/core';
import { BackandService } from '@backand/angular2-sdk'

@Component({
  templateUrl: 'crud.html',
  selector: 'page-crud'
})
export class CrudPage {

  name:string = 'World';
  description:string = 'Wonderful';
  public items:any[] = [];
  searchQuery: string;


  constructor(private backand: BackandService) {

      this.searchQuery = '';
      let that = this;
      this.backand.on("items_updated",
          (data: any) => {
                  console.log("items_updated", data);
                  let a = data as any[];
                  let newItem = {};
                  a.forEach((kv)=> newItem[kv.Key] = kv.Value);
                  that.items.unshift(newItem);
          }
      );
  }

  public postItem() {
      let item = {
          name: this.name,
          description: this.description
      };

      this.backand.object.create('todo', item)
          .then((data: any) => {
              // add to beginning of array
              this.items.unshift({ id: null, name: this.name, description: this.description });
              console.log(this.items);
              this.name = '';
              this.description = '';
          },
          (err: any) => {
              console.log(err);
          }
      );
  }

  public getItems() {
     this.backand.object.getList('todo')
          .then((data: any) => {
              console.log(data);
              this.items = data.data;
          },
          (err: any) => {
              console.log(err);
              this.items = [{ name: 'yoram', 'description': 'sssss' }];
          }
      );
  }

  public filterItems() {
      // set q to the value of the searchbar
      var q = this.searchQuery;

      // if the value is an empty string don't filter the items
      if (!q || q.trim() == '') {
        return;
      }
      else{
          q = q.trim();
      }


      let params = {
          filter: [
              this.backand.helpers.filter.create('name', this.backand.helpers.filter.operators.text.contains, q),
          ],
      }

      this.backand.object.getList('todo', params)
          .then((data: any) => {
              console.log(data);
              this.items = data.data;
          },
          (err: any) => {
              console.log(err)
          }
      );
  }

}
