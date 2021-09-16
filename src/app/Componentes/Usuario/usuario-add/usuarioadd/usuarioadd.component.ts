import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './usuarioadd.component.html',
  styleUrls: ['./usuarioadd.component.css']
})
export class UsuarioaddComponent implements OnInit {

  constructor(private routerActive : ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.routerActive.snapshot.paramMap.get('id');

    if (id != null){
        console.log(' Valor sendo editado : ' + id);
    }

  }

}
