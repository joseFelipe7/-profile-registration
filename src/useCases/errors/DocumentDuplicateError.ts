export class DocumentDuplicateError extends Error {
    constructor() {
        super('Duplicate document')
    }
}