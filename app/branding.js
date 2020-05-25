import {Apis} from "bitsharesjs-ws";
/** This file centralized customization and branding efforts throughout the whole wallet and is meant to facilitate
 *  the process.
 *
 *  @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

/**
 * Determine if we are running on testnet or mainnet
 * @private
 */
function _isTestnet() {
    const testnet =
        "39f5e2ede1f8bc1a3a54a7914414e3779e33193f1f5693510e73cb7a87617447"; // just for the record
    const mainnet =
        "4018d7844c78f6a6c41c6a552b898022310fc5dec06da467ee7905a8dad512c8";

    // treat every other chain as testnet
    return Apis.instance().chain_id !== mainnet;
}

/**
 * Wallet name that is used throughout the UI and also in translations
 * @returns {string}
 */
export function getWalletName() {
    return "Tatch Cloud Wallet";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
    return "https://wallet.tatchcapital.com";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
    return {
        url: "https://faucet.bitshares.eu/3a2df26c1bc74473", // 2017-12-infrastructure worker proposal
        show: true,
        editable: false,
        referrer: "onboarding.bitshares.foundation"
    };
}

export function getTestFaucet() {
    // fixme should be solved by introducing _isTestnet into getFaucet and fixing the mess in the Settings when fetching faucet address
    return {
        url: "https://faucet.testnet.bitshares.eu", // operated as a contribution by BitShares EU
        show: true,
        editable: false
    };
}

/**
 * Logo that is used throughout the UI
 * @returns {*}
 */
export function getLogo() {
    return require("assets/logo-ico-blue.png");
}

/**
 * Default set theme for the UI
 * @returns {string}
 */
export function getDefaultTheme() {
    // possible ["darkTheme", "lightTheme", "midnightTheme"]
    return "midnightTheme";
}

/**
 * Default login method. Either "password" (for cloud login mode) or "wallet" (for local wallet mode)
 * @returns {string}
 */
export function getDefaultLogin() {
    // possible: one of "password", "wallet"
    return "password";
}

/**
 * Default units used by the UI
 *
 * @returns {[string,string,string,string,string,string]}
 */

