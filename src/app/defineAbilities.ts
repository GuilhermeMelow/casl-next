import { defineAbility } from "@casl/ability";

export const defineAbilityForUser = (user: User) => {
  return defineAbility((can) => {
    can("sinalize", "problems");

    if (user.isLoggedIn) {
      can("delete", "problems", { user: user.id });
    }

    if (user.isLoggedIn && user.isAdm) {
      can("readAll", "problems");
      can("delete", "problems");
    }
  });
};

type User<T = boolean> = T extends true
  ? {
      isLoggedIn: T;
      isAdm: boolean;
      id: number;
    }
  : {
      isLoggedIn: T;
    };
