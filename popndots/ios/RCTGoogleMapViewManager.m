//
//  RCTGoogleMapViewManager.m
//  popndots
//
//  Created by Jordan Ranz on 11/14/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "RCTGoogleMapViewManager.h"

#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "RCTGoogleMapView.h"
#import "UIView+React.h"

@implementation RCTGoogleMapViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  RCTGoogleMapView *map = [[RCTGoogleMapView alloc] init];
  
  return map;
}

RCT_EXPORT_VIEW_PROPERTY(markers, NSDictionaryArray)

@end