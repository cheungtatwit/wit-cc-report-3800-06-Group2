import { __extends } from "tslib";
import { SetPrincipalTagAttributeMapInput, SetPrincipalTagAttributeMapResponse } from "../models/models_0";
import { deserializeAws_json1_1SetPrincipalTagAttributeMapCommand, serializeAws_json1_1SetPrincipalTagAttributeMapCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>You can use this operation to use default (username and clientID) attribute or custom attribute mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetPrincipalTagAttributeMapCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetPrincipalTagAttributeMapCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new SetPrincipalTagAttributeMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetPrincipalTagAttributeMapCommandInput} for command's `input` shape.
 * @see {@link SetPrincipalTagAttributeMapCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetPrincipalTagAttributeMapCommand = /** @class */ (function (_super) {
    __extends(SetPrincipalTagAttributeMapCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetPrincipalTagAttributeMapCommand(input) {
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
    SetPrincipalTagAttributeMapCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "SetPrincipalTagAttributeMapCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetPrincipalTagAttributeMapInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetPrincipalTagAttributeMapResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetPrincipalTagAttributeMapCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetPrincipalTagAttributeMapCommand(input, context);
    };
    SetPrincipalTagAttributeMapCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetPrincipalTagAttributeMapCommand(output, context);
    };
    return SetPrincipalTagAttributeMapCommand;
}($Command));
export { SetPrincipalTagAttributeMapCommand };
//# sourceMappingURL=SetPrincipalTagAttributeMapCommand.js.map