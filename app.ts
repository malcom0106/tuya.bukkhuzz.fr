import Homey from 'homey';

class MyApp extends Homey.App {
    /**
     * onInit is called when the app is initialized.
     */
    async onInit() {
        this.log('MyApp has been initialized');
        const username = this.homey.settings.get('username');
    }
}

module.exports = MyApp;
