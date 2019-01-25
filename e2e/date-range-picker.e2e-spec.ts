import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  element,
  by
} from 'protractor';

describe('Date range picker', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/date-range-picker');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match previous date range picker specific range screenshot', (done) => {
    expect('#screenshot-date-range-picker').toMatchBaselineScreenshot(done, {
      screenshotName: 'date-range-picker-specific-range'
    });
  });

  it('should match previous date range picker specific range screenshot (xs screen)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('#screenshot-date-range-picker').toMatchBaselineScreenshot(done, {
      screenshotName: 'date-range-picker-specific-range-xs'
    });
  });

  it('should match previous date-range-picker before screenshot', (done) => {
    element(by.css('select')).click();
    element.all(by.css('select option')).get(1).click();
    expect('#screenshot-date-range-picker').toMatchBaselineScreenshot(done, {
      screenshotName: 'date-range-picker-before'
    });
  });

  it('should match previous date-range-picker before screenshot (xs screen)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('select')).click();
    element.all(by.css('select option')).get(1).click();
    expect('#screenshot-date-range-picker').toMatchBaselineScreenshot(done, {
      screenshotName: 'date-range-picker-before-xs'
    });
  });

  it('should match previous date-range-picker after screenshot', (done) => {
    element(by.css('select')).click();
    element.all(by.css('select option')).get(2).click();
    expect('#screenshot-date-range-picker').toMatchBaselineScreenshot(done, {
      screenshotName: 'date-range-picker-after'
    });
  });

  it('should match previous date-range-picker after screenshot (xs screen)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('select')).click();
    element.all(by.css('select option')).get(2).click();
    expect('#screenshot-date-range-picker').toMatchBaselineScreenshot(done, {
      screenshotName: 'date-range-picker-after-xs'
    });
  });

  it('should match previous date-range-picker default value screenshot', (done) => {
    element(by.css('select')).click();
    element.all(by.css('select option')).get(3).click();
    expect('#screenshot-date-range-picker').toMatchBaselineScreenshot(done, {
      screenshotName: 'date-range-picker-default-value'
    });
  });

  it('should match previous date-range-picker default value screenshot (xs screen)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('select')).click();
    element.all(by.css('select option')).get(3).click();
    expect('#screenshot-date-range-picker').toMatchBaselineScreenshot(done, {
      screenshotName: 'date-range-picker-default-value-xs'
    });
  });
});
