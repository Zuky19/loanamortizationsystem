import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const SplashScreen(),
    );
  }
}

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;

    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          // Background pink circular overlays
          Positioned(
            top: -screenHeight * 0.1,
            left: -screenWidth * 0.3,
            child: Container(
              width: screenWidth * 0.8,
              height: screenWidth * 0.8,
              decoration: const BoxDecoration(
                color: Color(0x60EF8BBB),
                shape: BoxShape.circle,
              ),
            ),
          ),
          Positioned(
            bottom: -screenHeight * 0.2,
            right: -screenWidth * 0.3,
            child: Container(
              width: screenWidth * 1.0,
              height: screenWidth * 1.0,
              decoration: const BoxDecoration(
                color: Color(0x40EF8BBB),
                shape: BoxShape.circle,
              ),
            ),
          ),

          // Content of the screen
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Top illustration
              Container(
                width: screenWidth * 0.7,
                height: screenHeight * 0.25,
                decoration: const BoxDecoration(
                  image: DecorationImage(
                    image: NetworkImage(
                        "https://via.placeholder.com/300x200"), // Replace with your actual image URL
                    fit: BoxFit.contain,
                  ),
                ),
              ),
              const SizedBox(height: 20),

              // Centered text
              const Text(
                'INNOVATION IS HERE......',
                style: TextStyle(
                  color: Color(0xFF180B3E),
                  fontSize: 18,
                  fontWeight: FontWeight.w600,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 20),

              // Overlapping graphics
              Stack(
                alignment: Alignment.center,
                children: [
                  Container(
                    width: screenWidth * 0.4,
                    height: screenHeight * 0.2,
                    decoration: const BoxDecoration(
                      image: DecorationImage(
                        image: NetworkImage(
                            "https://via.placeholder.com/150"), // Replace with first graphic URL
                        fit: BoxFit.contain,
                      ),
                    ),
                  ),
                  Positioned(
                    right: 0,
                    child: Container(
                      width: screenWidth * 0.3,
                      height: screenHeight * 0.15,
                      decoration: const BoxDecoration(
                        image: DecorationImage(
                          image: NetworkImage(
                              "https://via.placeholder.com/120"), // Replace with second graphic URL
                          fit: BoxFit.contain,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 50),

              // Get Started button
              SizedBox(
                width: screenWidth * 0.6,
                height: screenHeight * 0.07,
                child: ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFE91E63),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                    elevation: 5,
                  ),
                  child: const Text(
                    'Get Started.....',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
