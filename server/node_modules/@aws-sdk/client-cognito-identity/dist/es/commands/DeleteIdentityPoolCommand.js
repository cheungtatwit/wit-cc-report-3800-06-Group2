import { __extends } from "tslib";
import { DeleteIdentityPoolInput } from "../models/models_0";
import { deserializeAws_json1_1DeleteIdentityPoolCommand, serializeAws_json1_1DeleteIdentityPoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an identity pool. Once a pool is deleted, users will not be able to
 *          authenticate with the pool.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DeleteIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DeleteIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new DeleteIdentityPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIdentityPoolCommand = /** @class */ (function (_super) {
    __extends(DeleteIdentityPoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIdentityPoolCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DeleteIdentityPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "DeleteIdentityPoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIdentityPoolInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIdentityPoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteIdentityPoolCommand(input, context);
    };
    DeleteIdentityPoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteIdentityPoolCommand(output, context);
    };
    return DeleteIdentityPoolCommand;
}($Command));
export { DeleteIdentityPoolCommand };
//# sourceMappingURL=DeleteIdentityPoolCommand.js.map