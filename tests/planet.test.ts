import 'jest';
import Planet from '../src/database/models/Planet';

import * as dbHandler from './db';

beforeAll(async () => {
    await dbHandler.connect()
});

afterEach(async () => {
    await dbHandler.clearDatabase()
});

afterAll(async () => {
    await dbHandler.closeDatabase()
});

describe('planet test', () => {
    it('can be created correctly', async () => {
        // expect that one assertion will be made
        expect.assertions(1)
        // create new planet model instance
        const planet = new Planet()
        // set some test properties
        planet.name = 'Test name'
        // save test planet to in-memory db
        await planet.save()
        // find inserted planet by name
        const postInDb = await Planet.findOne({name: 'Test name'}).exec()
        console.log('Planet document from memory-db', postInDb)
        // check that name is expected
        expect(postInDb.name).toEqual('Test name')
    });
});


