// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an association with WAF Regional Web ACL.
 * 
 * > **Note:** An Application Load Balancer can only be associated with one WAF Regional WebACL.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const fooVpc = new aws.ec2.Vpc("foo", {
 *     cidrBlock: "10.1.0.0/16",
 * });
 * const ipset = new aws.wafregional.IpSet("ipset", {
 *     ipSetDescriptors: [{
 *         type: "IPV4",
 *         value: "192.0.7.0/24",
 *     }],
 * });
 * const available = pulumi.output(aws.getAvailabilityZones({}));
 * const bar = new aws.ec2.Subnet("bar", {
 *     availabilityZone: available.apply(available => available.names[1]),
 *     cidrBlock: "10.1.2.0/24",
 *     vpcId: fooVpc.id,
 * });
 * const fooSubnet = new aws.ec2.Subnet("foo", {
 *     availabilityZone: available.apply(available => available.names[0]),
 *     cidrBlock: "10.1.1.0/24",
 *     vpcId: fooVpc.id,
 * });
 * const fooLoadBalancer = new aws.applicationloadbalancing.LoadBalancer("foo", {
 *     internal: true,
 *     subnets: [
 *         fooSubnet.id,
 *         bar.id,
 *     ],
 * });
 * const fooRule = new aws.wafregional.Rule("foo", {
 *     metricName: "tfWAFRule",
 *     predicates: [{
 *         dataId: ipset.id,
 *         negated: false,
 *         type: "IPMatch",
 *     }],
 * });
 * const fooWebAcl = new aws.wafregional.WebAcl("foo", {
 *     defaultAction: {
 *         type: "ALLOW",
 *     },
 *     metricName: "foo",
 *     rules: [{
 *         action: {
 *             type: "BLOCK",
 *         },
 *         priority: 1,
 *         ruleId: fooRule.id,
 *     }],
 * });
 * const fooWebAclAssociation = new aws.wafregional.WebAclAssociation("foo", {
 *     resourceArn: fooLoadBalancer.arn,
 *     webAclId: fooWebAcl.id,
 * });
 * ```
 */
export class WebAclAssociation extends pulumi.CustomResource {
    /**
     * Get an existing WebAclAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebAclAssociationState, opts?: pulumi.CustomResourceOptions): WebAclAssociation {
        return new WebAclAssociation(name, <any>state, { ...opts, id: id });
    }

    /**
     * ARN of the resource to associate with. For example, an Application Load Balancer or API Gateway Stage.
     */
    public readonly resourceArn!: pulumi.Output<string>;
    /**
     * The ID of the WAF Regional WebACL to create an association.
     */
    public readonly webAclId!: pulumi.Output<string>;

    /**
     * Create a WebAclAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAclAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebAclAssociationArgs | WebAclAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as WebAclAssociationState | undefined;
            inputs["resourceArn"] = state ? state.resourceArn : undefined;
            inputs["webAclId"] = state ? state.webAclId : undefined;
        } else {
            const args = argsOrState as WebAclAssociationArgs | undefined;
            if (!args || args.resourceArn === undefined) {
                throw new Error("Missing required property 'resourceArn'");
            }
            if (!args || args.webAclId === undefined) {
                throw new Error("Missing required property 'webAclId'");
            }
            inputs["resourceArn"] = args ? args.resourceArn : undefined;
            inputs["webAclId"] = args ? args.webAclId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super("aws:wafregional/webAclAssociation:WebAclAssociation", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering WebAclAssociation resources.
 */
export interface WebAclAssociationState {
    /**
     * ARN of the resource to associate with. For example, an Application Load Balancer or API Gateway Stage.
     */
    readonly resourceArn?: pulumi.Input<string>;
    /**
     * The ID of the WAF Regional WebACL to create an association.
     */
    readonly webAclId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WebAclAssociation resource.
 */
export interface WebAclAssociationArgs {
    /**
     * ARN of the resource to associate with. For example, an Application Load Balancer or API Gateway Stage.
     */
    readonly resourceArn: pulumi.Input<string>;
    /**
     * The ID of the WAF Regional WebACL to create an association.
     */
    readonly webAclId: pulumi.Input<string>;
}
