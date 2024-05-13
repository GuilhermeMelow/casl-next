import { AbilityBuilder } from "@casl/ability";
import { User } from "../types";
import { AppAbility } from "./ability";
import { Role } from "./roles";

type UserPermissions = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void;

export const permission: Record<Role, UserPermissions> = {
  ADMIN(_, { can, cannot }) {
    can("manage", "all");
    cannot("sinalize", "Problem");
  },
  COMMON(user, { can }) {
    can("readAll", "Problem");
    can("delete", "Problem", { id: user.id });
    can("update", "Profile", { id: user.id });
  },
};
