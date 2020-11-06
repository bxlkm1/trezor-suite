// @group:suite
// @retry=2

describe('Suite switch wallet modal', () => {
    beforeEach(() => {
        cy.viewport(1024, 768).resetDb();
        cy.task('stopEmu');
    });

    it('passphrase_protection: false', () => {
        cy.task('startEmu', { wipe: true });
        cy.task('setupEmu', { passphrase_protection: false });
        cy.prefixedVisit('/settings');
        cy.passThroughInitialRun();
        cy.getTestElement('@menu/switch-device').click();

        // cy.getTestElement('switch-device/add-hidden-wallet-button').should('not.be.visible');
        cy.getTestElement('@switch-device/add-standard-wallet-button').click();
        cy.wait(5000);
        
        cy.getTestElement('@suite/loading', { timeout: 30000 }).should('not.be.visible');
        cy.wait(5000);
        cy.getTestElement('@menu/switch-device').click();
        cy.getTestElement('@switch-device/wallet-instance').should('contain', 'Hidden wallet #1')
    });
});
