import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { ControllersService } from 'src/app/services/controllers.service';
import { TopHeadlinesParams } from 'src/app/services/api.service';
import debug from 'debug';

const log = debug("navigationComponent");

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = env.siteTitle;
  paths = env.paths;
  private currentParams: TopHeadlinesParams = {};

  constructor(private controllersService: ControllersService) { }

  ngOnInit() {
    this.controllersService.currentParams.subscribe(params => {
      this.currentParams = params;
      log('got new params');
      this.UpdateNavigation();
    });
  }

  UpdateNavigation(){
    log("Updating nav with new params:", this.currentParams);
  }

}
