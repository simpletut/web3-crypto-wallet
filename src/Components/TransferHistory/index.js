import React, { useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import { Web3Context } from './../../Context/web3/provider';
import { ethers } from 'ethers';
import commonErrorMessages from './../../Utils/commonErrorMessages.json';

const TransferHistory = () => {
  const { contracts, account, isFetching, isLoadingWeb3,
    ethereum, validChain, getAllTransfers, transfers, setIsFetching } = useContext(Web3Context);

  useEffect(() => {
    if ((typeof contracts === 'object' && Object.keys(contracts).length > 0) && validChain) {
      if (account) getAllTransfers();
      else setIsFetching(false);
    }

  }, [contracts, validChain, account, getAllTransfers, setIsFetching])

  const shouldRender = {
    component: Array.isArray(transfers) && transfers.length > 0,
  };

  const invalidChainMsg = process.env.NODE_ENV === 'development'
    ? commonErrorMessages.switchToDevelopmentChain : commonErrorMessages.switchToProductionChain;

  return shouldRender.component ? (
    <div className={styles.transferHistory} data-testid="transferHistory">

      <h1>
        Latest Transfers
      </h1>

      {transfers.map((transfer, pos) => {
        const fromAddress = transfer?.fromAddress;
        const toAddress = transfer?.toAddress;
        const amount = transfer?.amount;
        const _amount = ethers.utils.formatEther(amount)
        const message = transfer?.message;
        const timestamp = transfer?.timestamp;
        const _timestamp = timestamp && timestamp.toNumber && timestamp.toNumber();
        const createdAt = _timestamp && new Date(_timestamp * 1000).toLocaleString();

        return (
          <div key={pos} className={styles.transfer}>
            <div className={styles.details}>

              <div className={styles.detail}>
                <strong>
                  From:
                </strong>
                {fromAddress}
              </div>

              <div className={styles.detail}>
                <strong>
                  To:
                </strong>
                {toAddress}
              </div>

              <div className={styles.detail}>
                <i className="fa-brands fa-ethereum"></i>
                {_amount}
              </div>

              {message && (
                <div className={`${styles.detail} ${styles.msg}`}>
                  <strong>
                    Message:
                  </strong>
                  {message}
                </div>
              )}

              <div className={`${styles.detail} ${styles.timestamp}`}>
                {createdAt}
              </div>

            </div>
          </div>
        )
      })}
    </div>
  ) : (isLoadingWeb3 || isFetching) ? null : ethereum ? validChain ? account ? (
    <div className={styles.wrongNetwork} data-testid="transferHistory">
      <i className="fa-solid fa-money-bill-transfer"></i>
      <p>
        No transfers yet!
      </p>
    </div>
  ) : (
    <div className={styles.wrongNetwork} data-testid="transferHistory">
      <i class="fa-solid fa-wallet"></i>
      <p>
        Please connect your wallet
      </p>
    </div>
  ) : (
    <div className={styles.wrongNetwork} data-testid="transferHistory">
      <i className="fa-solid fa-hand"></i>
      <p>
        {invalidChainMsg}
      </p>
    </div>
  ) : (
    <div className={styles.wrongNetwork} data-testid="transferHistory">
      <i className="fa-solid fa-triangle-exclamation"></i>
      <p>
        Please install MetaMask
      </p>
    </div>
  )
};

export default TransferHistory;
