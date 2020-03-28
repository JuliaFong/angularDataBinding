import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges,
  DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None or Native is an option
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: Element

  constructor() { 
    console.log('construcrow called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("onchanges called")
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngonit!')
    console.log("this.header.nativeElement.textContent")
    
  }
  ngDoCheck() {
    console.log("ngdocheckkkk")
  }
  ngAfterContentInit() {
    console.log('contentinit hitttingggggg')
  }
  ngAfterContentChecked() {
    console.log('afterContent hits itt!!!')
  }
  ngAfterViewInit(){
    console.log('afterview inittttt')
    console.log("'text content' +this.header.nativeElement.textContent")
  }
  ngAfterViewChecked() {
    console.log('heeelllooo afterview check')
  }
  ngOnDestroy() {
    console.log('destroy it bro') 
    
  }

}
