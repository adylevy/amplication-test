import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MomModuleBase } from "./base/mom.module.base";
import { MomService } from "./mom.service";
import { MomController } from "./mom.controller";
import { MomResolver } from "./mom.resolver";

@Module({
  imports: [MomModuleBase, forwardRef(() => AuthModule)],
  controllers: [MomController],
  providers: [MomService, MomResolver],
  exports: [MomService],
})
export class MomModule {}
