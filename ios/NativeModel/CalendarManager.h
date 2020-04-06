//
//  CalendarManager.h
//  BridgingProject
//
//  Created by 倪培青 on 2020/4/6.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
NS_ASSUME_NONNULL_BEGIN

/**在 React Native 中，一个“原生模块”就是一个实现了“RCTBridgeModule”协议的 Objective-C 类*/
@interface CalendarManager : NSObject <RCTBridgeModule>

@end

NS_ASSUME_NONNULL_END
