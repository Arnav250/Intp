/// This class is used in the [VerificationScreen] screen.

// ignore_for_file: must_be_immutable
class VerificationModel {
  VerificationModel({
    this.mobileNumber,
    this.emailAddress,
    this.verificationMethod,
    this.isVerificationSent,
  }) {
    mobileNumber = mobileNumber ?? '';
    emailAddress = emailAddress ?? '';
    verificationMethod = verificationMethod ?? '';
    isVerificationSent = isVerificationSent ?? false;
  }

  String? mobileNumber;

  String? emailAddress;

  String? verificationMethod;

  bool? isVerificationSent;
}
