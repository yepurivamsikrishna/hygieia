import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { TimeAgoPipe } from 'time-ago-pipe';

import { CaponeTemplateComponent } from '../screen_modules/team-dashboard/capone-template/capone-template.component';
import { ChartDirective } from './charts/chart.directive';
import { ChartComponent } from './charts/chart/chart.component';
import { ClickListComponent } from './charts/click-list/click-list.component';
import { ComboChartComponent } from './charts/combo-chart/combo-chart.component';
import { ComboSeriesVerticalComponent } from './charts/combo-series-vertical/combo-series-vertical.component';
import { GaugeChartComponent } from './charts/gauge-chart/gauge-chart.component';
import { LineAndBarChartComponent } from './ngx-charts/line-and-bar-chart/line-and-bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { NumberCardChartComponent } from './charts/number-card-chart/number-card-chart.component';
import { PlainTextChartComponent } from './charts/plain-text-chart/plain-text-chart.component';
import { DashStatusComponent } from './dash-status/dash-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutDirective } from './layouts/layout.directive';
import { LayoutComponent } from './layouts/layout/layout.component';
import { TwoByTwoLayoutComponent } from './layouts/two-by-two-layout/two-by-two-layout.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { DetailModalComponent } from './modals/detail-modal/detail-modal.component';
import { DetailModalDirective } from './modals/detail-modal/detail-modal.directive';
import { FormModalComponent } from './modals/form-modal/form-modal.component';
import { FormModalDirective } from './modals/form-modal/form-modal.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { MinutesPipe } from './pipes/minutes.pipe';
import { BaseTemplateComponent } from './templates/base-template/base-template.component';
import { TemplatesDirective } from './templates/templates.directive';
import { WidgetHeaderComponent } from './widget-header/widget-header.component';
import { PlaceholderWidgetComponent } from './widget/placeholder-widget/placeholder-widget.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetDirective } from './widget/widget.directive';
import { OneChartLayoutComponent } from './layouts/one-chart-layout/one-chart-layout.component';
import { OneByTwoLayoutComponent } from './layouts/one-by-two-layout/one-by-two-layout.component';
import { HorizontalBarChartComponent } from './charts/horizontal-bar-chart/horizontal-bar-chart.component';
import {BarHorizontalComponent} from './ngx-charts/bar-horizontal/bar-horizontal.component';
import {PieGridChartComponent} from './charts/pie-grid-chart/pie-grid-chart.component';
import {PieGridComponent} from './ngx-charts/pie-grid/pie-grid.component';
import { AuditModalComponent } from './modals/audit-modal/audit-modal.component';
import { TwoByOneLayoutComponent } from './layouts/two-by-one-layout/two-by-one-layout.component';
import {DeleteConfirmModalComponent} from './modals/delete-confirm-modal/delete-confirm-modal.component';
import {TabsModule} from './ngx-ui/tabs/tabs.module';
// tslint:disable-next-line:max-line-length
import {OneByTwoLayoutTableChartComponent} from './layouts/one-by-two-layout-table-chart/one-by-two-layout-table-chart.component';
import { NavbarComponent } from '../core/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {DeleteConfirmModalDirective} from './modals/delete-confirm-modal/delete-confirm-modal.directive';
import {RotationChartComponent} from './charts/rotation/rotation-chart.component';
import {
    NbActionsModule,
    NbCardModule,
    NbIconModule,
    NbSearchModule,
    NbTabsetModule,
    NbUserModule
} from '@nebular/theme';
import {ConfirmationModalDirective} from './modals/confirmation-modal/confirmation-modal.directive';
import {DashTrashComponent} from './dash-trash/dash-trash.component';
import {DashEditComponent} from './dash-edit/dash-edit.component';
import {EditDashboardModalComponent} from './modals/edit-dashboard-modal/edit-dashboard-modal.component';
import {GeneralFilterPipe} from './pipes/filter.pipe';
import {GeneralOrderByPipe} from './pipes/order-by.pipe';
import {UserDataService} from '../admin_modules/admin_dashboard/services/user-data.service';
import {TabsFixturesModule} from './ngx-ui/tabs/fixtures/tabs-fixtures.module';
import {GeneralDeleteComponent} from './modals/general-delete-modal/general-delete-modal.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {CollectorItemModule} from '../viewer_modules/collector-item/collector-item.module';
import {NfrrModule} from '../screen_modules/nfrr/nfrr.module';
import { XByOneLayoutComponent } from './layouts/x-by-one-layout/x-by-one-layout.component';
import { RefreshModalComponent } from './modals/refresh-modal/refresh-modal.component';

