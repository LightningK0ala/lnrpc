/**
 * Lightning RPC Stub
 * @constructor
 */
const LightningStub = function LightningStub() {};

/**
 * Wallet Unlocker RPC Stub
 * @constructor
 */
const WalletUnlockerStub = function WalletUnlockerStub() {};

/**
 * Create a grpc stub
 * @param  {Object?}              options
 * @param  {LightningStub?}       lightning
 * @param  {WalletUnlockerStub?}  walletUnlocker
 * @return {Object}
 */
module.exports = function grpcStub(
  options = {},
  lightning = LightningStub,
  walletUnlocker = WalletUnlockerStub
) {
  // provide mock cert if none specified
  const config = Object.assign({}, options);
  if (!config.tls || !config.cert) config.cert = 'cert';

  return Object.assign(
    {
      credentials: {createSsl: () => ({})},
      load: () => ({
        lnrpc: {
          Lightning: lightning,
          WalletUnlocker: walletUnlocker,
        },
      }),
    },
    config
  );
};

module.exports.LightningStub = LightningStub;
module.exports.WalletUnlockerStub = WalletUnlockerStub;