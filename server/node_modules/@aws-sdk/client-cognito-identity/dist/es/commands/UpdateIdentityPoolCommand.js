import { __extends } from "tslib";
import { IdentityPool } from "../models/models_0";
import { deserializeAws_json1_1UpdateIdentityPoolCommand, serializeAws_json1_1UpdateIdentityPoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an identity pool.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, UpdateIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, UpdateIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new UpdateIdentityPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIdentityPoolCommand = /** @class */ (function (_super) {
    __extends(UpdateIdentityPoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIdentityPoolCommand(input) {
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
    UpdateIdentityPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "UpdateIdentityPoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: IdentityPool.filterSensitiveLog,
            outputFilterSensitiveLog: IdentityPool.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIdentityPoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateIdentityPoolCommand(input, context);
    };
    UpdateIdentityPoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateIdentityPoolCommand(output, context);
    };
    return UpdateIdentityPoolCommand;
}($Command));
export { UpdateIdentityPoolCommand };
//# sourceMappingURL=UpdateIdentityPoolCommand.js.map