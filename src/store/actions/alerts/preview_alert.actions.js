export const HIDE_PREVIEW = 'HIDE_PREVIEW';
export const SHOW_PREVIEW = 'SHOW_PREVIEW';

export function hidePreview()
{
    return {
        type: HIDE_PREVIEW
    }
}

export function showPreview(options)
{
    return {
        type: SHOW_PREVIEW,
        payload: options
    }
}
