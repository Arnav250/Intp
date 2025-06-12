import 'package:flutter/material.dart';
import '../core/app_export.dart';

/// A helper class for managing text styles in the application
class TextStyleHelper {
  static TextStyleHelper? _instance;

  TextStyleHelper._();

  static TextStyleHelper get instance {
    _instance ??= TextStyleHelper._();
    return _instance!;
  }

  // Title Styles
  // Medium text styles for titles and subtitles

  TextStyle get title20RegularRoboto => TextStyle(
        fontSize: 20.fSize,
        fontWeight: FontWeight.w400,
        fontFamily: 'Roboto',
      );

  // Body Styles
  // Standard text styles for body content

  TextStyle get body14Regular => TextStyle(
        fontSize: 14.fSize,
        fontWeight: FontWeight.w400,
        color: appTheme.colorFF7373,
      );

  TextStyle get body14Bold => TextStyle(
        fontSize: 14.fSize,
        fontWeight: FontWeight.w700,
      );

  TextStyle get body14RegularRoboto => TextStyle(
        fontSize: 14.fSize,
        fontWeight: FontWeight.w400,
        fontFamily: 'Roboto',
        color: appTheme.colorFF0000,
      );
}
