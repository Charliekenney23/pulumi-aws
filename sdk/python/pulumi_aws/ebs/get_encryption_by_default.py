# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetEncryptionByDefaultResult:
    """
    A collection of values returned by getEncryptionByDefault.
    """
    def __init__(__self__, enabled=None, id=None):
        if enabled and not isinstance(enabled, bool):
            raise TypeError("Expected argument 'enabled' to be a bool")
        __self__.enabled = enabled
        """
        Whether or not default EBS encryption is enabled. Returns as `true` or `false`.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_encryption_by_default(opts=None):
    """
    Provides a way to check whether default EBS encryption is enabled for your AWS account in the current AWS region.
    """
    __args__ = dict()

    __ret__ = await pulumi.runtime.invoke('aws:ebs/getEncryptionByDefault:getEncryptionByDefault', __args__, opts=opts)

    return GetEncryptionByDefaultResult(
        enabled=__ret__.get('enabled'),
        id=__ret__.get('id'))
