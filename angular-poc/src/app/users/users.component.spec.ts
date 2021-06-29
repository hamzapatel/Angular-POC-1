import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule],
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test if row created properly', () => {
    fixture.componentInstance.users=[{ firstName: 'TestName',
      age: 12}]
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('td').textContent).toContain('TestName')
  });
  
  it("should create one tr for each hero element to be added", () => {
    fixture.componentInstance.users = [
      { firstName: 'TestName1',
      age: 12},
      { firstName: 'TestName2',
      age: 14}
    ];
    fixture.detectChanges(); 
    expect(fixture.debugElement.queryAll(By.css("tbody tr")).length).toBe(2);
  });
});
