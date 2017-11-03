
// Import the core angular services.
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http";

// Import the application components and services.
import { AppComponent } from "./components/app.component";

//GAME
import { GameComponent} from "./components/game/game.component";
import { GridComponent } from "./components/game/grid.component";

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpModule,
		JsonpModule
	],
	declarations: [
		AppComponent,
		GameComponent,
		GridComponent,
	]
})
export class AppModule {
	// ...
}
