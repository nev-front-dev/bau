import React from 'react'
import classes from './VaultsInfoHeader.module.scss'
import { Link } from 'react-router-dom'
import logoCoin from '../../images/coinLogoHeader.png'
import menuArrow from '../../images/menu-arrow.svg'
import greenArrow from '../../images/greenArrow.svg'

const VaultsInfoHeader = () => {
  return (
    <div className={classes.VaultsInfoHeader}>
      <Link to='/vaults' className={classes.arrowBack}>
        <img src={greenArrow}/>
        <div className={classes.arrowTitle}>Back</div>
      </Link>
      <div className={classes.VaultData}>
        <img src={logoCoin} className={classes.logoCoin} alt="" />
        <div className={classes.coinName}>DYDX-ETH</div>
        <a href='#' className={classes.coinLink}>
            <div className={classes.coinLinkValue}>Curve COILFRAX-f</div>
            <img src={menuArrow} alt="" />
        </a>
      </div>
      <div className={classes.vaultDescr}>
          <div className={classes.vaultTVL}>
            <div className={classes.vaultTVLTitle}>Vault TVL</div>
            <div className={classes.vaultTValue}>$ 20, 000</div>
          </div>
          <div className={classes.vaultHarvest}>
            <div className={classes.vaultHarvestTitle}>Last harvest:</div>
            <div className={classes.vaultHarvestValue}>2 hours ago</div>
          </div>
        </div>
    </div>
  )
}

export default VaultsInfoHeader
