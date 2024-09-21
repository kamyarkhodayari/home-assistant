---
layout: default
title: "Connecting to the Pi"
permalink: /software/find-pi
---

## Connecting to the Pi

[Return to Software](index.md)

From now on, we know that our Pi is connected to our wifi network and has internet access. There are two ways that we will access the Pi throughout this document.

1. **SSH to the Pi**  
   First, make sure you're connected to the same WiFi network and that no VPNs are active. Then, let’s find the local IP address of your Pi. On your touchscreen, tap the WiFi icon in the top navbar, then go to Advanced Options > Connection Information.

    A popup will show up, and under IPv4, you’ll find the IP address of your Pi. Now, using the username you set up in the wizard, you can SSH into the Pi. Don’t forget, you added your SSH key during the [OS installation](./os-installation.md) with the Imager, so use that same key here.

   ```
    ssh <your_username>@<local_ip_address>
   ```
2. **Respberry Pi Connect**  
   An easier way to access your Pi is by using Raspberry Pi Connect. To do this, you’ll need to create a Raspberry Pi ID and sign in with it on your Pi. Check out this <a href="https://www.raspberrypi.com/documentation/services/connect.html" target="_blank">documentation</a> to get set up with Raspberry Pi Connect.
   
   Once everything’s set up, you can enjoy **screen sharing** and **remote shell** access to your Pi from any network, anywhere, just using your browser— as long as your Pi is connected to the internet.

Now we can jump into coding the front-end and back-end for PiNest!