// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

/**
 * Tracks the given event
 * @param event The event name
 * @param data The data for the event
 */
export function trackEvent(event: string, data?: any) {
    const ai = (window as any).appInsights;
    if (ai) {
        ai.trackEvent(event, data || {});
    }
}
