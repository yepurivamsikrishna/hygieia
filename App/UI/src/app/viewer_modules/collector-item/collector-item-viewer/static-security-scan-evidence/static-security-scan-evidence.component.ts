import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {BaseEvidenceComponent} from '../base-evidence/base-evidence.component';
import {ISecurityScan} from '../../../../widget_modules/security-scan/security-scan-interfaces';

@Component({
  selector: 'app-static-security-scan-evidence',
  templateUrl: './static-security-scan-evidence.component.html',
  styleUrls: ['./static-security-scan-evidence.component.scss']
})
export class StaticSecurityScanEvidenceComponent extends BaseEvidenceComponent implements OnInit {
  displayedColumns = ['id', 'type', 'timestamp'];
  dataSource: MatTableDataSource<ISecurityScan>;

  ngOnInit() {
    super.ngOnInit();
    this.intervalRefreshSubscription = this.ciViewerService.getCollectorItemDetails(
      this.dashboardTitle, this.componentId, this.collector).subscribe(response => {
        this.collectorEvidenceDetails = response;
        this.dataSource.data = this.collectorEvidenceDetails;
        this.dataSource.sort = this.sort;
      });
  }
}