export function getUnits(chainId = "4018d784") {
    if (chainId === "4018d784")
        return ["TATCH.EUR", "TATCH.USD", "TATCH.BTC", "TATCH.NLG"];
    else if (chainId === "39f5e2ed") return ["TEST"];
    // unknown chain id: (need to return at least one unit)
    else return ["BTS"];
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */
export function getMyMarketsBases() {
<<<<<<< HEAD
    return [
        "TATCH.USD",
        "TATCH.EUR",
        "TATCH.NLG",
        "TATCH.BTC",
        "TCLGULDEN",
        "TATCHCOIN",
        "BTS", 
        "BEOS"
    ];
=======
    if (_isTestnet()) {
        return ["TEST"];
    }
    return ["BTS", "BTC", "ETH", "USD", "CNY"];
>>>>>>> a200d3494b5f66bd360a054c6aa7330756bbc84f
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    let tokens = {
<<<<<<< HEAD
        nativeTokens: ["BTS"],
        tatchTokens: ["TATCHCOIN", "TCLGULDEN", "TCLSILVER"],
        tatchgateways: ["TATCH.EUR", "TATCH.USD", "TATCH.BTC", "TATCH.NLG"]
=======
        nativeTokens: [
            "BTC",
            "BTS",
            "CNY",
            "EUR",
            "GOLD",
            "KRW",
            "RUBLE",
            "SILVER",
            "USD"
        ],
        bridgeTokens: ["BRIDGE.BCO", "BRIDGE.BTC", "BRIDGE.MONA", "BRIDGE.ZNY"],
        gdexTokens: [
            "GDEX.BTC",
            "GDEX.BTO",
            "GDEX.EOS",
            "GDEX.ETH",
            "GDEX.BTM",
            "GDEX.NEO",
            "GDEX.GAS",
            "GDEX.QTUM",
            "GDEX.BKBT",
            "GDEX.GXC",
            "GDEX.HPB",
            "GDEX.SEER",
            "GDEX.FOTA",
            "GDEX.JRC",
            "GDEX.EOSDAC",
            "GDEX.MTS",
            "GDEX.GUSD",
            "GDEX.IQ",
            "GDEX.NULS",
            "GDEX.USDT"
        ],
        openledgerTokens: [
            "OBITS",
            "OPEN.BTC",
            "OPEN.DASH",
            "OPEN.DGD",
            "OPEN.DOGE",
            "OPEN.EOS",
            "OPEN.EOSDAC",
            "OPEN.ETH",
            "OPEN.EURT",
            "OPEN.GRC",
            "OPEN.INCNT",
            "OPEN.KRM",
            "OPEN.LISK",
            "OPEN.LTC",
            "OPEN.MAID",
            "OPEN.MKR",
            "OPEN.NEO",
            "OPEN.OMG",
            "OPEN.SBD",
            "OPEN.STEEM",
            "OPEN.TUSD",
            "OPEN.USDT",
            "OPEN.WAVES",
            "OPEN.XMR",
            "OPEN.ZEC",
            "OPEN.ZRX"
        ],
        rudexTokens: [
            "PPY",
            "RUDEX.GBG",
            "RUDEX.GOLOS",
            "RUDEX.KRM",
            "RUDEX.SBD",
            "RUDEX.STEEM",
            "RUDEX.BTC",
            "RUDEX.ETH",
            "RUDEX.EOS",
            "RUDEX.WLS",
            "RUDEX.SMOKE",
            "RUDEX.GRC"
        ],
        sparkTokens: [
            "ZEPH",
            "PEG.PHP",
            "SPARKDEX.ETH",
            "SPARKDEX.BTC",
            "SPARKDEX.HKD",
            "SPARKDEX.SGD",
            "SPARKDEX.AUD",
            "SPARKDEX.EUR",
            "SPARKDEX.GBP"
        ],
        xbtsxTokens: [
            "XBTSX.STH",
            "XBTSX.POST",
            "XBTSX.DOGE",
            "XBTSX.BTC",
            "XBTSX.BTG",
            "XBTSX.BCH",
            "XBTSX.LTC",
            "XBTSX.DASH",
            "XBTSX.XSPEC",
            "XBTSX.NVC",
            "XBTSX.UNI",
            "XBTSX.NMC",
            "XBTSX.WAVES",
            "XBTSX.COF",
            "XBTSX.MDL",
            "XBTSX.ETH",
            "XBTSX.EXR"
        ],
        otherTokens: [
            "BTWTY",
            "TWENTIX",

            "CVCOIN",
            "HERO",
            "OCT",
            "HERTZ",
            "ICOO",
            "SMOKE",
            "STEALTH",
            "YOYOW"
        ]
>>>>>>> a200d3494b5f66bd360a054c6aa7330756bbc84f
    };
    let allTokens = [];
    for (let type in tokens) {
        allTokens = allTokens.concat(tokens[type]);
    }
    return allTokens;
}

/**
 * The featured markets displayed on the landing page of the UI
 *
 * @returns {list of string tuples}
 */
export function getFeaturedMarkets(quotes = []) {
    if (_isTestnet()) {
        return [["USD", "TEST"]];
    }
    return [

        ["BEOS", "TATCH.NLG"],
        ["TATCH.BTC", "TATCH.NLG"],
        ["TATCH.EUR", "TATCH.NLG"],
        ["TATCHCOIN", "TATCH.NLG"],
        ["TCLGULDEN", "TATCH.NLG"],
        ["TCLSILVER", "TATCH.NLG"],
        ["BRIDGE.WSP", "TATCH.NLG"],
        ["BRIDGE.PIVX", "TATCH.NLG"],
        ["TATCH.BTC", "TATCH.EUR"],
        ["BRIDGE.WSP", "TATCH.EUR"],
        ["BRIDGE.PIVX", "TATCH.EUR"],
        ["BTS", "TATCH.EUR"],
        ["BRIDGE.LTC", "TATCH.EUR"],
        ["TATCH.NLG", "TATCH.EUR"],
        ["TATCHCOIN", "TATCH.EUR"],
        ["TCLGULDEN", "TATCH.EUR"],
        ["TCLSILVER", "TATCH.EUR"],
        ["TATCH.BTC", "TATCH.BTC"],
        ["BRIDGE.WSP", "TATCH.BTC"],
        ["BRIDGE.PIVX", "TATCH.BTC"],
        ["BTS", "TATCH.BTC"],
        ["BITEUR", "TATCH.EUR"],
        ["BRIDGE.LTC", "TATCH.BTC"],
        ["TATCH.NLG", "TATCH.BTC"],
        ["TATCHCOIN", "TATCH.BTC"],
        ["TCLGULDEN", "TATCH.BTC"],
        ["TCLSILVER", "TATCH.BTC"]
    ].filter(a => {
        if (!quotes.length) return true;
        return quotes.indexOf(a[0]) !== -1;
    });
}

/**
 * Recognized namespaces of assets
 *
 * @returns {[string,string,string,string,string,string,string]}
 */
export function getAssetNamespaces() {
<<<<<<< HEAD
    return ["TATCH.", "BRIDGE.", "OPEN."];
=======
    if (_isTestnet()) {
        return [];
    }
    return [
        "OPEN.",
        "RUDEX.",
        "BRIDGE.",
        "GDEX.",
        "XBTSX.",
        "SPARKDEX.",
        "CITADEL."
    ];
>>>>>>> a200d3494b5f66bd360a054c6aa7330756bbc84f
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for BitAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
    // e..g "OPEN.", "bit"
    return ["TATCH."];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
<<<<<<< HEAD
    return ["TATCH", "BRIDGE", "OPEN", "tatch"];
=======
    const allowedGateways = [
        "TRADE",
        "OPEN",
        "RUDEX",
        "BRIDGE",
        "GDEX",
        "XBTSX",
        "SPARKDEX",
        "CITADEL"
    ];
    if (!gateway) {
        // answers the question: are any allowed?
        return allowedGateways.length > 0;
    }
    return allowedGateways.indexOf(gateway) >= 0;
>>>>>>> a200d3494b5f66bd360a054c6aa7330756bbc84f
}

export function getSupportedLanguages() {
    // not yet supported
}

export function getAllowedLogins() {
    // possible: list containing any combination of ["password", "wallet"]
    return ["password", "wallet"];
}

export function getConfigurationAsset() {
    let assetSymbol = null;
    if (_isTestnet()) {
        assetSymbol = "NOTIFICATIONS";
    } else {
        assetSymbol = "TEST";
    }
    // explanation will be parsed out of the asset description (via split)
    return {
        symbol: assetSymbol,
        explanation:
            "This asset is used for decentralized configuration of the BitShares UI placed under bitshares.org."
    };
}
