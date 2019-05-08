# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetAccountAliasResult:
    """
    A collection of values returned by getAccountAlias.
    """
    def __init__(__self__, account_alias=None, id=None):
        if account_alias and not isinstance(account_alias, str):
            raise TypeError("Expected argument 'account_alias' to be a str")
        __self__.account_alias = account_alias
        """
        The alias associated with the AWS account.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_account_alias(opts=None):
    """
    The IAM Account Alias data source allows access to the account alias
    for the effective account in which Terraform is working.
    """
    __args__ = dict()

 .   if opts is None:
         opts = pulumi.ResourceOptions()
     if opts.version is None:
         opts.version = utilities.get_version()
    __ret__ = await pulumi.runtime.invoke('aws:iam/getAccountAlias:getAccountAlias', __args__, opts=opts)

    return GetAccountAliasResult(
        account_alias=__ret__.get('accountAlias'),
        id=__ret__.get('id'))
