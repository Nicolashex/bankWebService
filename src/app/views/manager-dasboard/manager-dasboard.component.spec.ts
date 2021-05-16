import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDasboardComponent } from './manager-dasboard.component';

describe('ManagerDasboardComponent', () => {
  let component: ManagerDasboardComponent;
  let fixture: ComponentFixture<ManagerDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerDasboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
