export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`---Método ${propertyKey}`);
            console.log(`------Parâmetros: ${JSON.stringify(args)}`);
            const retrorno = metodoOriginal.apply(this, args);
            console.log(`------Retorno: ${JSON.stringify(retrorno)}`);
            return retrorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map