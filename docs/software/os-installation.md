---
layout: default
title: "Installing Raspberry Pi OS"
permalink: /software/os-installation
---

# Installing Raspberry Pi OS

[Return to Software](index.md)

First things first, you need to install an operating system on your Pi. And for that, you'll need a microSD card.

1. **Download and install Raspberry Pi Imager on your PC**  
   Raspberry Pi Imager makes it super easy to install Raspberry Pi OS (or other OS options) onto your microSD card, so it's ready to go with your Pi.

2. **Connect your microSD card to the PC**  
   Open up Raspberry Pi Imager, choose your Pi model (Raspberry Pi 4 in this case), select your OS (I'm going with Raspberry Pi OS 64-bit), and choose your storage (the microSD card you just plugged in).

   ![Raspberry Pi Imager](../assets/software-configuration-image1.png)

   Click "NEXT," and you’ll see this popup:

   ![Use OS customization](../assets/software-configuration-image2.png)

   Since we want SSH access on the Pi, hit "EDIT SETTINGS." You’ll see this screen:

   ![OS customization - General tab](../assets/software-configuration-image3.png)

   Feel free to adjust the general settings here. I usually set the username and password at this point. Once you're done, head over to the "SERVICES" tab.

   ![OS customization - Services tab](../assets/software-configuration-image4.png)

   Here, you can enable SSH. I recommend selecting "Allow public key authentication only" and adding your public key. You can follow [this guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) if you don’t have one yet.

   After making all your changes, hit "SAVE" to apply them. You’ll be taken back to the popup where you originally clicked "EDIT SETTINGS." At this point, it will ask you, **"Would you like to apply OS customization settings?"** Hit "YES" to confirm.

   Now, the Imager will start writing the data to your microSD card.

   ![Writing to Micro SD](../assets/software-configuration-image5.png)

   Once it’s done, the Imager will let you know, and you can safely eject the microSD card.

3. **Insert the microSD card into the Pi**  
   Pop the microSD card into your Raspberry Pi and set up the 5-inch display.

   For more details on getting the display set up, head over to the [Hardware](../hardware.md) section.

   Once you're ready, plug the Pi into power using the USB-C adapter. You should see the Pi start booting on the screen. After a bit, the Raspberry Pi OS desktop will appear, and just like that—the OS installation is done! You’re now ready to SSH into the device.


Next up, let’s connect to our Pi via SSH for the first time! Head over to [Connecting to the Pi](./find-pi.md) to keep going.