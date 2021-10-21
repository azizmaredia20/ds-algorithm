import { binarySearchIterative, binarySearchRecursive } from "./index";

describe('BinarySearch', () => {
    const sourceArr = [3, 4, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 52, 55, 62];
    describe('iterative approach', () => {
        it('return index for the item present in the array', () => {
            const res = binarySearchIterative(sourceArr, 3);
            expect(res).toBe(0);

            const res1 = binarySearchIterative(sourceArr, 62);
            expect(res1).toBe(14);

            const res2 = binarySearchIterative(sourceArr, 29);
            expect(res2).toBe(7);

            const res3 = binarySearchIterative(sourceArr, 14);
            expect(res3).toBe(4);

            const res4 = binarySearchIterative(sourceArr, 47);
            expect(res4).toBe(11);
        });

        it('return -1 when item is not found in the source array', () => {
            const res = binarySearchIterative(sourceArr, 1);
            expect(res).toBe(-1);

            const res1 = binarySearchIterative(sourceArr, 28);
            expect(res1).toBe(-1);

            const res2 = binarySearchIterative(sourceArr, 100);
            expect(res2).toBe(-1);
        })
    });


    describe('recurrsive approach', () => {
        it('return index for the item present in the array', () => {
            const res = binarySearchRecursive(sourceArr, 3);
            expect(res).toBe(0);

            const res1 = binarySearchRecursive(sourceArr, 62);
            expect(res1).toBe(14);

            const res2 = binarySearchRecursive(sourceArr, 29);
            expect(res2).toBe(7);

            const res3 = binarySearchRecursive(sourceArr, 14);
            expect(res3).toBe(4);

            const res4 = binarySearchRecursive(sourceArr, 47);
            expect(res4).toBe(11);
        });

        it('return -1 when item is not found in the source array', () => {
            const res = binarySearchIterative(sourceArr, 1);
            expect(res).toBe(-1);

            const res1 = binarySearchIterative(sourceArr, 28);
            expect(res1).toBe(-1);

            const res2 = binarySearchIterative(sourceArr, 100);
            expect(res2).toBe(-1);
        })
    });
});
