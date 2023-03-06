import {Component, OnInit, ViewChild} from '@angular/core';
import {OverlayEventDetail} from "@ionic/core/components";
import {IonModal} from "@ionic/angular";
import {StorageService} from "../../services/storage.service";
import {ToastService} from "../../services/toast.service";
import {LocalNotifications, ScheduleOptions} from "@capacitor/local-notifications";


@Component({
  selector: 'app-pills',
  templateUrl: './pills.page.html',
  styleUrls: ['./pills.page.scss'],
})
export class PillsPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  constructor(private storageService: StorageService, private toastCtrl: ToastService) {
    this.loadPills();

  }

  async loadPills(){
    this.data = [{"id":"1", "principio_attivo":"asd", "descrizione_gruppo":"asd", "denom":"asd", "prezzo":"33.22"}]
  }

  onWillDismiss($event: any) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;

    if (ev.detail.role === 'confirm') {
      return;
    } else {
      return;
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  keyword = 'denom';
  data: any = [];
  notFound: any = "Farmaco non trovato";
  minQuery: number = 3;
  selectedPill: any;

  temp = [];
  selectedTime: any;
  hideFrequenza: boolean = false;
  hideOraSingola: boolean = false;
  hideOraDoppia: boolean = false;
  hideScorta: boolean = false;
  selectedFreque: any;
  oraPrimaDoseSingola: any;
  oraPrimaDoseDoppia: any;
  qtSecondaDoseDoppia: any;
  oraSecondaDoseDoppia: any;
  qtPrimaDoseDoppia: any;



  selectEvent(item: any) {
    console.log("item", item);
  }

  onChangeSearch(val: string) {
    console.log("val", val);
  }

  onFocused(e:any){
    return;
  }

  addPill() {
    this.hideFrequenza = true;
  }


  ngOnInit() {
    if( !this.storageService.get('my_pills')){
      return;
    }
    this.storageService.get('my_pills').then((value) => {
      if(value){
        this.temp = value;
      }
    });
  }


  async setNotification(_every: any, _hour: number, _min: number, _pill_name: string) {

    await LocalNotifications.requestPermissions().then((res)=>console.log('perm status', res));

    let randomId = Math.floor(Math.random() * 1000);
    await LocalNotifications.schedule(<ScheduleOptions>{
      notifications: [{
        id: randomId,
        title: "Promemoria Pillole",
        body: "Ricordati di assumere " + _pill_name,
        schedule: {
          allowWhileIdle: true,
          on: {hour: _hour, minute: _min},
          every: _every,
          repeats: true
        }
      }]
    }).then( (res)=> console.log("esito schedule", res));
  }

  selectedFreq() {
    if(this.selectedFreque === 'once'){
      this.hideOraSingola = true;
      this.hideOraDoppia = false;
    } else if (this.selectedFreque === 'twice'){
      this.hideOraSingola = false;
      this.hideOraDoppia = true;
    } else {
      this.hideOraSingola = false;
      this.hideOraDoppia = false;
      return;
    }
  }

  salvaPromemoria() {
    this.selectedPill.oraPrimaDoseSingola = this.oraPrimaDoseSingola;
    this.selectedPill.oraPrimaDoseDoppia = this.oraPrimaDoseDoppia;
    this.selectedPill.oraSecondaDoseDoppia = this.oraSecondaDoseDoppia;
    this.selectedPill.scheduled = this.selectedFreque;

    let appo = Array.of(this.selectedPill)
    // @ts-ignore
    this.temp.push(appo);
    this.storageService.store("my_pills", this.temp);

    if(this.selectedFreque === 'once') {
      let time = this.oraPrimaDoseSingola;
      let split = time.split(':');
      let Hour = split[0]
      let Min = split[1];

      this.setNotification("day", Hour, Min, this.selectedPill.denom);
      this.modal.dismiss();
      this.toastCtrl.presentToast("Promemoria Salvato con Successo");
    } else if (this.selectedFreque == 'twice'){
      let time = this.oraPrimaDoseDoppia;
      let split = time.split(':');
      let Hour = split[0];
      let Min = split[1];

      this.setNotification("day", Hour, Min, this.selectedPill.denom);
      let time2 = this.oraSecondaDoseDoppia;
      let split2 = time2.split(':');
      let Hour2 = split2[0];
      let Min2 = split2[1];

      this.setNotification("day", Hour2, Min2, this.selectedPill.denom);
      this.modal.dismiss();
      this.toastCtrl.presentToast("Promemoria Salvato con Successo");
    }
  }
}
