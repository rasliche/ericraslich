---
title: Getting Wifi to Work on Ubuntu Server 20.04 on a Raspberry Pi 4
subtitle: Raspberry Pis have wifi! How do I use it!?
tags: ["Tech", "Self-hosted"]
---
This guide is specifically for Ubuntu Server 20.04 on a Raspberrry Pi 4. This is the first thing I do after putting a fresh SD card into the Pi and giving it power.

## how to get connected to the internet

I'm a renter and I just don't take the time to set up a wired network, as much as I fancy myself an amateur homelabber (which I think is already an amateur sysadmin?).

So the first thing I always have to do when I restart a raspberry pi build is try to get wifi working. I usually have to google it. Here's what you do without too much extra talking. 

This guide assumes you have a `sudo` user account, and haven't messed with too much stuff yet, basically the first thing you do after you install from an SD card.

## make sure the wifi card in your raspberry pi 4 doesn't have a goofy name

`ls /sys/class/net`

That will list some options. You're looking for something that starts with **w** probably. Mine was `wlan0`. I bet yours is too.

## add your wifi network info to 50-cloud-init.yaml

This is a YAML configuration file. Being a YAML file, indentation is important. Make sure you use 4 spaces on lines that should be indented, not a tab. Just line things up like you see in the file.

I use vim to edit files. You can too. Just know that it has two modes. Hitting **esc** gets you out of insertion mode and back to the mode you're in when you first open the file. This is pretty safe. Use the keys **HJKL** to move your cursor around the file. Press **I** to be able to type. Here we go:

`sudo vim /etc/netplan/50-cloud-init.yaml`

Hold **J** to get to the bottom of the file.

Make a `wifis:` entry at the bottom, inline with the `ethernets:` line.

Your entry will look like this:

```
wifis:
    wlan0:
        optional: true
        dhcp4: true
        access-points:
            "YOUR-WIRELESS_NETWORK-HERE":
                password: "YOUR_NETWORKS-PASSWORD"
```

Now you've typed your settings in, how the heck do you save? First, hit **esc** to get out of insertion mode. Then type `:wq` to *write* and *quit*.

## tell ubuntu to ignore the default config when the computer restarts

If you didn't read the top of the last file, check it out real quick `less /etc/netplan/50-cloud-init.yaml`. Hit `q` to quit reading.

We're going to create the file it suggests. Easy peasy.

`sudo vim /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg`

and put the following line in it and save the file (hit **I**, type the code in, hit **esc**, type `:wq`)

```
network: {config: disabled}
```

## reboot your pi and hope it works

That should be all you need to get hooked up. When you reboot, your pi should have connected to wifi automatically assuming you've got a straightforward setup.

`sudo reboot`

Good luck out there.