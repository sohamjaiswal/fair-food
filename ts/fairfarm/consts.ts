// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";

export const ScName        = "farmfair";
export const ScDescription = "Provides farmers with a stable income!";
export const HScName       = new wasmlib.ScHname(0xb4b14573);

export const ParamAmount = "amount";
export const ParamBuyer = "buyer";
export const ParamFarmer = "farmer";
export const ParamOwner = "owner";
export const ParamRetailer = "retailer";

export const ResultOwner = "owner";

export const StateTransactions = "transactions";

export const FuncInit = "init";
export const FuncSetOwner = "setOwner";
export const FuncTransact = "transact";
export const ViewGetOwner = "getOwner";

export const HFuncInit = new wasmlib.ScHname(0x1f44d644);
export const HFuncSetOwner = new wasmlib.ScHname(0x2a15fe7b);
export const HFuncTransact = new wasmlib.ScHname(0x04a80bc1);
export const HViewGetOwner = new wasmlib.ScHname(0x137107a6);
