import 'package:flutter/material.dart';

import '../../core/app_export.dart';
import '../../widgets/custom_image_view.dart';
import '../../widgets/custom_text_form_field.dart';
import './provider/verification_provider.dart';

class VerificationScreen extends StatefulWidget {
  VerificationScreen({Key? key}) : super(key: key);

  static Widget builder(BuildContext context) {
    return ChangeNotifierProvider<VerificationProvider>(
      create: (context) => VerificationProvider(),
      child: VerificationScreen(),
    );
  }

  @override
  State<VerificationScreen> createState() => _VerificationScreenState();
}

class _VerificationScreenState extends State<VerificationScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Provider.of<VerificationProvider>(context, listen: false).initialize();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Consumer<VerificationProvider>(
        builder: (context, provider, child) {
          return Stack(
            children: [
              // Background Image
              Positioned.fill(
                child: CustomImageView(
                  imagePath: ImageConstant.imgImage1,
                  fit: BoxFit.cover,
                ),
              ),

              // Background Vector Overlay
              Positioned(
                top: 5.h,
                left: 0,
                child: CustomImageView(
                  imagePath: ImageConstant.imgEllipse7,
                  width: 360.h,
                  height: 600.h,
                  fit: BoxFit.cover,
                ),
              ),

              // Main Content
              SafeArea(
                child: Center(
                  child: SingleChildScrollView(
                    padding:
                        EdgeInsets.symmetric(horizontal: 16.h, vertical: 32.h),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        _buildLogoSection(),
                        SizedBox(height: 32.h),
                        _buildInstructionSection(),
                        SizedBox(height: 32.h),
                        _buildFormSection(provider),
                      ],
                    ),
                  ),
                ),
              ),

              // Loading Overlay
              if (provider.isLoading)
                Container(
                  color: appTheme.blackCustom.withAlpha(77),
                  child: Center(
                    child: CircularProgressIndicator(
                      color: appTheme.colorFFD719,
                    ),
                  ),
                ),
            ],
          );
        },
      ),
    );
  }

  Widget _buildLogoSection() {
    return CustomImageView(
      imagePath: ImageConstant.imgBookmyshowlogo,
      width: 80.h,
      height: 80.h,
      fit: BoxFit.contain,
    );
  }

  Widget _buildInstructionSection() {
    return Container(
      constraints: BoxConstraints(maxWidth: 221.h),
      child: Text(
        'Please enter your mobile number or\nemail address for verification',
        textAlign: TextAlign.center,
        style: TextStyleHelper.instance.body14Regular.copyWith(height: 1.14),
      ),
    );
  }

  Widget _buildFormSection(VerificationProvider provider) {
    return Container(
      width: double.infinity,
      constraints: BoxConstraints(maxWidth: 240.h),
      child: Form(
        key: provider.formKey,
        child: Column(
          children: [
            // Mobile Number Input
            CustomTextFormField(
              controller: provider.mobileController,
              hintText: 'Enter mobile number',
              keyboardType: TextInputType.phone,
              onChanged: (value) => provider.onMobileNumberChanged(value),
              validator: (value) => provider.validateMobileNumber(value),
            ),

            SizedBox(height: 24.h),

            // OR Divider
            Text(
              'or',
              style: TextStyleHelper.instance.body14Regular
                  .copyWith(color: appTheme.colorFFAAAA),
            ),

            SizedBox(height: 24.h),

            // Email Input
            CustomTextFormField(
              controller: provider.emailController,
              hintText: 'Enter email address',
              keyboardType: TextInputType.emailAddress,
              onChanged: (value) => provider.onEmailChanged(value),
              validator: (value) => provider.validateEmail(value),
            ),

            SizedBox(height: 40.h),

            // Send Verification Button
            SizedBox(
              width: double.infinity,
              height: 48.h,
              child: ElevatedButton(
                onPressed: provider.isLoading
                    ? null
                    : () => provider.sendVerificationCode(),
                style: ElevatedButton.styleFrom(
                  backgroundColor: appTheme.colorFFD719,
                  foregroundColor: appTheme.whiteCustom,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(24.h),
                  ),
                  elevation: 1.h,
                ),
                child: Text(
                  provider.isLoading ? 'Sending...' : 'Send Verification Code',
                  style: TextStyleHelper.instance.body14Bold,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