@NgModule({
  declarations: [
    GeneralDeleteComponent,
    BarHorizontalComponent,
    BaseTemplateComponent,
    CaponeTemplateComponent,
    ChartComponent,
    ChartDirective,
    ClickListComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent,
    ConfirmationModalComponent,
    DashboardComponent,
    DeleteConfirmModalComponent,
    DeleteConfirmModalDirective,
    DetailModalComponent,
    DetailModalDirective,
    FormModalComponent,
    FormModalDirective,
    HorizontalBarChartComponent,
    LayoutComponent,
    LayoutDirective,
    LineAndBarChartComponent,
    LineChartComponent,
    MinutesPipe,
    NumberCardChartComponent,
    OneByTwoLayoutComponent,
    OneByTwoLayoutTableChartComponent,
    PaginationComponent,
    PieGridComponent,
    PieGridChartComponent,
    PlaceholderWidgetComponent,
    RotationChartComponent,
    TemplatesDirective,
    TimeAgoPipe,
    TwoByTwoLayoutComponent,
    WidgetComponent,
    WidgetDirective,
    WidgetHeaderComponent,
    DashStatusComponent,
    PlainTextChartComponent,
    TwoByOneLayoutComponent,
    OneChartLayoutComponent,
    GaugeChartComponent,
    AuditModalComponent,
    TwoByOneLayoutComponent,
    NavbarComponent,
    ConfirmationModalDirective,
    DashTrashComponent,
    DashEditComponent,
    EditDashboardModalComponent,
    GeneralFilterPipe,
    GeneralOrderByPipe,
    XByOneLayoutComponent,
    RefreshModalComponent
  ],
  entryComponents: [
    GeneralDeleteComponent,
    DeleteConfirmModalComponent,
    BarHorizontalComponent,
    CaponeTemplateComponent,
    ClickListComponent,
    ComboChartComponent,
    ConfirmationModalComponent,
    DeleteConfirmModalComponent,
    DetailModalComponent,
    FormModalComponent,
    GaugeChartComponent,
    HorizontalBarChartComponent,
    LineAndBarChartComponent,
    LineChartComponent,
    NumberCardChartComponent,
    OneByTwoLayoutComponent,
    OneByTwoLayoutTableChartComponent,
    OneChartLayoutComponent,
    PieGridComponent,
    PieGridChartComponent,
    PlaceholderWidgetComponent,
    PlainTextChartComponent,
    TwoByOneLayoutComponent,
    XByOneLayoutComponent,
    RotationChartComponent,
    TwoByTwoLayoutComponent,
    TwoByTwoLayoutComponent,
    AuditModalComponent,
    DashTrashComponent,
    DashEditComponent,
    EditDashboardModalComponent
  ],
  imports: [
        CommonModule,
        DragDropModule,
        FlexLayoutModule,
        NgbModule,
        NgxChartsModule,
        NgxUIModule,
        ReactiveFormsModule,
        TabsModule,
        RouterModule,
        NbActionsModule,
        NbUserModule,
        NbSearchModule,
        NbCardModule,
        NbTabsetModule,
        NbIconModule,
        TabsFixturesModule,
    NgxPaginationModule
    ],
  exports: [
    BarHorizontalComponent,
    CaponeTemplateComponent,
    ChartComponent,
    ChartDirective,
    ComboChartComponent,
    ComboSeriesVerticalComponent,
    CommonModule,
    HorizontalBarChartComponent,
    LayoutComponent,
    LayoutDirective,
    LineAndBarChartComponent,
    LineChartComponent,
    NumberCardChartComponent,
    OneByTwoLayoutComponent,
    OneByTwoLayoutTableChartComponent,
    PaginationComponent,
    PieGridComponent,
    PieGridChartComponent,
    ReactiveFormsModule,
    RotationChartComponent,
    TemplatesDirective,
    TwoByTwoLayoutComponent,
    TwoByOneLayoutComponent,
    WidgetComponent,
    WidgetDirective,
    WidgetHeaderComponent,
    GaugeChartComponent,
    NavbarComponent,
    GeneralDeleteComponent,
    DashTrashComponent,
    DashEditComponent,
    GeneralFilterPipe,
    GeneralOrderByPipe,
    NgxPaginationModule,
    CollectorItemModule,
    NfrrModule,
  ],
  providers: [
    UserDataService,
    RouterModule
  ]
})
export class SharedModule { }
