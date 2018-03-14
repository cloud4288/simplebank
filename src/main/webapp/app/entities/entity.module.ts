import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SimplebankBankAccountModule } from './bank-account/bank-account.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SimplebankBankAccountModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SimplebankEntityModule {}
