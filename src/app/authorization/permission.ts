import { AbilityBuilder } from "@casl/ability";
import { User } from "../types";
import { AppAbility } from "./ability";
import { Role } from "./roles";

type UserPermissions = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void;

export const permission: Record<Role, UserPermissions> = {
  ADMIN(_, { can }) {
    can("manage", "all");
  },
  COMMON(user, { can }) {
    can("readAll", "Problem");
    can("update", "Profile", { id: user.id });
  },
};
