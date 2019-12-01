import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit {
    
     @Input() // @Input('Alias name we can user here')
     element: { type: string, name: string, content: string };

    ngOnInit() {

    }
}