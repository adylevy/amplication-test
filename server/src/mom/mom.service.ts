import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MomServiceBase } from "./base/mom.service.base";

@Injectable()
export class MomService extends MomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
