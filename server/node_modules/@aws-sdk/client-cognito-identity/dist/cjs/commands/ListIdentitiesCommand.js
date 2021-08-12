"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListIdentitiesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the identities in an identity pool.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, ListIdentitiesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, ListIdentitiesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new ListIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListIdentitiesCommand extends smithy_client_1.Command {
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
        const commandName = "ListIdentitiesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListIdentitiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListIdentitiesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListIdentitiesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListIdentitiesCommand(output, context);
    }
}
exports.ListIdentitiesCommand = ListIdentitiesCommand;
//# sourceMappingURL=ListIdentitiesCommand.js.map