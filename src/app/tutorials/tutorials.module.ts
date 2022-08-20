import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsRoutingModule } from './tutorials-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { IoComponent } from './io/io.component';
import { SoundComponent } from './sound/sound.component';
import { GuiComponent } from './gui/gui.component';
import { ParticlesComponent } from './particles/particles.component';
import { MeshesComponent } from './meshes/meshes.component';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    BasicsComponent,
    GraphicsComponent,
    IoComponent,
    SoundComponent,
    GuiComponent,
    ParticlesComponent,
    MeshesComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    TutorialsRoutingModule
  ]
})
export class TutorialsModule { }
