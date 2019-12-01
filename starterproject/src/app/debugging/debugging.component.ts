import { OnInit, Component } from '@angular/core';
import { Identifiers } from '@angular/compiler';

@Component({
    selector : 'debugging-app',
    templateUrl : './debugging.component.html',
    styleUrls : ['./debugging.component.css']
})
export class Debugging implements OnInit{
    servers = [];
    index : number = 1;
    
    onClickObject()
    {
        this.servers.push('Server Added '+this.index);
        this.index = this.index + 1;
        console.log(this.index);
       // this.index ++;
    }
    
    removeOnclick( id : number)
    {
        //const position  = id + 1;
        this.servers.splice(id,1);
        this.index = this.index - 1;
        console.log(this.index);
    }
    ngOnInit()
    {

    }

}