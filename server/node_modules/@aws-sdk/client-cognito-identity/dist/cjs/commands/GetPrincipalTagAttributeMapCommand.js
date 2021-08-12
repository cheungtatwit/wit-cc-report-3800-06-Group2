"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPrincipalTagAttributeMapCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetPrincipalTagAttributeMapCommand extends smithy_client_1.Command {
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
        const commandName = "GetPrincipalTagAttributeMapCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetPrincipalTagAttributeMapInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetPrincipalTagAttributeMapResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetPrincipalTagAttributeMapCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetPrincipalTagAttributeMapCommand(output, context);
    }
}
exports.GetPrincipalTagAttributeMapCommand = GetPrincipalTagAttributeMapCommand;
//# sourceMappingURL=GetPrincipalTagAttributeMapCommand.js.map