# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetVpcEndpointServiceResult:
    """
    A collection of values returned by getVpcEndpointService.
    """
    def __init__(__self__, acceptance_required=None, availability_zones=None, base_endpoint_dns_names=None, manages_vpc_endpoints=None, owner=None, private_dns_name=None, service=None, service_id=None, service_name=None, service_type=None, tags=None, vpc_endpoint_policy_supported=None, id=None):
        if acceptance_required and not isinstance(acceptance_required, bool):
            raise TypeError("Expected argument 'acceptance_required' to be a bool")
        __self__.acceptance_required = acceptance_required
        """
        Whether or not VPC endpoint connection requests to the service must be accepted by the service owner - `true` or `false`.
        """
        if availability_zones and not isinstance(availability_zones, list):
            raise TypeError("Expected argument 'availability_zones' to be a list")
        __self__.availability_zones = availability_zones
        """
        The Availability Zones in which the service is available.
        """
        if base_endpoint_dns_names and not isinstance(base_endpoint_dns_names, list):
            raise TypeError("Expected argument 'base_endpoint_dns_names' to be a list")
        __self__.base_endpoint_dns_names = base_endpoint_dns_names
        """
        The DNS names for the service.
        """
        if manages_vpc_endpoints and not isinstance(manages_vpc_endpoints, bool):
            raise TypeError("Expected argument 'manages_vpc_endpoints' to be a bool")
        __self__.manages_vpc_endpoints = manages_vpc_endpoints
        """
        Whether or not the service manages its VPC endpoints - `true` or `false`.
        """
        if owner and not isinstance(owner, str):
            raise TypeError("Expected argument 'owner' to be a str")
        __self__.owner = owner
        """
        The AWS account ID of the service owner or `amazon`.
        """
        if private_dns_name and not isinstance(private_dns_name, str):
            raise TypeError("Expected argument 'private_dns_name' to be a str")
        __self__.private_dns_name = private_dns_name
        """
        The private DNS name for the service.
        """
        if service and not isinstance(service, str):
            raise TypeError("Expected argument 'service' to be a str")
        __self__.service = service
        if service_id and not isinstance(service_id, str):
            raise TypeError("Expected argument 'service_id' to be a str")
        __self__.service_id = service_id
        """
        The ID of the endpoint service.
        """
        if service_name and not isinstance(service_name, str):
            raise TypeError("Expected argument 'service_name' to be a str")
        __self__.service_name = service_name
        if service_type and not isinstance(service_type, str):
            raise TypeError("Expected argument 'service_type' to be a str")
        __self__.service_type = service_type
        """
        The service type, `Gateway` or `Interface`.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        A mapping of tags assigned to the resource.
        """
        if vpc_endpoint_policy_supported and not isinstance(vpc_endpoint_policy_supported, bool):
            raise TypeError("Expected argument 'vpc_endpoint_policy_supported' to be a bool")
        __self__.vpc_endpoint_policy_supported = vpc_endpoint_policy_supported
        """
        Whether or not the service supports endpoint policies - `true` or `false`.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_vpc_endpoint_service(service=None,service_name=None,tags=None,opts=None):
    """
    The VPC Endpoint Service data source details about a specific service that
    can be specified when creating a VPC endpoint within the region configured in the provider.
    """
    __args__ = dict()

    __args__['service'] = service
    __args__['serviceName'] = service_name
    __args__['tags'] = tags
    __ret__ = await pulumi.runtime.invoke('aws:ec2/getVpcEndpointService:getVpcEndpointService', __args__, opts=opts)

    return GetVpcEndpointServiceResult(
        acceptance_required=__ret__.get('acceptanceRequired'),
        availability_zones=__ret__.get('availabilityZones'),
        base_endpoint_dns_names=__ret__.get('baseEndpointDnsNames'),
        manages_vpc_endpoints=__ret__.get('managesVpcEndpoints'),
        owner=__ret__.get('owner'),
        private_dns_name=__ret__.get('privateDnsName'),
        service=__ret__.get('service'),
        service_id=__ret__.get('serviceId'),
        service_name=__ret__.get('serviceName'),
        service_type=__ret__.get('serviceType'),
        tags=__ret__.get('tags'),
        vpc_endpoint_policy_supported=__ret__.get('vpcEndpointPolicySupported'),
        id=__ret__.get('id'))
