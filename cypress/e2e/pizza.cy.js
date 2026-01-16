describe("Kullanıcı siteye girdi, sipariş verebiliyor", () => {
    it('passes', () => {
        cy.visit("http://localhost:5173");

        cy.contains('a', 'ACIKTIM').click()

        cy.get('[data-cy="form-pizzaSize"]').contains('Küçük').click()
        cy.get('[data-cy="form-dough"]').select('Kalın')
        cy.contains("Pepperoni").click()
        cy.contains("Kabak").click();
        cy.contains("Sucuk").click();
        cy.contains("Jalepeno").click();
        cy.get('[data-cy="form-isim"]').type("Kullanıcı33")
        cy.contains('button', 'SİPARİŞ VER').click()

        cy.url().should('include', '/siparis-alindi');

        cy.contains('lezzetin yolda').should('be.visible');
    })
})

describe("Kullanıcı formları doldurup sipariş verebiliyor", () => {
    it('passes', () => {
        cy.visit("http://localhost:5173/siparis");

        cy.get('[data-cy="form-pizzaSize"]').contains('Küçük').click()
        cy.get('[data-cy="form-dough"]').select('Kalın')
        cy.contains("Pepperoni").click()
        cy.contains("Kabak").click();
        cy.contains("Sucuk").click();
        cy.contains("Jalepeno").click();
        cy.get('[data-cy="form-isim"]').type("Kullanıcı33")
        cy.contains('button', 'SİPARİŞ VER').click()

        cy.url().should('include', '/siparis-alindi');

        cy.contains('lezzetin yolda').should('be.visible');
    })
})

describe("Kullanıcı eksik malzeme tercihi yaptı, error gözüküyor mu?", () => {
    it('error message', () => {
        cy.visit("http://localhost:5173/siparis");

        cy.get('[data-cy="form-pizzaSize"]').contains('Küçük').click()
        cy.get('[data-cy="form-dough"]').select('Kalın')
        cy.contains("Pepperoni").click()
        cy.contains("Kabak").click();
        cy.contains("Jalepeno").click();

        cy.contains('button', 'SİPARİŞ VER').should("be.disabled")
        cy.contains('Lütfen en az 4 pizza malzemesi seçiniz').should('be.visible');
    })
})

describe("Kullanıcı formu doldurmadan sipariş vere tıkladı", () => {
    it("zorunlu alanlar eksikse sipariş ver butonu disabled kalır", () => {
        cy.visit("http://localhost:5173/siparis");

        cy.contains("button", "SİPARİŞ VER").should("be.disabled");

        cy.get('[data-cy="form-isim"]').type("Kullanıcı33");
        cy.contains("button", "SİPARİŞ VER").should("be.disabled");
    });
})

describe("Kullanıcı formları doldurup isim doldurmuyor", () => {
    it('isim doldurmadı button disabled', () => {
        cy.visit("http://localhost:5173/siparis");

        cy.get('[data-cy="form-pizzaSize"]').contains('Küçük').click()
        cy.get('[data-cy="form-dough"]').select('Kalın')
        cy.contains("Pepperoni").click()
        cy.contains("Kabak").click();
        cy.contains("Sucuk").click();
        cy.contains("Jalepeno").click();
        cy.get('[data-cy="form-isim"]').type("1")

        cy.contains('button', 'SİPARİŞ VER').should('be.disabled')

    })
})

/*
sipariş toplamı summary'i aktif yapmak lazım
*/
