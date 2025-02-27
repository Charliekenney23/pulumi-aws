# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class EndpointGroup(pulumi.CustomResource):
    endpoint_configurations: pulumi.Output[list]
    """
    The list of endpoint objects. Fields documented below.
    """
    endpoint_group_region: pulumi.Output[str]
    health_check_interval_seconds: pulumi.Output[float]
    """
    The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.
    """
    health_check_path: pulumi.Output[str]
    """
    If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (/).
    """
    health_check_port: pulumi.Output[float]
    """
    The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the first port in the list.
    """
    health_check_protocol: pulumi.Output[str]
    """
    The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.
    """
    listener_arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) of the listener.
    """
    threshold_count: pulumi.Output[float]
    """
    The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
    """
    traffic_dial_percentage: pulumi.Output[float]
    """
    The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener. The default value is 100.
    """
    def __init__(__self__, resource_name, opts=None, endpoint_configurations=None, endpoint_group_region=None, health_check_interval_seconds=None, health_check_path=None, health_check_port=None, health_check_protocol=None, listener_arn=None, threshold_count=None, traffic_dial_percentage=None, __name__=None, __opts__=None):
        """
        Provides a Global Accelerator endpoint group.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] endpoint_configurations: The list of endpoint objects. Fields documented below.
        :param pulumi.Input[float] health_check_interval_seconds: The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.
        :param pulumi.Input[str] health_check_path: If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (/).
        :param pulumi.Input[float] health_check_port: The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the first port in the list.
        :param pulumi.Input[str] health_check_protocol: The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.
        :param pulumi.Input[str] listener_arn: The Amazon Resource Name (ARN) of the listener.
        :param pulumi.Input[float] threshold_count: The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
        :param pulumi.Input[float] traffic_dial_percentage: The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener. The default value is 100.
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

        __props__['endpoint_configurations'] = endpoint_configurations

        __props__['endpoint_group_region'] = endpoint_group_region

        __props__['health_check_interval_seconds'] = health_check_interval_seconds

        __props__['health_check_path'] = health_check_path

        __props__['health_check_port'] = health_check_port

        __props__['health_check_protocol'] = health_check_protocol

        if listener_arn is None:
            raise TypeError("Missing required property 'listener_arn'")
        __props__['listener_arn'] = listener_arn

        __props__['threshold_count'] = threshold_count

        __props__['traffic_dial_percentage'] = traffic_dial_percentage

        super(EndpointGroup, __self__).__init__(
            'aws:globalaccelerator/endpointGroup:EndpointGroup',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

