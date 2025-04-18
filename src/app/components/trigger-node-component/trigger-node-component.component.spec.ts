import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerNodeComponentComponent } from './trigger-node-component.component';

describe('TriggerNodeComponentComponent', () => {
  let component: TriggerNodeComponentComponent;
  let fixture: ComponentFixture<TriggerNodeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerNodeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerNodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
