import 'package:flutter/material.dart';
import '../models/verification_model.dart';

class VerificationProvider extends ChangeNotifier {
  VerificationModel verificationModel = VerificationModel();
  TextEditingController mobileController = TextEditingController();
  TextEditingController emailController = TextEditingController();
  GlobalKey<FormState> formKey = GlobalKey<FormState>();
  bool isLoading = false;

  @override
  void dispose() {
    mobileController.dispose();
    emailController.dispose();
    super.dispose();
  }

  void initialize() {
    isLoading = false;
    verificationModel = VerificationModel();
    notifyListeners();
  }

  void onMobileNumberChanged(String value) {
    verificationModel.mobileNumber = value;
    if (value.isNotEmpty) {
      emailController.clear();
      verificationModel.emailAddress = null;
    }
    notifyListeners();
  }

  void onEmailChanged(String value) {
    verificationModel.emailAddress = value;
    if (value.isNotEmpty) {
      mobileController.clear();
      verificationModel.mobileNumber = null;
    }
    notifyListeners();
  }

  String? validateMobileNumber(String? value) {
    if (value != null && value.isNotEmpty) {
      if (!RegExp(r'^[0-9]{10}$').hasMatch(value)) {
        return 'Please enter a valid 10-digit mobile number';
      }
    }
    return null;
  }

  String? validateEmail(String? value) {
    if (value != null && value.isNotEmpty) {
      if (!RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$').hasMatch(value)) {
        return 'Please enter a valid email address';
      }
    }
    return null;
  }

  Future<void> sendVerificationCode() async {
    String? mobileNumber = verificationModel.mobileNumber?.trim();
    String? emailAddress = verificationModel.emailAddress?.trim();

    if ((mobileNumber == null || mobileNumber.isEmpty) &&
        (emailAddress == null || emailAddress.isEmpty)) {
      _showErrorMessage('Please enter either mobile number or email address');
      return;
    }

    if ((mobileNumber != null && mobileNumber.isNotEmpty) &&
        (emailAddress != null && emailAddress.isNotEmpty)) {
      _showErrorMessage(
          'Please enter either mobile number or email address, not both');
      return;
    }

    if (!formKey.currentState!.validate()) {
      return;
    }

    try {
      isLoading = true;
      notifyListeners();

      // Simulate API call
      await Future.delayed(Duration(seconds: 2));

      if (mobileNumber != null && mobileNumber.isNotEmpty) {
        verificationModel.verificationMethod = 'mobile';
        print('Sending verification code to mobile: $mobileNumber');
      } else if (emailAddress != null && emailAddress.isNotEmpty) {
        verificationModel.verificationMethod = 'email';
        print('Sending verification code to email: $emailAddress');
      }

      isLoading = false;
      verificationModel.isVerificationSent = true;
      notifyListeners();

      _showSuccessMessage('Verification code sent successfully!');
    } catch (error) {
      isLoading = false;
      notifyListeners();
      _showErrorMessage('Failed to send verification code. Please try again.');
    }
  }

  void _showErrorMessage(String message) {
    // This would typically show a snackbar or dialog
    print('Error: $message');
  }

  void _showSuccessMessage(String message) {
    // This would typically show a snackbar or dialog
    print('Success: $message');
  }
}
