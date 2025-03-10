import assert from "assert";
import { 
  TestHelpers,
  GnosisSafeProxy_AddedOwner
} from "generated";
const { MockDb, GnosisSafeProxy } = TestHelpers;

describe("GnosisSafeProxy contract AddedOwner event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for GnosisSafeProxy contract AddedOwner event
  const event = GnosisSafeProxy.AddedOwner.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("GnosisSafeProxy_AddedOwner is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await GnosisSafeProxy.AddedOwner.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualGnosisSafeProxyAddedOwner = mockDbUpdated.entities.GnosisSafeProxy_AddedOwner.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedGnosisSafeProxyAddedOwner: GnosisSafeProxy_AddedOwner = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualGnosisSafeProxyAddedOwner, expectedGnosisSafeProxyAddedOwner, "Actual GnosisSafeProxyAddedOwner should be the same as the expectedGnosisSafeProxyAddedOwner");
  });
});
