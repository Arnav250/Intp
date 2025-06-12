import 'package:flutter/material.dart';
import '../presentation/verification_screen/verification_screen.dart';

import '../presentation/app_navigation_screen/app_navigation_screen.dart';

class AppRoutes {
  static const String verificationScreen = '/verification_screen';

  static const String appNavigationScreen = '/app_navigation_screen';
  static const String initialRoute = '/initialRoute';

  static Map<String, WidgetBuilder> get routes => {
        verificationScreen: VerificationScreen.builder,
        appNavigationScreen: AppNavigationScreen.builder,
        initialRoute: AppNavigationScreen.builder
      };
}
