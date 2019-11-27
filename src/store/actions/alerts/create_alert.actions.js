export const HIDE_CREATE = 'HIDE_CREATE';
export const SHOW_CREATE = 'SHOW_CREATE';

export function hideCreate()
{
    return {
        type: HIDE_CREATE
    }
}

export function showCreate(options)
{
    return {
        type: SHOW_CREATE,
        payload: options
    }
}
