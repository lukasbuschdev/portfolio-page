import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsFromColleaguesComponent } from './comments-from-colleagues.component';

describe('CommentsFromColleaguesComponent', () => {
  let component: CommentsFromColleaguesComponent;
  let fixture: ComponentFixture<CommentsFromColleaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsFromColleaguesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentsFromColleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
