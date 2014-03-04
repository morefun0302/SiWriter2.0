/**
 * Your Copyright Here
 *
 * Appcelerator Titanium is Copyright (c) 2009-2010 by Appcelerator, Inc.
 * and licensed under the Apache Public License (version 2)
 */
#import "ComGetsocializeTitaniumiosModule.h"
#import "TiBase.h"
#import "TiHost.h"
#import "TiUtils.h"
#import <Socialize/Socialize.h>

#define NonatomicRetainedSetToFrom(a, b) do{if(a!=b){[a release];a=[b retain];}}while(0)

@implementation ComGetsocializeTitaniumiosModule
@synthesize apiKey = apiKey_;
@synthesize apiSecret = apiSecret_;
@synthesize facebookAppId = facebookAppId_;

#pragma mark Internal

// this is generated for your module, please do not change it
-(id)moduleGUID
{
	return @"be30ab83-486a-451c-ab69-37568525ed55";
}

// this is generated for your module, please do not change it
-(NSString*)moduleId
{
	return MODULEID;
}

#pragma mark Lifecycle

-(void)startup
{
	// this method is called when the module is first loaded
	// you *must* call the superclass
	[super startup];
	
    NSString *bundlePath = [NSString stringWithFormat:@"modules/%@/Socialize.bundle",MODULEID];
    [Socialize storeBundlePath:bundlePath];
	NSLog(@"[INFO] %@ loaded",self);
    
}

-(void)shutdown:(id)sender
{
	// this method is called when the module is being unloaded
	// typically this is during shutdown. make sure you don't do too
	// much processing here or the app will be quit forceably
	
	// you *must* call the superclass
	[super shutdown:sender];
}

#pragma mark Cleanup 

-(void)dealloc
{
	// release any resources that have been retained by the module
	[super dealloc];
}

#pragma mark Internal Memory Management

-(void)didReceiveMemoryWarning:(NSNotification*)notification
{
	// optionally release any resources that can be dynamically
	// reloaded once memory is available - such as caches
	[super didReceiveMemoryWarning:notification];
}

#pragma mark Listener Notifications

-(void)_listenerAdded:(NSString *)type count:(int)count
{
	if (count == 1 && [type isEqualToString:@"my_event"])
	{
		// the first (of potentially many) listener is being added 
		// for event named 'my_event'
	}
}

-(void)_listenerRemoved:(NSString *)type count:(int)count
{
	if (count == 0 && [type isEqualToString:@"my_event"])
	{
		// the last listener called for event named 'my_event' has
		// been removed, we can optionally clean up any resources
		// since no body is listening at this point for that event
	}
}

#pragma Public APIs

-(id)example:(id)args
{
	// example method
	return @"hello world";
}

-(id)exampleProp
{
	// example property getter
	return @"hello world";
}

-(void)exampleProp:(id)value
{
	// example property setter
}

-(void)trySetApiKeyAndSecret {
    if ([self.apiKey length] > 0 && [self.apiSecret length] > 0) {
        NSLog(@"Socialize: Setting socialize api key and secret to %@/%@", self.apiKey, self.apiSecret);
        [Socialize storeSocializeApiKey:self.apiKey andSecret:self.apiSecret];
    }
}

-(void)setApiKey:(id)value
{
    NonatomicRetainedSetToFrom(apiKey_, value);
    [self trySetApiKeyAndSecret];
}

-(void)setApiSecret:(id)value
{
    NonatomicRetainedSetToFrom(apiSecret_, value);
    [self trySetApiKeyAndSecret];
}

-(void)setFacebookAppId:(id)value
{
    NonatomicRetainedSetToFrom(facebookAppId_, value);
    [Socialize storeFacebookAppId:value];
}

-(id)removeAuthenticationInfo:(id)args {
    [[[[Socialize alloc] initWithDelegate:nil] autorelease] removeAuthenticationInfo];
    return nil;
}

@end
