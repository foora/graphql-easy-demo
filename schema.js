const graphql = require('graphql');
const ObjectType = graphql.GraphQLObjectType;
const Schema = graphql.GraphQLSchema;
const integer = graphql.GraphQLInt;
const str = graphql.GraphQLString;

// test data
let items = [
    {
        id: 1,
        price: '1000',
        name: 'item1'
    },
    {
        id: 2,
        price: '100',
        name: 'item2'
    },
    {
        id: 3,
        price: '1500',
        name: 'item3'
    },
    {
        id: 4,
        price: '2000',
        name: 'item4'
    }
];
let count = 1;

// type
let itemType = new ObjectType({
    name: 'item',
    description: 'items',
    fields: {
        id: {
            type: integer,
            description: 'item id'
        },
        price: {
            type: str,
            description: 'item price',
            resolve: (root, param, context) => (root.price / 100).toFixed(2)
        },
        name: {
            type: str,
            description: 'item name'
        }
    }
});

// shema
exports.RootType = new Schema({
    query: new ObjectType({
        name: 'rootQueryType',
        fields: {
            count: {
                type: integer,
                resolve: () => count
            },
            item: {
                type: itemType,
                description: 'itemType',
                args: {
                    id: {
                        type: integer,
                        required: true
                    }
                },
                resolve: (root, obj, ctx) => new Promise((resolve, reject) => {
                    // test async, return promise
                    setTimeout(() => {
                        let arr = items.filter((item) => item.id === obj.id);
                        return resolve(arr[0]);
                    }, 1000);
                })
            }
        }
    }),
    mutation: new ObjectType({
        name: 'rootMutationType',
        fields: {
            updateCount: {
                type: integer,
                description: 'update the count',
                resolve: () => ++count
            }
        }
    })
});