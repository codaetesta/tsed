import {Ignore as I} from "@tsed/schema";

/**
 * Disable serialization for this property when the Converters service will render the JSON object.
 *
 * ::: tip
 * This decorator is used by the Converters to serialize correctly your model.
 * :::
 *
 * ::: warning
 * Swagger will not generate documentation for the ignored property.
 * :::
 *
 * ```typescript
 * class User {
 *   @Ignore()
 *   _id: string;
 *
 *   @Property()
 *   firstName: string;
 *
 *   @Property()
 *   lastName: string;
 *
 *   @Ignore()
 *   password: string;
 * }
 * ```
 *
 * The controller:
 * ```typescript
 * import {Post, Controller, BodyParams} from "@tsed/common";
 * import {Person} from "../models/Person";
 *
 * @Controller("/")
 * export class UsersCtrl {
 *
 *   @Get("/")
 *   get(): User {
 *       const user = new User();
 *       user._id = "12345";
 *       user.firstName = "John";
 *       user.lastName = "Doe";
 *       user.password = "secretpassword";
 *         return
 *   }
 * }
 * ```
 *
 * The expected json object:
 *
 * ```json
 * {
 *  "firstName": "John",
 *  "lastName": "Doe"
 * }
 * ```
 *
 * @decorator
 * @jsonMapper
 * @schema
 * @ignore
 * @deprecated Use @Ignore decorator from @tsed/schema instead of.
 */
export function Ignore() {
  return I();
}
