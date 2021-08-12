"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPrincipalTagAttributeMapCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class SetPrincipalTagAttributeMapCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CognitoIdentityClient";
        const commandName = "SetPrincipalTagAttributeMapCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SetPrincipalTagAttributeMapInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SetPrincipalTagAttributeMapResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1SetPrincipalTagAttributeMapCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1SetPrincipalTagAttributeMapCommand(output, context);
    }
}
exports.SetPrincipalTagAttributeMapCommand = SetPrincipalTagAttributeMapCommand;
//# sourceMappingURL=SetPrincipalTagAttributeMapCommand.js.map