import { __extends } from "tslib";
import { DescribeIdentityInput, IdentityDescription } from "../models/models_0";
import { deserializeAws_json1_1DescribeIdentityCommand, serializeAws_json1_1DescribeIdentityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata related to the given identity, including when the identity was
 *          created and any associated linked logins.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DescribeIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DescribeIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new DescribeIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIdentityCommand = /** @class */ (function (_super) {
    __extends(DescribeIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIdentityCommand(input) {
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
    DescribeIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "DescribeIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIdentityInput.filterSensitiveLog,
            outputFilterSensitiveLog: IdentityDescription.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeIdentityCommand(input, context);
    };
    DescribeIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeIdentityCommand(output, context);
    };
    return DescribeIdentityCommand;
}($Command));
export { DescribeIdentityCommand };
//# sourceMappingURL=DescribeIdentityCommand.js.map