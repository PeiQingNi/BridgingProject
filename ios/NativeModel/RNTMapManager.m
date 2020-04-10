//
//  RNTMapManager.m
//  BridgingProject
//
//  Created by 倪培青 on 2020/4/10.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import <MapKit/MapKit.h>

@implementation RNTMapManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  return [[MKMapView alloc] init];
}

#pragma mark - 属性
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL);

@end
