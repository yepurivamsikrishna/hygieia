import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ManageAdminsComponent } from './manage-admins.component';
import { UserDataService } from '../../../services/user-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {GeneralFilterPipe} from '../../../../../shared/pipes/filter.pipe';
import {GeneralOrderByPipe} from '../../../../../shared/pipes/order-by.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

describe('ManageAdminsComponent', () => {
  let component: ManageAdminsComponent;
  let fixture: ComponentFixture<ManageAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAdminsComponent, GeneralFilterPipe, GeneralOrderByPipe],
      providers: [UserDataService],
      imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientTestingModule, NgxPaginationModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
