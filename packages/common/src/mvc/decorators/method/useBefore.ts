import {EndpointMetadata} from "../../models/EndpointMetadata";
import {DecoratorTypes, UnsupportedDecoratorType} from "@tsed/core";
import {JsonEntityFn} from "@tsed/schema";

/**
 * Mounts the specified middleware function or functions at the specified path: the middleware function is executed when
 * the base of the requested path matches `path.
 *
 * ```typescript
 * @Controller('/')
 * @UseBefore(Middleware1) // called only one time before all endpoint
 * export class Ctrl {
 *
 *    @Get('/')
 *    @UseBefore(Middleware2)
 *    get() { }
 * }
 * ```
 *
 * @returns {function(any, any, any): *}
 * @param args
 * @decorator
 * @operation
 */
export function UseBefore(...args: any[]): Function {
  return JsonEntityFn((entity, parameters) => {
    switch (entity.decoratorType) {
      case DecoratorTypes.METHOD:
        (entity as EndpointMetadata).before(args);
        break;

      case DecoratorTypes.CLASS:
        entity.store.merge("middlewares", {useBefore: args});
        break;

      default:
        throw new UnsupportedDecoratorType(UseBefore, parameters);
    }
  });
}
