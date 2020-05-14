import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2modalPage } from './tab2modal.page';

describe('Tab2modalPage', () => {
  let component: Tab2modalPage;
  let fixture: ComponentFixture<Tab2modalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2modalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2modalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
