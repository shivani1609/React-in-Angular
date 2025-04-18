import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNodeComponent } from './action-node.component';

describe('ActionNodeComponent', () => {
  let component: ActionNodeComponent;
  let fixture: ComponentFixture<ActionNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
