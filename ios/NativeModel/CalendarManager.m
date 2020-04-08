//
//  CalendarManager.m
//  BridgingProject
//
//  Created by 倪培青 on 2020/4/6.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();


#pragma mark - React To Native
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location) {
  RCTLogInfo(@"name:%@ location:%@", name, location);
}

RCT_REMAP_METHOD(addEvents, events:(NSString *)events locations:(NSString *)locations) {
  RCTLogInfo(@"events:%@ locations:%@", events, locations);
}

RCT_REMAP_METHOD(addMoreEvent, details:(NSDictionary *)dict) {
  RCTLogInfo(@"dict:%@", dict);
}


#pragma mark - Native To React
RCT_REMAP_METHOD(findEvent, event:(RCTResponseSenderBlock)callback) {
  NSArray *arr = @[@"Native To React"];
  callback(@[arr]);
}

RCT_REMAP_METHOD(findEvents,
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
  NSArray *events = @[@"native to react"];
  if (events) {
    resolve(events);
  }else {
    reject(@"no_events", @"There were no events", [[NSError alloc] init]);
  }
}


#pragma mark - 导出常量
+ (BOOL)requiresMainQueueSetup {
  return YES;
}

- (NSDictionary *)constantsToExport {
  return @{
    @"name": @"zhangsan",
  };
}
@end
