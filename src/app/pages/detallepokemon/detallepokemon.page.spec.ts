import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallepokemonPage } from './detallepokemon.page';

describe('DetallepokemonPage', () => {
  let component: DetallepokemonPage;
  let fixture: ComponentFixture<DetallepokemonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallepokemonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallepokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
