import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';
import { LoadingService } from '../Service/Loading.Service';

export const loadingSpinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(LoadingService);
  busyService.busy();
  return next(req).pipe(
    delay(2000),
    finalize(() => busyService.idle()));
};