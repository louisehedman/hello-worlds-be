import 'jest';
import Planet from '../src/database/models/Planet';

import * as dbHandler from './mockdb';

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
        expect.assertions(2)
        // create new planet model instance
        const planet = new Planet()
        // set some test properties
        planet.name = 'Tellus',
        planet.avgTemp = 20,
        // save test planet to in-memory db
        await planet.save()
        // find inserted planet by name
        const planetInDb = await Planet.findOne({name: 'Tellus'}).exec()
        console.log('Planet document from memory-db', planetInDb)
        // check that name is expected
        expect(planetInDb.name).toEqual('Tellus')
        // check that temp is expected
        expect(planetInDb.avgTemp).toEqual(20)
    });
});


