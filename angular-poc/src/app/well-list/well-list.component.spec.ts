import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WellListComponent } from './well-list.component';

describe('WellListComponent', () => {
  let component: WellListComponent;
  let fixture: ComponentFixture<WellListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WellListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create one tr for each well element to be added', () => {
    fixture.componentInstance.addWell({
      name: 'TestName1',
      type: 'rls',
      sourceKey: 1001,
    });
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('tbody tr')).length).toBe(1);
  });

  it('should create well element hero element to be added', () => {
    fixture.componentInstance.addWell({
      name: 'TestName1',
      type: 'rls',
      sourceKey: 10001,
    });
    fixture.componentInstance.addWell({
      name: 'TestName1',
      type: 'esp',
      sourceKey: 10002,
    });
    expect(fixture.componentInstance.wells.length).toBe(2);
  });

  it('should create well element hero element to be added', () => {
    fixture.componentInstance.addWell({
      name: 'TestName1',
      type: 'rls',
      sourceKey: 10001,
    });
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.green'))).toBeTruthy();
  });

  it('should create well element hero element to be added', () => {
    fixture.componentInstance.addWell({
      name: 'TestName1',
      type: 'esp',
      sourceKey: 10001,
    });
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.red'))).toBeTruthy();
  });
});
