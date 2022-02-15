import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetHeaderComponent } from './widget-header.component';
import {
  Component,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {HttpClientModule} from '@angular/common/http';
import {FormModalComponent} from '../modals/form-modal/form-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WidgetDirective} from '../widget/widget.directive';
import {ConfirmationModalComponent} from '../modals/confirmation-modal/confirmation-modal.component';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {DeleteConfirmModalComponent} from '../modals/delete-confirm-modal/delete-confirm-modal.component';

describe('WidgetHeaderComponent', () => {
  let component: WidgetHeaderComponent;
  let fixture: ComponentFixture<WidgetHeaderComponent>;

  @Component({
    template: ''
  })

  class TestWidgetTypeComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetHeaderComponent, TestWidgetTypeComponent ],
      imports: [ HttpClientModule, NgbModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
    });
    // .compileComponents();

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        declarations: [FormModalComponent, WidgetDirective, ConfirmationModalComponent, DeleteConfirmModalComponent ],
        entryComponents: [ TestWidgetTypeComponent, FormModalComponent, ConfirmationModalComponent, DeleteConfirmModalComponent ],
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetHeaderComponent);
    component = fixture.componentInstance;
    component.widgetType = TestWidgetTypeComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should updateWidgetConfig', () => {
    component.loadComponent();
    component.updateWidgetConfig(null);
  });

  it('should openConfig when clicked', () => {
    component.openConfig();
  });

  it('should have an initial widget value when loading', () => {
    component.ngOnInit();
    expect(component.widgetType).toBeDefined();
  });

  it('should open the delete confirmation when delete icon is clicked', () => {
    component.openDeleteConfirm();
  });
  it('should find audit status of widget', () => {
    component.setAuditData(of([{auditType: 'TEST_RESULT', auditStatus: 'OK', auditTypeStatus: 'OK'},
      {auditType: 'PERF_TEST', auditStatus: 'OK', auditTypeStatus: 'OK'}]).pipe(map(result => result)));
    component.findWidgetAuditStatus(['TEST_RESULT', 'PERF_TEST']);
    expect(component.auditStatus).toEqual('OK');
  });
});
