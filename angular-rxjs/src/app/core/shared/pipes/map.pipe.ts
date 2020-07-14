import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "map"
})
export class Mapping implements PipeTransform {
  transform(value: any, mappingFunction: Function) {
    return mappingFunction(value);
  }
}
