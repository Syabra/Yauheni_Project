export * from './feature.service';
import { FeatureService } from './feature.service';
export * from './functions.service';
import { FunctionsService } from './functions.service';
export * from './rights.service';
import { RightsService } from './rights.service';
export * from './role.service';
import { RoleService } from './role.service';
export * from './userRights.service';
import { UserRightsService } from './userRights.service';
export const APIS = [FeatureService, FunctionsService, RightsService, RoleService, UserRightsService];
