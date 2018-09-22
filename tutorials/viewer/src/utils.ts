// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

export function classNames(...args: (string | [string, boolean])[]) {
    return args.filter(x => x != null && (typeof (x) == "string" || x[1] == true))
        .map(x => typeof (x) == "string" ? x : x[0]).join(" ");
}