import { InputOptions } from '@actions/core';
type GetInput = (name: string, options?: InputOptions | undefined) => string;
declare enum Actions {
    GetPolicyNameByProfileName = "getPolicyNameByProfileName",
    PreparePipelineResults = "preparePipelineResults",
    PreparePolicyResults = "preparePolicyResults"
}
export type Inputs = {
    action: Actions;
    vid: string;
    vkey: string;
    appname: string;
    token: string;
    check_run_id: number;
    source_repository: string;
    fail_checkson_on_policy: boolean;
    fail_checks_on_error: boolean;
};
export declare const parseInputs: (getInput: GetInput) => Inputs;
export declare const vaildateScanResultsActionInput: (inputs: Inputs) => boolean;
export {};
