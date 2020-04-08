import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewmapPage } from './viewmap.page';

describe('ViewmapPage', () => {
  let component: ViewmapPage;
  let fixture: ComponentFixture<ViewmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
