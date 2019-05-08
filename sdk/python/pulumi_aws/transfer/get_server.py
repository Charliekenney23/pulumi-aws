# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetServerResult:
    """
    A collection of values returned by getServer.
    """
    def __init__(__self__, arn=None, endpoint=None, identity_provider_type=None, invocation_role=None, logging_role=None, server_id=None, url=None, id=None):
        if arn and not isinstance(arn, str):
            raise TypeError("Expected argument 'arn' to be a str")
        __self__.arn = arn
        """
        Amazon Resource Name (ARN) of Transfer Server
        """
        if endpoint and not isinstance(endpoint, str):
            raise TypeError("Expected argument 'endpoint' to be a str")
        __self__.endpoint = endpoint
        """
        The endpoint of the Transfer Server (e.g. `s-12345678.server.transfer.REGION.amazonaws.com`)
        """
        if identity_provider_type and not isinstance(identity_provider_type, str):
            raise TypeError("Expected argument 'identity_provider_type' to be a str")
        __self__.identity_provider_type = identity_provider_type
        """
        The mode of authentication enabled for this service. The default value is `SERVICE_MANAGED`, which allows you to store and access SFTP user credentials within the service. `API_GATEWAY` indicates that user authentication requires a call to an API Gateway endpoint URL provided by you to integrate an identity provider of your choice.
        """
        if invocation_role and not isinstance(invocation_role, str):
            raise TypeError("Expected argument 'invocation_role' to be a str")
        __self__.invocation_role = invocation_role
        """
        Amazon Resource Name (ARN) of the IAM role used to authenticate the user account with an `identity_provider_type` of `API_GATEWAY`.
        """
        if logging_role and not isinstance(logging_role, str):
            raise TypeError("Expected argument 'logging_role' to be a str")
        __self__.logging_role = logging_role
        """
        Amazon Resource Name (ARN) of an IAM role that allows the service to write your SFTP users’ activity to your Amazon CloudWatch logs for monitoring and auditing purposes.
        """
        if server_id and not isinstance(server_id, str):
            raise TypeError("Expected argument 'server_id' to be a str")
        __self__.server_id = server_id
        if url and not isinstance(url, str):
            raise TypeError("Expected argument 'url' to be a str")
        __self__.url = url
        """
        URL of the service endpoint used to authenticate users with an `identity_provider_type` of `API_GATEWAY`.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_server(server_id=None,opts=None):
    """
    Use this data source to get the ARN of an AWS Transfer Server for use in other
    resources.
    """
    __args__ = dict()

    __args__['serverId'] = server_id
 .   if opts is None:
         opts = pulumi.ResourceOptions()
     if opts.version is None:
         opts.version = utilities.get_version()
    __ret__ = await pulumi.runtime.invoke('aws:transfer/getServer:getServer', __args__, opts=opts)

    return GetServerResult(
        arn=__ret__.get('arn'),
        endpoint=__ret__.get('endpoint'),
        identity_provider_type=__ret__.get('identityProviderType'),
        invocation_role=__ret__.get('invocationRole'),
        logging_role=__ret__.get('loggingRole'),
        server_id=__ret__.get('serverId'),
        url=__ret__.get('url'),
        id=__ret__.get('id'))
