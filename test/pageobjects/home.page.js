class HomePage {

    get homePageTitle () { return $('h1.SectionHero_heroMainTitle__1tjQZ span'); }
    get profileBtn () { return $('button.TopbarDesktop_profileMenuLabel__2z9VA img'); }
    get logoutBtn () { return $('button.TopbarDesktop_logoutButton__3Hq2l span + span'); }

    logout () {
        this.profileBtn.click();
        this.logoutBtn.click();
    }
}

module.exports = new HomePage();