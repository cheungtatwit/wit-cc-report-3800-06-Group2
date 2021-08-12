import { __extends } from "tslib";
import { GetPrincipalTagAttributeMapInput, GetPrincipalTagAttributeMapResponse } from "../models/models_0";
import { deserializeAws_json1_1GetPrincipalTagAttributeMapCommand, serializeAws_json1_1GetPrincipalTagAttributeMapCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetPrincipalTagAttributeMapCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetPrincipalTagAttributeMapCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetPrincipalTagAttributeMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPrincipalTagAttributeMapCommandInput} for command's `input` shape.
 * @see {@link GetPrincipalTagAttributeMapCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPrincipalTagAttributeMapCommand = /** @class */ (function (_super) {
    __extends(GetPrincipalTagAttributeMapCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPrincipalTagAttributeMapCommand(input) {
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
    GetPrincipalTagAttributeMapCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "GetPrincipalTagAttributeMapCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPrincipalTagAttributeMapInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPrincipalTagAttributeMapResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPrincipalTagAttributeMapCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPrincipalTagAttributeMapCommand(input, context);
    };
    GetPrincipalTagAttributeMapCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPrincipalTagAttributeMapCommand(output, context);
    };
    return GetPrincipalTagAttributeMapCommand;
}($Command));
export { GetPrincipalTagAttributeMapCommand };
//# sourceMappingURL=GetPrincipalTagAttributeMapCommand.js.map