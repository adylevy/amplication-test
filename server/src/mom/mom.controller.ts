import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MomService } from "./mom.service";
import { MomControllerBase } from "./base/mom.controller.base";

@swagger.ApiTags("moms")
@common.Controller("moms")
export class MomController extends MomControllerBase {
  constructor(
    protected readonly service: MomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
