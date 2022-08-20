import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { GuiComponent } from './gui/gui.component';
import { IoComponent } from './io/io.component';
import { MeshesComponent } from './meshes/meshes.component';
import { OverviewComponent } from './overview/overview.component';
import { ParticlesComponent } from './particles/particles.component';
import { SoundComponent } from './sound/sound.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'basics',
    component: BasicsComponent,
  },
  {
    path: 'graphics',
    component: GraphicsComponent,
  },
  {
    path: 'io',
    component: IoComponent,
  },
  {
    path: 'sound',
    component: SoundComponent,
  },
  {
    path: 'gui',
    component: GuiComponent,
  },
  {
    path: 'particles',
    component: ParticlesComponent,
  },
  {
    path: 'meshes',
    component: MeshesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialsRoutingModule {}
