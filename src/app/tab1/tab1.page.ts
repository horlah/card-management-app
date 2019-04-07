import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

    constructor(private alertController: AlertController) { }

    async addCard() {
        const alert = await this.alertController.create({
            header: 'Bank Name',
            inputs: [
                {
                    name: 'access_bank',
                    type: 'radio',
                    label: 'Access Bank',
                    value: 'access_bank'
                },
                {
                    name: 'zenith_bank',
                    type: 'radio',
                    label: 'Zenith Bank',
                    value: 'zenith_bank'
                },
                {
                    name: 'gt_bank',
                    type: 'radio',
                    label: 'GT Bank',
                    value: 'gt_bank'
                },
                {
                    name: 'first_bank',
                    type: 'radio',
                    label: 'First Bank',
                    value: 'first_bank'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Next',
                    handler: () => {
                        this.cardType();
                    }
                }
            ]
        });

        await alert.present();
    }

    async cardType() {
        const alert = await this.alertController.create({
            header: 'Card Type',
            inputs: [
                {
                    name: 'verve',
                    type: 'radio',
                    label: 'Verve',
                    value: 'verve'
                },
                {
                    name: 'visa',
                    type: 'radio',
                    label: 'Visa',
                    value: 'visa'
                },
                {
                    name: 'masterCard',
                    type: 'radio',
                    label: 'Master Card',
                    value: 'masterCard'
                }
            ],
            buttons: [
                {
                    text: 'Previous',
                    cssClass: 'secondary',
                    handler: () => {
                        this.addCard();
                    }
                }, {
                    text: 'Next',
                    handler: () => {
                        this.cardDetails();
                    }
                }
            ]
        });

        await alert.present();
    }

    async cardDetails() {
        const alert = await this.alertController.create({
            header: 'Card Details',
            inputs: [
                {
                    name: 'card_number',
                    type: 'number',
                    placeholder: '**** **** ****'
                },
                {
                    name: 'cvv',
                    type: 'number',
                    placeholder: '***'
                },
                {
                    name: 'expiry_date',
                    type: 'date',
                    placeholder: '12/2022'
                }
            ],
            buttons: [
                {
                    text: 'Previous',
                    cssClass: 'secondary',
                    handler: () => {
                        this.cardType();
                    }
                }, {
                    text: 'Add',
                    handler: () => {
                        console.log('Confirm Ok');
                    }
                }
            ]
        });

        await alert.present();
    }
}
