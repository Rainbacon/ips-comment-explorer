import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FilterReducer } from '../components/filter/filter.reducer';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot({
            filters: FilterReducer
        }),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument()
    ]   
})
export class StateModule {
    constructor(@Optional() @SkipSelf() parentModule: StateModule) {
        if (parentModule) {
            throw new Error(
                "StateModule is already loaded. Import it in the AppModule only"
            );
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StateModule,
            providers: []
        }
    }
}
