# Museum in a Box for micro:bit

Boop! Boop!

## License

MIT

## Getting Started

 1. Go to [codethemicrobit.com/](https://codethemicrobit.com/)
 1. Click `More...` and then `Add Package...`
 1. Type "miab" into the search box and hit `Search`
 1. You should see the `microbit-miab` package listed.  Click on it to add it to your project.
 1. You'll now have a `Miab` entry in the list of blocks.  Clicking on it will give you some blocks to use to interact with a micro:bit-enabled [Museum in a Box Brain](https://github.com/museuminabox/brain)

## Brain Setup

To have your Brain talk to some micro:bits coded with the blocks above you'll need some changes from the default software install.

### Hardware

You need a micro:bit connected to the Pi in the Brain with a USB cable.

### Software

 * The micro:bit connected to the Pi needs to have the code from [microbit-radio-serial in the Brain repo](https://github.com/museuminabox/brain/tree/master/microbit-radio-serial).
 * The Brain will need a NodeRED flow which is aware of the attached micro:bit.  That's still under development, and being tracked in [this Brain issue](https://github.com/museuminabox/brain/issues/30).

## Supported targets

* for PXT/microbit
