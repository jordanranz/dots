//
//  RCTGoogleMapView.h
//  popndots
//
//  Created by Jordan Ranz on 11/14/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
@import GoogleMaps;

@interface RCTGoogleMapView : GMSMapView

@property (nonatomic, copy) NSArray *markers;

@end
