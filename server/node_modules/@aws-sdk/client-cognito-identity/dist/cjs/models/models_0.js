"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeDeveloperIdentitiesInput = exports.LookupDeveloperIdentityResponse = exports.LookupDeveloperIdentityInput = exports.ListTagsForResourceResponse = exports.ListTagsForResourceInput = exports.ListIdentityPoolsResponse = exports.IdentityPoolShortDescription = exports.ListIdentityPoolsInput = exports.ListIdentitiesResponse = exports.ListIdentitiesInput = exports.GetPrincipalTagAttributeMapResponse = exports.GetPrincipalTagAttributeMapInput = exports.GetOpenIdTokenForDeveloperIdentityResponse = exports.GetOpenIdTokenForDeveloperIdentityInput = exports.DeveloperUserAlreadyRegisteredException = exports.GetOpenIdTokenResponse = exports.GetOpenIdTokenInput = exports.GetIdentityPoolRolesResponse = exports.RoleMapping = exports.RoleMappingType = exports.RulesConfigurationType = exports.MappingRule = exports.MappingRuleMatchType = exports.GetIdentityPoolRolesInput = exports.GetIdResponse = exports.GetIdInput = exports.InvalidIdentityPoolConfigurationException = exports.GetCredentialsForIdentityResponse = exports.Credentials = exports.GetCredentialsForIdentityInput = exports.ExternalServiceException = exports.DescribeIdentityPoolInput = exports.IdentityDescription = exports.DescribeIdentityInput = exports.ResourceNotFoundException = exports.DeleteIdentityPoolInput = exports.DeleteIdentitiesResponse = exports.UnprocessedIdentityId = exports.ErrorCode = exports.DeleteIdentitiesInput = exports.TooManyRequestsException = exports.ResourceConflictException = exports.NotAuthorizedException = exports.LimitExceededException = exports.InvalidParameterException = exports.InternalErrorException = exports.IdentityPool = exports.CreateIdentityPoolInput = exports.CognitoIdentityProvider = exports.AmbiguousRoleResolutionType = void 0;
exports.UntagResourceResponse = exports.UntagResourceInput = exports.UnlinkIdentityInput = exports.UnlinkDeveloperIdentityInput = exports.TagResourceResponse = exports.TagResourceInput = exports.SetPrincipalTagAttributeMapResponse = exports.SetPrincipalTagAttributeMapInput = exports.SetIdentityPoolRolesInput = exports.ConcurrentModificationException = exports.MergeDeveloperIdentitiesResponse = void 0;
var AmbiguousRoleResolutionType;
(function (AmbiguousRoleResolutionType) {
    AmbiguousRoleResolutionType["AUTHENTICATED_ROLE"] = "AuthenticatedRole";
    AmbiguousRoleResolutionType["DENY"] = "Deny";
})(AmbiguousRoleResolutionType = exports.AmbiguousRoleResolutionType || (exports.AmbiguousRoleResolutionType = {}));
var CognitoIdentityProvider;
(function (CognitoIdentityProvider) {
    /**
     * @internal
     */
    CognitoIdentityProvider.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CognitoIdentityProvider = exports.CognitoIdentityProvider || (exports.CognitoIdentityProvider = {}));
var CreateIdentityPoolInput;
(function (CreateIdentityPoolInput) {
    /**
     * @internal
     */
    CreateIdentityPoolInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIdentityPoolInput = exports.CreateIdentityPoolInput || (exports.CreateIdentityPoolInput = {}));
var IdentityPool;
(function (IdentityPool) {
    /**
     * @internal
     */
    IdentityPool.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityPool = exports.IdentityPool || (exports.IdentityPool = {}));
var InternalErrorException;
(function (InternalErrorException) {
    /**
     * @internal
     */
    InternalErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    /**
     * @internal
     */
    NotAuthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var ResourceConflictException;
(function (ResourceConflictException) {
    /**
     * @internal
     */
    ResourceConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceConflictException = exports.ResourceConflictException || (exports.ResourceConflictException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var DeleteIdentitiesInput;
(function (DeleteIdentitiesInput) {
    /**
     * @internal
     */
    DeleteIdentitiesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIdentitiesInput = exports.DeleteIdentitiesInput || (exports.DeleteIdentitiesInput = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["ACCESS_DENIED"] = "AccessDenied";
    ErrorCode["INTERNAL_SERVER_ERROR"] = "InternalServerError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var UnprocessedIdentityId;
(function (UnprocessedIdentityId) {
    /**
     * @internal
     */
    UnprocessedIdentityId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnprocessedIdentityId = exports.UnprocessedIdentityId || (exports.UnprocessedIdentityId = {}));
var DeleteIdentitiesResponse;
(function (DeleteIdentitiesResponse) {
    /**
     * @internal
     */
    DeleteIdentitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIdentitiesResponse = exports.DeleteIdentitiesResponse || (exports.DeleteIdentitiesResponse = {}));
var DeleteIdentityPoolInput;
(function (DeleteIdentityPoolInput) {
    /**
     * @internal
     */
    DeleteIdentityPoolInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIdentityPoolInput = exports.DeleteIdentityPoolInput || (exports.DeleteIdentityPoolInput = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DescribeIdentityInput;
(function (DescribeIdentityInput) {
    /**
     * @internal
     */
    DescribeIdentityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityInput = exports.DescribeIdentityInput || (exports.DescribeIdentityInput = {}));
var IdentityDescription;
(function (IdentityDescription) {
    /**
     * @internal
     */
    IdentityDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityDescription = exports.IdentityDescription || (exports.IdentityDescription = {}));
var DescribeIdentityPoolInput;
(function (DescribeIdentityPoolInput) {
    /**
     * @internal
     */
    DescribeIdentityPoolInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityPoolInput = exports.DescribeIdentityPoolInput || (exports.DescribeIdentityPoolInput = {}));
var ExternalServiceException;
(function (ExternalServiceException) {
    /**
     * @internal
     */
    ExternalServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExternalServiceException = exports.ExternalServiceException || (exports.ExternalServiceException = {}));
var GetCredentialsForIdentityInput;
(function (GetCredentialsForIdentityInput) {
    /**
     * @internal
     */
    GetCredentialsForIdentityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCredentialsForIdentityInput = exports.GetCredentialsForIdentityInput || (exports.GetCredentialsForIdentityInput = {}));
var Credentials;
(function (Credentials) {
    /**
     * @internal
     */
    Credentials.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Credentials = exports.Credentials || (exports.Credentials = {}));
var GetCredentialsForIdentityResponse;
(function (GetCredentialsForIdentityResponse) {
    /**
     * @internal
     */
    GetCredentialsForIdentityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCredentialsForIdentityResponse = exports.GetCredentialsForIdentityResponse || (exports.GetCredentialsForIdentityResponse = {}));
var InvalidIdentityPoolConfigurationException;
(function (InvalidIdentityPoolConfigurationException) {
    /**
     * @internal
     */
    InvalidIdentityPoolConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidIdentityPoolConfigurationException = exports.InvalidIdentityPoolConfigurationException || (exports.InvalidIdentityPoolConfigurationException = {}));
var GetIdInput;
(function (GetIdInput) {
    /**
     * @internal
     */
    GetIdInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIdInput = exports.GetIdInput || (exports.GetIdInput = {}));
var GetIdResponse;
(function (GetIdResponse) {
    /**
     * @internal
     */
    GetIdResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIdResponse = exports.GetIdResponse || (exports.GetIdResponse = {}));
var GetIdentityPoolRolesInput;
(function (GetIdentityPoolRolesInput) {
    /**
     * @internal
     */
    GetIdentityPoolRolesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIdentityPoolRolesInput = exports.GetIdentityPoolRolesInput || (exports.GetIdentityPoolRolesInput = {}));
var MappingRuleMatchType;
(function (MappingRuleMatchType) {
    MappingRuleMatchType["CONTAINS"] = "Contains";
    MappingRuleMatchType["EQUALS"] = "Equals";
    MappingRuleMatchType["NOT_EQUAL"] = "NotEqual";
    MappingRuleMatchType["STARTS_WITH"] = "StartsWith";
})(MappingRuleMatchType = exports.MappingRuleMatchType || (exports.MappingRuleMatchType = {}));
var MappingRule;
(function (MappingRule) {
    /**
     * @internal
     */
    MappingRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MappingRule = exports.MappingRule || (exports.MappingRule = {}));
var RulesConfigurationType;
(function (RulesConfigurationType) {
    /**
     * @internal
     */
    RulesConfigurationType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RulesConfigurationType = exports.RulesConfigurationType || (exports.RulesConfigurationType = {}));
var RoleMappingType;
(function (RoleMappingType) {
    RoleMappingType["RULES"] = "Rules";
    RoleMappingType["TOKEN"] = "Token";
})(RoleMappingType = exports.RoleMappingType || (exports.RoleMappingType = {}));
var RoleMapping;
(function (RoleMapping) {
    /**
     * @internal
     */
    RoleMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoleMapping = exports.RoleMapping || (exports.RoleMapping = {}));
var GetIdentityPoolRolesResponse;
(function (GetIdentityPoolRolesResponse) {
    /**
     * @internal
     */
    GetIdentityPoolRolesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIdentityPoolRolesResponse = exports.GetIdentityPoolRolesResponse || (exports.GetIdentityPoolRolesResponse = {}));
var GetOpenIdTokenInput;
(function (GetOpenIdTokenInput) {
    /**
     * @internal
     */
    GetOpenIdTokenInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpenIdTokenInput = exports.GetOpenIdTokenInput || (exports.GetOpenIdTokenInput = {}));
var GetOpenIdTokenResponse;
(function (GetOpenIdTokenResponse) {
    /**
     * @internal
     */
    GetOpenIdTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpenIdTokenResponse = exports.GetOpenIdTokenResponse || (exports.GetOpenIdTokenResponse = {}));
var DeveloperUserAlreadyRegisteredException;
(function (DeveloperUserAlreadyRegisteredException) {
    /**
     * @internal
     */
    DeveloperUserAlreadyRegisteredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeveloperUserAlreadyRegisteredException = exports.DeveloperUserAlreadyRegisteredException || (exports.DeveloperUserAlreadyRegisteredException = {}));
var GetOpenIdTokenForDeveloperIdentityInput;
(function (GetOpenIdTokenForDeveloperIdentityInput) {
    /**
     * @internal
     */
    GetOpenIdTokenForDeveloperIdentityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpenIdTokenForDeveloperIdentityInput = exports.GetOpenIdTokenForDeveloperIdentityInput || (exports.GetOpenIdTokenForDeveloperIdentityInput = {}));
var GetOpenIdTokenForDeveloperIdentityResponse;
(function (GetOpenIdTokenForDeveloperIdentityResponse) {
    /**
     * @internal
     */
    GetOpenIdTokenForDeveloperIdentityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpenIdTokenForDeveloperIdentityResponse = exports.GetOpenIdTokenForDeveloperIdentityResponse || (exports.GetOpenIdTokenForDeveloperIdentityResponse = {}));
var GetPrincipalTagAttributeMapInput;
(function (GetPrincipalTagAttributeMapInput) {
    /**
     * @internal
     */
    GetPrincipalTagAttributeMapInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPrincipalTagAttributeMapInput = exports.GetPrincipalTagAttributeMapInput || (exports.GetPrincipalTagAttributeMapInput = {}));
var GetPrincipalTagAttributeMapResponse;
(function (GetPrincipalTagAttributeMapResponse) {
    /**
     * @internal
     */
    GetPrincipalTagAttributeMapResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPrincipalTagAttributeMapResponse = exports.GetPrincipalTagAttributeMapResponse || (exports.GetPrincipalTagAttributeMapResponse = {}));
var ListIdentitiesInput;
(function (ListIdentitiesInput) {
    /**
     * @internal
     */
    ListIdentitiesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIdentitiesInput = exports.ListIdentitiesInput || (exports.ListIdentitiesInput = {}));
var ListIdentitiesResponse;
(function (ListIdentitiesResponse) {
    /**
     * @internal
     */
    ListIdentitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIdentitiesResponse = exports.ListIdentitiesResponse || (exports.ListIdentitiesResponse = {}));
var ListIdentityPoolsInput;
(function (ListIdentityPoolsInput) {
    /**
     * @internal
     */
    ListIdentityPoolsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIdentityPoolsInput = exports.ListIdentityPoolsInput || (exports.ListIdentityPoolsInput = {}));
var IdentityPoolShortDescription;
(function (IdentityPoolShortDescription) {
    /**
     * @internal
     */
    IdentityPoolShortDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityPoolShortDescription = exports.IdentityPoolShortDescription || (exports.IdentityPoolShortDescription = {}));
var ListIdentityPoolsResponse;
(function (ListIdentityPoolsResponse) {
    /**
     * @internal
     */
    ListIdentityPoolsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIdentityPoolsResponse = exports.ListIdentityPoolsResponse || (exports.ListIdentityPoolsResponse = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var LookupDeveloperIdentityInput;
(function (LookupDeveloperIdentityInput) {
    /**
     * @internal
     */
    LookupDeveloperIdentityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LookupDeveloperIdentityInput = exports.LookupDeveloperIdentityInput || (exports.LookupDeveloperIdentityInput = {}));
var LookupDeveloperIdentityResponse;
(function (LookupDeveloperIdentityResponse) {
    /**
     * @internal
     */
    LookupDeveloperIdentityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LookupDeveloperIdentityResponse = exports.LookupDeveloperIdentityResponse || (exports.LookupDeveloperIdentityResponse = {}));
var MergeDeveloperIdentitiesInput;
(function (MergeDeveloperIdentitiesInput) {
    /**
     * @internal
     */
    MergeDeveloperIdentitiesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeDeveloperIdentitiesInput = exports.MergeDeveloperIdentitiesInput || (exports.MergeDeveloperIdentitiesInput = {}));
var MergeDeveloperIdentitiesResponse;
(function (MergeDeveloperIdentitiesResponse) {
    /**
     * @internal
     */
    MergeDeveloperIdentitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MergeDeveloperIdentitiesResponse = exports.MergeDeveloperIdentitiesResponse || (exports.MergeDeveloperIdentitiesResponse = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var SetIdentityPoolRolesInput;
(function (SetIdentityPoolRolesInput) {
    /**
     * @internal
     */
    SetIdentityPoolRolesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetIdentityPoolRolesInput = exports.SetIdentityPoolRolesInput || (exports.SetIdentityPoolRolesInput = {}));
var SetPrincipalTagAttributeMapInput;
(function (SetPrincipalTagAttributeMapInput) {
    /**
     * @internal
     */
    SetPrincipalTagAttributeMapInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetPrincipalTagAttributeMapInput = exports.SetPrincipalTagAttributeMapInput || (exports.SetPrincipalTagAttributeMapInput = {}));
var SetPrincipalTagAttributeMapResponse;
(function (SetPrincipalTagAttributeMapResponse) {
    /**
     * @internal
     */
    SetPrincipalTagAttributeMapResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetPrincipalTagAttributeMapResponse = exports.SetPrincipalTagAttributeMapResponse || (exports.SetPrincipalTagAttributeMapResponse = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UnlinkDeveloperIdentityInput;
(function (UnlinkDeveloperIdentityInput) {
    /**
     * @internal
     */
    UnlinkDeveloperIdentityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnlinkDeveloperIdentityInput = exports.UnlinkDeveloperIdentityInput || (exports.UnlinkDeveloperIdentityInput = {}));
var UnlinkIdentityInput;
(function (UnlinkIdentityInput) {
    /**
     * @internal
     */
    UnlinkIdentityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnlinkIdentityInput = exports.UnlinkIdentityInput || (exports.UnlinkIdentityInput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
//# sourceMappingURL=models_0.js.map