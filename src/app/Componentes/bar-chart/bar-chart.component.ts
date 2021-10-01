import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { userChart } from 'src/app/model/userCharts';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {

constructor(private userService : UsuarioService){}

userChart = new userChart();


ngOnInit(): void {
  this.userService.carregarGrafico().subscribe(data =>{
    this.userChart = data;

    // Nomes
    this.barChartLabels = this.userChart.nome.split(',');

    // Salários
    let arraySalario = JSON.parse('[' + this.userChart.salario + ']');


    this.barChartData =[
      { data:arraySalario,  label: 'Salário Usuário' }
    ];

  });
}


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Salário Usuário' }
  ];

}
