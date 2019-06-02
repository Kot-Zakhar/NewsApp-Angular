import { Component, OnInit } from '@angular/core';
import { SourceService } from 'src/app/services/source.service';

import { Source } from 'src/app/models/source';
import { SourceResponse } from 'src/app/models/source-response';

import debug from 'debug';
const log = debug('app-sourcesComponent');

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  sources: Source[];


  constructor(private sourceService: SourceService ) {

  }

  ngOnInit() {
    this.sourceService.GetServices()
      .subscribe((data: SourceResponse) => {
        this.sources = data.sources;
        log(this.sources);
      });
  }

}
