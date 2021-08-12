import { __extends } from "tslib";
import { DescribeIdentityPoolInput, IdentityPool } from "../models/models_0";
import { deserializeAws_json1_1DescribeIdentityPoolCommand, serializeAws_json1_1DescribeIdentityPoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets details about a particular identity pool, including the pool name, ID
 *          description, creation date, and current number of users.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DescribeIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DescribeIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new DescribeIdentityPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIdentityPoolCommand = /** @class */ (function (_super) {
    __extends(DescribeIdentityPoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIdentityPoolCommand(input) {
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
    DescribeIdentityPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "DescribeIdentityPoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIdentityPoolInput.filterSensitiveLog,
            outputFilterSensitiveLog: IdentityPool.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIdentityPoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeIdentityPoolCommand(input, context);
    };
    DescribeIdentityPoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeIdentityPoolCommand(output, context);
    };
    return DescribeIdentityPoolCommand;
}($Command));
export { DescribeIdentityPoolCommand };
//# sourceMappingURL=DescribeIdentityPoolCommand.js.map