import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NotFoundComponent} from "../alerts/not-found/not-found.component";

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(
    private dialog: MatDialog
  ) { }

  notFound() {
    let enterAnimationDuration = '200ms'
    let exitAnimationDuration = '200ms'
    let dialogRef = this.dialog.open(NotFoundComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    })
    return dialogRef.afterClosed()
  }
}
