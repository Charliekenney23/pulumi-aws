# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class User(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN assigned by AWS for this user.
    """
    force_destroy: pulumi.Output[bool]
    """
    When destroying this user, destroy even if it
    has non-Terraform-managed IAM access keys, login profile or MFA devices. Without `force_destroy`
    a user with non-Terraform-managed access keys and login profile will fail to be destroyed.
    """
    name: pulumi.Output[str]
    """
    The user's name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. User names are not distinguished by case. For example, you cannot create users named both "TESTUSER" and "testuser".
    """
    path: pulumi.Output[str]
    """
    Path in which to create the user.
    """
    permissions_boundary: pulumi.Output[str]
    """
    The ARN of the policy that is used to set the permissions boundary for the user.
    """
    tags: pulumi.Output[dict]
    """
    Key-value mapping of tags for the IAM user
    """
    unique_id: pulumi.Output[str]
    """
    The [unique ID][1] assigned by AWS.
    """
    def __init__(__self__, resource_name, opts=None, force_destroy=None, name=None, path=None, permissions_boundary=None, tags=None, __name__=None, __opts__=None):
        """
        Provides an IAM user.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] force_destroy: When destroying this user, destroy even if it
               has non-Terraform-managed IAM access keys, login profile or MFA devices. Without `force_destroy`
               a user with non-Terraform-managed access keys and login profile will fail to be destroyed.
        :param pulumi.Input[str] name: The user's name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. User names are not distinguished by case. For example, you cannot create users named both "TESTUSER" and "testuser".
        :param pulumi.Input[str] path: Path in which to create the user.
        :param pulumi.Input[str] permissions_boundary: The ARN of the policy that is used to set the permissions boundary for the user.
        :param pulumi.Input[dict] tags: Key-value mapping of tags for the IAM user
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['force_destroy'] = force_destroy

        __props__['name'] = name

        __props__['path'] = path

        __props__['permissions_boundary'] = permissions_boundary

        __props__['tags'] = tags

        __props__['arn'] = None
        __props__['unique_id'] = None

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(User, __self__).__init__(
            'aws:iam/user:User',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

