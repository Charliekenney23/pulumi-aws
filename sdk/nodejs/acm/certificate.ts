// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * The ACM certificate resource allows requesting and management of certificates
 * from the Amazon Certificate Manager.
 * 
 * It deals with requesting certificates and managing their attributes and life-cycle.
 * This resource does not deal with validation of a certificate but can provide inputs
 * for other resources implementing the validation. It does not wait for a certificate to be issued.
 * Use a `aws_acm_certificate_validation` resource for this.
 * 
 * Most commonly, this resource is used to together with `aws_route53_record` and
 * `aws_acm_certificate_validation` to request a DNS validated certificate,
 * deploy the required validation records and wait for validation to complete.
 * 
 * Domain validation through E-Mail is also supported but should be avoided as it requires a manual step outside
 * of Terraform.
 * 
 * It's recommended to specify `create_before_destroy = true` in a [lifecycle][1] block to replace a certificate
 * which is currently in use (eg, by `aws_lb_listener`).
 */
export class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateState, opts?: pulumi.CustomResourceOptions): Certificate {
        return new Certificate(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN of the certificate
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * A domain name for which the certificate should be issued
     */
    public readonly domainName: pulumi.Output<string>;
    /**
     * A list of attributes to feed into other resources to complete certificate validation. Can have more than one element, e.g. if SANs are defined. Only set if `DNS`-validation was used.
     */
    public /*out*/ readonly domainValidationOptions: pulumi.Output<{ domainName: string, resourceRecordName: string, resourceRecordType: string, resourceRecordValue: string }[]>;
    /**
     * A list of domains that should be SANs in the issued certificate
     */
    public readonly subjectAlternativeNames: pulumi.Output<string[] | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * A list of addresses that received a validation E-Mail. Only set if `EMAIL`-validation was used.
     */
    public /*out*/ readonly validationEmails: pulumi.Output<string[]>;
    /**
     * Which method to use for validation. `DNS` or `EMAIL` are valid, `NONE` can be used for certificates that were imported into ACM and then into Terraform.
     */
    public readonly validationMethod: pulumi.Output<string>;

    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificateArgs | CertificateState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: CertificateState = argsOrState as CertificateState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["domainName"] = state ? state.domainName : undefined;
            inputs["domainValidationOptions"] = state ? state.domainValidationOptions : undefined;
            inputs["subjectAlternativeNames"] = state ? state.subjectAlternativeNames : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["validationEmails"] = state ? state.validationEmails : undefined;
            inputs["validationMethod"] = state ? state.validationMethod : undefined;
        } else {
            const args = argsOrState as CertificateArgs | undefined;
            if (!args || args.domainName === undefined) {
                throw new Error("Missing required property 'domainName'");
            }
            if (!args || args.validationMethod === undefined) {
                throw new Error("Missing required property 'validationMethod'");
            }
            inputs["domainName"] = args ? args.domainName : undefined;
            inputs["subjectAlternativeNames"] = args ? args.subjectAlternativeNames : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["validationMethod"] = args ? args.validationMethod : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["domainValidationOptions"] = undefined /*out*/;
            inputs["validationEmails"] = undefined /*out*/;
        }
        super("aws:acm/certificate:Certificate", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Certificate resources.
 */
export interface CertificateState {
    /**
     * The ARN of the certificate
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * A domain name for which the certificate should be issued
     */
    readonly domainName?: pulumi.Input<string>;
    /**
     * A list of attributes to feed into other resources to complete certificate validation. Can have more than one element, e.g. if SANs are defined. Only set if `DNS`-validation was used.
     */
    readonly domainValidationOptions?: pulumi.Input<pulumi.Input<{ domainName?: pulumi.Input<string>, resourceRecordName?: pulumi.Input<string>, resourceRecordType?: pulumi.Input<string>, resourceRecordValue?: pulumi.Input<string> }>[]>;
    /**
     * A list of domains that should be SANs in the issued certificate
     */
    readonly subjectAlternativeNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A list of addresses that received a validation E-Mail. Only set if `EMAIL`-validation was used.
     */
    readonly validationEmails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Which method to use for validation. `DNS` or `EMAIL` are valid, `NONE` can be used for certificates that were imported into ACM and then into Terraform.
     */
    readonly validationMethod?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * A domain name for which the certificate should be issued
     */
    readonly domainName: pulumi.Input<string>;
    /**
     * A list of domains that should be SANs in the issued certificate
     */
    readonly subjectAlternativeNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Which method to use for validation. `DNS` or `EMAIL` are valid, `NONE` can be used for certificates that were imported into ACM and then into Terraform.
     */
    readonly validationMethod: pulumi.Input<string>;
}
