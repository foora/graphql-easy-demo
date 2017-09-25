const { graphql } = require('graphql');
const schema = require('../schema');

describe('graphql schema query test', () => {
    test('query data', () => {
        let queryStr = `query rootQueryType {
            count 
            item(id: 4) {
                id
                name
                price
            }
        }`;
        return graphql(schema.RootType, queryStr).then((result) => {
            let result_expect = {
                data: {
                    count: 1,
                    item: {
                        id: 4,
                        name: 'item4',
                        price: '20.00'
                    }
                }
            };
            expect(result).toEqual(result_expect);
        });
    });
});