/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var expect = require('expect');
var {
    CHANGE_MAP_VIEW,
    CLICK_ON_MAP,
    CHANGE_MOUSE_POINTER,
    LAYER_LOADING,
    LAYER_LOAD,
    SHOW_SPINNER,
    HIDE_SPINNER,
    changeMapView,
    clickOnMap,
    changeMousePointer,
    layerLoading,
    layerLoad,
    showSpinner,
    hideSpinner
} = require('../map');

describe('Test correctness of the map actions', () => {

    it('changeMapVeiw', () => {
        const testCenter = 0;
        const testZoom = 3;
        const testBbox = 6;
        const testSize = 9;
        var retval = changeMapView(testCenter, testZoom, testBbox, testSize);

        expect(retval).toExist();
        expect(retval.type).toBe(CHANGE_MAP_VIEW);
        expect(retval.center).toBe(testCenter);
        expect(retval.zoom).toBe(testZoom);
        expect(retval.bbox).toBe(testBbox);
        expect(retval.size).toBe(testSize);
    });

    it('set a new clicked point', () => {
        const testVal = "val";
        const retval = clickOnMap(testVal);

        expect(retval.type).toBe(CLICK_ON_MAP);
        expect(retval.point).toExist();
        expect(retval.point).toBe(testVal);
    });

    it('set a new mouse pointer', () => {
        const testVal = 'pointer';
        const retval = changeMousePointer(testVal);

        expect(retval).toExist();
        expect(retval.type).toBe(CHANGE_MOUSE_POINTER);
        expect(retval.pointer).toBe(testVal);
    });

    it('a layer is loading', () => {
        const testVal = 'layer1';
        const retval = layerLoading(testVal);

        expect(retval).toExist();
        expect(retval.type).toBe(LAYER_LOADING);
        expect(retval.layerId).toBe(testVal);
    });

    it('a layer is load', () => {
        const testVal = 'layer1';
        const retval = layerLoad(testVal);

        expect(retval).toExist();
        expect(retval.type).toBe(LAYER_LOAD);
        expect(retval.layerId).toBe(testVal);
    });

    it('show some spinner', () => {
        const testVal = 'spinner1';
        const retval = showSpinner(testVal);

        expect(retval).toExist();
        expect(retval.type).toBe(SHOW_SPINNER);
        expect(retval.spinnerId).toBe(testVal);
    });

    it('hide some spinner', () => {
        const testVal = 'spinner1';
        const retval = hideSpinner(testVal);

        expect(retval).toExist();
        expect(retval.type).toBe(HIDE_SPINNER);
        expect(retval.spinnerId).toBe(testVal);
    });
});