/* Objective-C clásico */
@interface ViewController : UIViewController
@end

@implementation ViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    UILabel *label = [[UILabel alloc] init];
    label.text = @"Hello iOS";
    [self.view addSubview:label];
}
@end
