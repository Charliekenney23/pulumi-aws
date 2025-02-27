// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an IAM SAML provider.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * import * as fs from "fs";
 * 
 * const defaultSamlProvider = new aws.iam.SamlProvider("default", {
 *     samlMetadataDocument: fs.readFileSync("saml-metadata.xml", "utf-8"),
 * });
 * ```
 */
export class SamlProvider extends pulumi.CustomResource {
    /**
     * Get an existing SamlProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SamlProviderState, opts?: pulumi.CustomResourceOptions): SamlProvider {
        return new SamlProvider(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:iam/samlProvider:SamlProvider';

    /**
     * Returns true if the given object is an instance of SamlProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SamlProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SamlProvider.__pulumiType;
    }

    /**
     * The ARN assigned by AWS for this provider.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The name of the provider to create.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * An XML document generated by an identity provider that supports SAML 2.0.
     */
    public readonly samlMetadataDocument!: pulumi.Output<string>;
    /**
     * The expiration date and time for the SAML provider in RFC1123 format, e.g. `Mon, 02 Jan 2006 15:04:05 MST`.
     */
    public /*out*/ readonly validUntil!: pulumi.Output<string>;

    /**
     * Create a SamlProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SamlProviderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SamlProviderArgs | SamlProviderState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SamlProviderState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["samlMetadataDocument"] = state ? state.samlMetadataDocument : undefined;
            inputs["validUntil"] = state ? state.validUntil : undefined;
        } else {
            const args = argsOrState as SamlProviderArgs | undefined;
            if (!args || args.samlMetadataDocument === undefined) {
                throw new Error("Missing required property 'samlMetadataDocument'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["samlMetadataDocument"] = args ? args.samlMetadataDocument : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["validUntil"] = undefined /*out*/;
        }
        super(SamlProvider.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SamlProvider resources.
 */
export interface SamlProviderState {
    /**
     * The ARN assigned by AWS for this provider.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The name of the provider to create.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * An XML document generated by an identity provider that supports SAML 2.0.
     */
    readonly samlMetadataDocument?: pulumi.Input<string>;
    /**
     * The expiration date and time for the SAML provider in RFC1123 format, e.g. `Mon, 02 Jan 2006 15:04:05 MST`.
     */
    readonly validUntil?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SamlProvider resource.
 */
export interface SamlProviderArgs {
    /**
     * The name of the provider to create.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * An XML document generated by an identity provider that supports SAML 2.0.
     */
    readonly samlMetadataDocument: pulumi.Input<string>;
}
