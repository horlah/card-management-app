import { Component } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    constructor(
        private toastController: ToastController,
        private loadingController: LoadingController
        ) { }

    async updateProfile() {
        const loading = await this.loadingController.create({
            message: 'updating...',
            duration: 2000
        });
        await loading.present();

        const toast = await this.toastController.create({
            message: 'Your profile has been updated successfully.',
            duration: 4000
        });

        loading.onDidDismiss().then(() => toast.present());
    }
}
