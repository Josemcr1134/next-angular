import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followers',
  standalone:true
})
export class FollowersPipe implements PipeTransform {
  transform(value: number): string {
    return value ? `${value} seguidores` : 'Sin seguidores';
  }
}
