/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  GnosisSafeProxy,
  GnosisSafeProxy_AddedOwner,
  GnosisSafeProxy_ApproveHash,
  GnosisSafeProxy_ChangedFallbackHandler,
  GnosisSafeProxy_ChangedGuard,
  GnosisSafeProxy_ChangedThreshold,
  GnosisSafeProxy_ExecutionFailure,
  GnosisSafeProxy_ExecutionSuccess,
  GnosisSafeProxy_RemovedOwner,
  GnosisSafeProxy_SafeMultiSigTransaction,
  GnosisSafeProxy_SafeReceived,
  GnosisSafeProxy_SafeSetup,
  GnosisSafeProxy_SignMsg,
} from "generated";

GnosisSafeProxy.AddedOwner.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_AddedOwner = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
  };

  context.GnosisSafeProxy_AddedOwner.set(entity);
});

GnosisSafeProxy.ApproveHash.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_ApproveHash = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    approvedHash: event.params.approvedHash,
    owner: event.params.owner,
  };

  context.GnosisSafeProxy_ApproveHash.set(entity);
});

GnosisSafeProxy.ChangedFallbackHandler.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_ChangedFallbackHandler = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    handler: event.params.handler,
  };

  context.GnosisSafeProxy_ChangedFallbackHandler.set(entity);
});

GnosisSafeProxy.ChangedGuard.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_ChangedGuard = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    guard: event.params.guard,
  };

  context.GnosisSafeProxy_ChangedGuard.set(entity);
});

GnosisSafeProxy.ChangedThreshold.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_ChangedThreshold = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    threshold: event.params.threshold,
  };

  context.GnosisSafeProxy_ChangedThreshold.set(entity);
});

GnosisSafeProxy.ExecutionFailure.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_ExecutionFailure = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    txHash: event.params.txHash,
    payment: event.params.payment,
  };

  context.GnosisSafeProxy_ExecutionFailure.set(entity);
});

GnosisSafeProxy.ExecutionSuccess.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_ExecutionSuccess = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    txHash: event.params.txHash,
    payment: event.params.payment,
  };

  context.GnosisSafeProxy_ExecutionSuccess.set(entity);
});

GnosisSafeProxy.RemovedOwner.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_RemovedOwner = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
  };

  context.GnosisSafeProxy_RemovedOwner.set(entity);
});

GnosisSafeProxy.SafeMultiSigTransaction.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_SafeMultiSigTransaction = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    to: event.params.to,
    value: event.params.value,
    data: event.params.data,
    operation: event.params.operation,
    safeTxGas: event.params.safeTxGas,
    baseGas: event.params.baseGas,
    gasPrice: event.params.gasPrice,
    gasToken: event.params.gasToken,
    refundReceiver: event.params.refundReceiver,
    signatures: event.params.signatures,
    additionalInfo: event.params.additionalInfo,
  };

  context.GnosisSafeProxy_SafeMultiSigTransaction.set(entity);
});

GnosisSafeProxy.SafeReceived.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_SafeReceived = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    value: event.params.value,
  };

  context.GnosisSafeProxy_SafeReceived.set(entity);
});

GnosisSafeProxy.SafeSetup.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_SafeSetup = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    initiator: event.params.initiator,
    owners: event.params.owners,
    threshold: event.params.threshold,
    initializer: event.params.initializer,
    fallbackHandler: event.params.fallbackHandler,
  };

  context.GnosisSafeProxy_SafeSetup.set(entity);
});

GnosisSafeProxy.SignMsg.handler(async ({ event, context }) => {
  const entity: GnosisSafeProxy_SignMsg = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    msgHash: event.params.msgHash,
  };

  context.GnosisSafeProxy_SignMsg.set(entity);
});
