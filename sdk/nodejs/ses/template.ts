// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource to create a SES template.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const myTemplate = new aws.ses.Template("MyTemplate", {
 *     html: "<h1>Hello {{name}},</h1><p>Your favorite animal is {{favoriteanimal}}.</p>",
 *     subject: "Greetings, {{name}}!",
 *     text: `Hello {{name}},
 * Your favorite animal is {{favoriteanimal}}.`,
 * });
 * ```
 */
export class Template extends pulumi.CustomResource {
    /**
     * Get an existing Template resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TemplateState, opts?: pulumi.CustomResourceOptions): Template {
        return new Template(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:ses/template:Template';

    /**
     * Returns true if the given object is an instance of Template.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Template {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Template.__pulumiType;
    }

    /**
     * The HTML body of the email. Must be less than 500KB in size, including both the text and HTML parts.
     */
    public readonly html!: pulumi.Output<string | undefined>;
    /**
     * The name of the template. Cannot exceed 64 characters. You will refer to this name when you send email.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The subject line of the email.
     */
    public readonly subject!: pulumi.Output<string | undefined>;
    /**
     * The email body that will be visible to recipients whose email clients do not display HTML. Must be less than 500KB in size, including both the text and HTML parts.
     */
    public readonly text!: pulumi.Output<string | undefined>;

    /**
     * Create a Template resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TemplateArgs | TemplateState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TemplateState | undefined;
            inputs["html"] = state ? state.html : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["subject"] = state ? state.subject : undefined;
            inputs["text"] = state ? state.text : undefined;
        } else {
            const args = argsOrState as TemplateArgs | undefined;
            inputs["html"] = args ? args.html : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["subject"] = args ? args.subject : undefined;
            inputs["text"] = args ? args.text : undefined;
        }
        super(Template.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Template resources.
 */
export interface TemplateState {
    /**
     * The HTML body of the email. Must be less than 500KB in size, including both the text and HTML parts.
     */
    readonly html?: pulumi.Input<string>;
    /**
     * The name of the template. Cannot exceed 64 characters. You will refer to this name when you send email.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The subject line of the email.
     */
    readonly subject?: pulumi.Input<string>;
    /**
     * The email body that will be visible to recipients whose email clients do not display HTML. Must be less than 500KB in size, including both the text and HTML parts.
     */
    readonly text?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Template resource.
 */
export interface TemplateArgs {
    /**
     * The HTML body of the email. Must be less than 500KB in size, including both the text and HTML parts.
     */
    readonly html?: pulumi.Input<string>;
    /**
     * The name of the template. Cannot exceed 64 characters. You will refer to this name when you send email.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The subject line of the email.
     */
    readonly subject?: pulumi.Input<string>;
    /**
     * The email body that will be visible to recipients whose email clients do not display HTML. Must be less than 500KB in size, including both the text and HTML parts.
     */
    readonly text?: pulumi.Input<string>;
}
