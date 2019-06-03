import { Component, OnInit, Output } from '@angular/core';
import { SourceService } from 'src/app/services/source.service';

import { Source } from 'src/app/models/source';
import { SourceResponse } from 'src/app/models/source-response';

import debug from 'debug';
// import { EventEmitter } from '@angular/core';
import { ControllersService } from 'src/app/services/controllers.service';
import { TopHeadlinesParams } from 'src/app/services/api.service';
const log = debug('app-sourcesComponent');

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  // @Output() updateNewsEvent = new EventEmitter<Source[]>();
  sources: Source[];
  selectedSourcesIds: string[] = [];

  constructor(private sourceService: SourceService, private controllersService: ControllersService) { }

  ngOnInit() {
    this.controllersService.currentParams.subscribe(params => {
      if (params && params.sources){
        this.selectedSourcesIds = [].concat(params.sources.split(','));
      } else {
        this.selectedSourcesIds = [];
      }
      log("Updating selected sources to: ", this.selectedSourcesIds);
    });
    this.sourceService.GetServices((data: Source[], error: Error) => {
      this.sources = data;
      log(this.sources);
    });
  }

  SourceClicked(source: Source) {
    log('Source ' + source.id + ' clicked');
    if (this.selectedSourcesIds.includes(source.id)){
      this.selectedSourcesIds.splice(this.selectedSourcesIds.indexOf(source.id), 1);
    } else {
      this.selectedSourcesIds.push(source.id);
    }
    log('Currently selected sources are:', this.selectedSourcesIds);
    const params: TopHeadlinesParams = this.selectedSourcesIds.length ?
      { sources: this.selectedSourcesIds.join(',') }
      : undefined;
    this.controllersService.SetParams(params);
    // this.updateNewsEvent.emit(this.selectedSources);
  }

}
