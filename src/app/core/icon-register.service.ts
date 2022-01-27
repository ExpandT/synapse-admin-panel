import { Injectable } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class IconRegisterService {
  constructor(private readonly matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}

  registerIcon(iconName: string, iconPath: string): void {
    this.matIconRegistry.addSvgIcon(iconName, this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath));
  }

}
