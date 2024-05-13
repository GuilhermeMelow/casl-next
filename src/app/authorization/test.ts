import { User } from "../types";
import { defineAbilityFor } from "./ability";
import { Role } from "./roles";

describe("permissions", () => {
  describe("common user", () => {
    test("should authorize to create a problem", () => {
      // Arrange
      const user = createUser();

      // Act
      const ability = defineAbilityFor(user);

      // Assert
      expect(ability.can("sinalize", "Problem")).toBeTruthy();
    });

    test("should authorize owned resource", () => {
      // Arrange
      const user = createUser();

      // Act
      const ability = defineAbilityFor(user);

      // Assert
      expect(ability.can("delete", { kind: "Problem", id: 1 })).toBeTruthy();
    });

    test("should not authorize unowned resource", () => {
      // Arrange
      const user = createUser();

      // Act
      const ability = defineAbilityFor(user);

      // Assert
      expect(ability.can("delete", { kind: "Problem", id: 2 })).toBeFalsy();
    });

    test("should authorize if feature flag is present", () => {
      // Arrange
      const user = createUser();

      // Act
      const ability = defineAbilityFor(user);

      // Assert
      expect(
        ability.can("readAll", { kind: "Problem", featureFlags: ["teste1"] })
      ).toBeTruthy();
    });

    test("should not authorize if feature flag is not present", () => {
      // Arrange
      const user = createUser();

      // Act
      const ability = defineAbilityFor(user);

      // Assert
      expect(
        ability.can("readAll", {
          kind: "Problem",
          featureFlags: ["another flag"],
        })
      ).toBeFalsy();
    });
  });
});

function createUser(role: Role = "COMMON"): User {
  return {
    id: 1,
    username: "user",
    type: role,
    isLoggedIn: false,
    featureFlags: [],
  };
}
