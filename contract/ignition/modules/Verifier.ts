import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VerifierModule = buildModule("VerifierModule", (m) => {

  const verfier = m.contract("PlonkVerifier");

  return { verfier };
});

export default VerifierModule;
