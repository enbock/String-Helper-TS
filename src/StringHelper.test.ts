import StringHelper from './StringHelper';

describe(StringHelper, function () {
    it('should replace umlauts', function () {
        const input: string = 'ÄÖÜẞäöüßâûô';
        const expected: string = 'AEOEUESaeoeuessauo';

        expect(StringHelper.replaceUmlaut(input)).toBe(expected);
    });

    it('should sort objects by string property', function () {
        const objectA: Object = {name: 'Ödipus', foo: 'bar'};
        const objectB: Object = {name: 'Antman', foo: 'foo'};
        const objectC: Object = {name: 'Zeus'};
        const objectD: Object = {name: 'ßÄÖÜäöüß', foo: 'Umlauts'};
        const objectE: Object = {name: 'Delta', foo: 'sort variants'};
        const objectF: Object = {name: 'Berta', foo: 'sort variants'};

        const list: Object[] = [objectA, objectB, objectC, objectD, objectE, objectF, objectF];
        const result: Object[] = StringHelper.sortList(list, 'name');

        const expectedList: Object[] = [objectB, objectF, objectF, objectE, objectA, objectD, objectC];
        expect(result).toEqual(expectedList);
    });

    it('should ignore sorting on unknown properties', function () {
        const objectA: Object = {unknown: 'Ödipus', foo: 'bar'};
        const objectB: Object = {other: 'Antman', foo: 'foo'};
        const objectC: Object = {name: 'Zeus'};

        const list: Object[] = [objectA, objectB, objectC];
        const result: Object[] = StringHelper.sortList(list, 'name');

        const expectedList: Object[] = [objectA, objectB, objectC];
        expect(result).toEqual(expectedList);
    });
});
