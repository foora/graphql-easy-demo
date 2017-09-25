const { graphql } = require('graphql');
const schema = require('../schema');

describe('graphql schema mutation test', () => {
    test('mutation data', () => {
        let mutationStr = `mutation rootMutationType {
            updateCount
        }`;
        return graphql(schema.RootType, mutationStr).then((result) => {
            let result_expect = {
                data: {
                    updateCount: 2
                }
            };
            expect(result).toEqual(result_expect);
        });
    });
});