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

// 为了实现RCTBridgeModule协议，类需要包含RCT_EXPORT_MODULE()宏。
RCT_EXPORT_MODULE();


#pragma mark - React To Native
/**
 * 导出方法 给JavaScript调用
 * addEvent 方法名
 * 两个参数 name location
 */
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location) {
  RCTLogInfo(@"name:%@ location:%@", name, location);
}

/**
 * 导出方法 给JavaScript调用
 * addEvents 方法名
 * 两个参数 events locations
 */
RCT_REMAP_METHOD(addEvents, events:(NSString *)events locations:(NSString *)locations) {
  RCTLogInfo(@"events:%@ locations:%@", events, locations);
}

/**
 * 导出方法 给JavaScript调用
 * addMoreEvent 方法名
 * 参数 dict
 */
RCT_REMAP_METHOD(addMoreEvent, details:(NSDictionary *)dict) {
  RCTLogInfo(@"dict:%@", dict);
}


#pragma mark - Native To React
/**
 * 导出方法 给JavaScript调用
 * findEvent 方法名
 * 回调参数 callback
 */
RCT_REMAP_METHOD(findEvent, event:(RCTResponseSenderBlock)callback) {
  NSArray *arr = @[@"Native To React"];
  callback(@[[NSNull null], arr]);
}

/**
 * 导出方法 给JavaScript调用
 * findEvents 方法名
 * 回调参数 resolve reject 两个参数必须同时出现
 */
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

#pragma mark - methodQueue
/**
 通过实现methodQueue方法，指定原生模块在哪个队列中被执行。
 指定的methodQueue会被你模块里的所有方法共享。
 */
//- (dispatch_queue_t)methodQueue {
//  return dispatch_get_main_queue();
//}

/**
 如果一个操作需要花费很长时间，原生模块不应该阻塞住，
 而是应当声明一个用于执行操作的独立队列。
 */
//- (dispatch_queue_t)methodQueue {
//  return dispatch_queue_create("com.facebook.React.AsyncLocalStorageQueue", DISPATCH_QUEUE_SERIAL);
//}

#pragma mark - 导出常量
/**
 原生模块可以导出一些常量，这些常量在 JavaScript 端随时都可以访问。
 用这种方法来传递一些静态数据，可以避免通过 bridge 进行一次来回交互。
 */
+ (BOOL)requiresMainQueueSetup {
  return YES;
}

- (NSDictionary *)constantsToExport {
  return @{
    @"name": @"zhangsan",
  };
}
@end
