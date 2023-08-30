# Krunker - Game source

This repository stores the source code of the game [Krunker.io](https://krunker.io/).

Current version: **7.1.7**

## How to find

- Open [Krunker.io](https://krunker.io/), and open the developer console (F12 or Ctrl+Shift+I)
- Navigate to the `Network` tab, and type `seek` into the search bar.
- Refresh the tab, and wait until you see a request that looks like this:
- You'll see that there is a column called `Initiator`; click on that.
- Wait for the file to load, right click on the source code, and click `Save as...`
- Open the file in an editor that supports > 8MB files (Visual Studio Code works fine.)
- You can now view the source code of Krunker!

## How to contribute (or for personal use)

- Fork this repository
- Follow the above guide to find the source code
- Replace the anonymous function at the top of the file (this is often the first two lines), as well as the closing parenthesis at the bottom of the file
