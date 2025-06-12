import 'package:flutter/material.dart';

import '../core/app_export.dart';

/**
 * A customizable text form field widget that provides consistent styling
 * and behavior across the application. Supports various input types including
 * phone numbers, email, and general text input.
 * 
 * @param controller - TextEditingController for managing the input text
 * @param hintText - Placeholder text displayed when the field is empty
 * @param validator - Function to validate the input text
 * @param onChanged - Callback function triggered when text changes
 * @param keyboardType - Type of keyboard to display for input
 * @param enabled - Whether the text field is enabled for input
 * @param errorText - Error message to display below the field
 * @param maxLines - Maximum number of lines for the text field
 * @param obscureText - Whether to obscure the text (for passwords)
 */
class CustomTextFormField extends StatelessWidget {
  const CustomTextFormField({
    Key? key,
    this.controller,
    this.hintText,
    this.validator,
    this.onChanged,
    this.keyboardType,
    this.enabled,
    this.errorText,
    this.maxLines,
    this.obscureText,
  }) : super(key: key);

  /// Controller for managing the text input
  final TextEditingController? controller;

  /// Placeholder text shown when field is empty
  final String? hintText;

  /// Function to validate the input text
  final String? Function(String?)? validator;

  /// Callback function triggered when text changes
  final Function(String)? onChanged;

  /// Type of keyboard to display
  final TextInputType? keyboardType;

  /// Whether the text field is enabled
  final bool? enabled;

  /// Error message to display
  final String? errorText;

  /// Maximum number of lines
  final int? maxLines;

  /// Whether to obscure the text
  final bool? obscureText;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      keyboardType: keyboardType ?? TextInputType.text,
      enabled: enabled ?? true,
      maxLines: maxLines ?? 1,
      obscureText: obscureText ?? false,
      onChanged: onChanged,
      style: TextStyleHelper.instance.body14RegularRoboto,
      decoration: InputDecoration(
        hintText: hintText ?? "Enter text",
        hintStyle: TextStyleHelper.instance.body14RegularRoboto
            .copyWith(color: appTheme.colorFFAAAA),
        errorText: errorText,
        contentPadding: EdgeInsets.symmetric(
          horizontal: 16.h,
          vertical: 12.h,
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8.h),
          borderSide: BorderSide(
            color: appTheme.colorFFE8E8,
            width: 2.h,
          ),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8.h),
          borderSide: BorderSide(
            color: appTheme.colorFFE8E8,
            width: 2.h,
          ),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8.h),
          borderSide: BorderSide(
            color: appTheme.colorFFD719,
            width: 2.h,
          ),
        ),
        errorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8.h),
          borderSide: BorderSide(
            color: appTheme.colorFFD719,
            width: 2.h,
          ),
        ),
        focusedErrorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8.h),
          borderSide: BorderSide(
            color: appTheme.colorFFD719,
            width: 2.h,
          ),
        ),
        disabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8.h),
          borderSide: BorderSide(
            color: appTheme.colorFFE8E8,
            width: 2.h,
          ),
        ),
      ),
      validator: validator,
    );
  }
}
