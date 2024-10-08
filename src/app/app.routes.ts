import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ErrorComponent } from './Components/error/error.component';
import { PropertiesComponent } from './Components/properties/properties.component';
import { PropertyComponent } from './Components/property/property.component';
import { AgentProfileComponent } from './Components/agent-profile/agent-profile.component';
import { AgentsComponent } from './Components/agents/agents.component';
import { AgenciesComponent } from './Components/agencies/agencies.component';
import { AgencyProfileComponent } from './Components/agency-profile/agency-profile.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';
import { ProgramsComponent } from './Components/programs/programs.component';
import { CairoComponent } from './Components/cairo/cairo.component';
import { AlexComponent } from './Components/alex/alex.component';
import { NewAdministrationCapitalComponent } from './Components/new-administration-capital/new-administration-capital.component';
import { MadinatyComponent } from './Components/madinaty/madinaty.component';
import { ApartmentComponent } from './Components/apartment/apartment.component';
import { StudioComponent } from './Components/studio/studio.component';
import { SingleFamilyComponent } from './Components/single-family/single-family.component';
import { VillaComponent } from './Components/villa/villa.component';
import { OfficeComponent } from './Components/office/office.component';
import { ShopComponent } from './Components/shop/shop.component';
import { RegisterComponent } from './Components/register-form/register-form.component';
import { LoginComponent } from './Components/login/login.component';
import { PropertiesForAgencyComponent } from './Components/dashboard/agency-side-bar/properties-for-agency/properties-for-agency.component';
import { AddPropertyComponent } from './Components/dashboard/agency-side-bar/add-property/add-property.component';
import { MembershipComponent } from './Components/dashboard/agency-side-bar/membership/membership.component';
import { AgentsForAgencyComponent } from './Components/dashboard/agency-side-bar/agents-for-agency/agents-for-agency.component';
import { AddAgentComponent } from './Components/dashboard/agency-side-bar/add-agent/add-agent.component';
import { ProfileComponent } from './Components/dashboard/agency-side-bar/profile/profile.component';
export const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "Home", component:HomeComponent },
  { path: "dashboard", 
    component: DashboardComponent,
    children:[
      { path : 'propertiesForAgency', component: PropertiesForAgencyComponent },
      { path : 'addProperty',component: AddPropertyComponent},
      { path : 'membership',component: MembershipComponent},
      { path : 'AgentsForAgency',component:AgentsForAgencyComponent},
      { path : 'addAgent' , component:AddAgentComponent},
      { path : 'profile/:id' , component : ProfileComponent},
      { path : '', redirectTo: 'propertiesForAgency', pathMatch: 'full' }
    ]
  },
  { path: "properties", component: PropertiesComponent },
  { path: "property/:id", component: PropertyComponent },
  { path: "agents", component: AgentsComponent },
  { path: "agent-profile/:id", component: AgentProfileComponent },
  { path: "agencies", component: AgenciesComponent },
  { path: "agency-profile/:id", component: AgencyProfileComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "subscription", component: SubscriptionComponent },
  { path: "programs", component: ProgramsComponent },
  { path: "cairo", component: CairoComponent },
  { path: "alex", component: AlexComponent },
  { path: "madinaty", component: MadinatyComponent },
  { path: "new-administration-capital", component: NewAdministrationCapitalComponent },
  { path: "apartment", component: ApartmentComponent },
  { path: "studio", component: StudioComponent },
  { path: "villa", component: VillaComponent },
  { path: "office", component: OfficeComponent },
  { path: "shop", component: ShopComponent },
  { path: "single-family", component: SingleFamilyComponent },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  { path: "**", component:ErrorComponent },
  { path: "error", component:ErrorComponent }
];
