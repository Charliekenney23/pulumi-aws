// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an AWS Elemental MediaPackage Channel.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const kittens = new aws.mediapackage.Channel("kittens", {
 *     channelId: "kitten-channel",
 *     description: "A channel dedicated to amusing videos of kittens.",
 * });
 * ```
 */
export class Channel extends pulumi.CustomResource {
    /**
     * Get an existing Channel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ChannelState, opts?: pulumi.CustomResourceOptions): Channel {
        return new Channel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:mediapackage/channel:Channel';

    /**
     * Returns true if the given object is an instance of Channel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Channel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Channel.__pulumiType;
    }

    /**
     * The ARN of the channel
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * A unique identifier describing the channel
     */
    public readonly channelId!: pulumi.Output<string>;
    /**
     * A description of the channel
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A single item list of HLS ingest information
     */
    public /*out*/ readonly hlsIngests!: pulumi.Output<{ ingestEndpoints: { password: string, url: string, username: string }[] }[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a Channel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ChannelArgs | ChannelState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ChannelState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["channelId"] = state ? state.channelId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["hlsIngests"] = state ? state.hlsIngests : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ChannelArgs | undefined;
            if (!args || args.channelId === undefined) {
                throw new Error("Missing required property 'channelId'");
            }
            inputs["channelId"] = args ? args.channelId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["hlsIngests"] = undefined /*out*/;
        }
        super(Channel.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Channel resources.
 */
export interface ChannelState {
    /**
     * The ARN of the channel
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * A unique identifier describing the channel
     */
    readonly channelId?: pulumi.Input<string>;
    /**
     * A description of the channel
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A single item list of HLS ingest information
     */
    readonly hlsIngests?: pulumi.Input<pulumi.Input<{ ingestEndpoints?: pulumi.Input<pulumi.Input<{ password?: pulumi.Input<string>, url?: pulumi.Input<string>, username?: pulumi.Input<string> }>[]> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Channel resource.
 */
export interface ChannelArgs {
    /**
     * A unique identifier describing the channel
     */
    readonly channelId: pulumi.Input<string>;
    /**
     * A description of the channel
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
