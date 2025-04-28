export const formatResponse = (data: any, message: string = 'Success') => {
    return {
        status: 'success',
        message,
        data,
    };
};

export const formatErrorResponse = (error: any, message: string = 'Error occurred') => {
    return {
        status: 'error',
        message,
        error: error instanceof Error ? error.message : error,
    };
};

export const validateProductInput = (input: any) => {
    const { name, price } = input;
    if (!name || typeof name !== 'string') {
        return { valid: false, message: 'Invalid product name' };
    }
    if (!price || typeof price !== 'number') {
        return { valid: false, message: 'Invalid product price' };
    }
    return { valid: true };
};