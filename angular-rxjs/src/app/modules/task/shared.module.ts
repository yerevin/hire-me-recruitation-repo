import { NgModule } from "@angular/core";

import { SharedModule } from "@app/core/shared/shared.module";

import { TaskResource } from "@app/modules/task/resources/resource";
import { TaskService } from "@app/modules/task/services/service";

@NgModule({
  declarations: [],
  exports: [],
  imports: [SharedModule],
  providers: [TaskResource, TaskService]
})
export class TaskSharedModule {}
