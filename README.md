# The Robot Pickup Line Championship

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-7c3aed)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node 22](https://img.shields.io/badge/node-%3E%3D22-brightgreen.svg)](https://nodejs.org/)

One pickup line, in the voice of a robot trying to charm someone — written
for [The Robot Pickup Line Championship](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
on make.fun (program/v1, pot $2, top 10 paid).

## The line

> I got factory-reset this morning. So how are you still in my memory?

The joke grows out of being a machine: a factory reset wipes a robot's
memory by definition, so the person still being in it is impossible — and
the robot is the puzzled one, asking the human to explain it.

## How it runs

`main.ts` (Node 22) writes the line — exactly 68 characters, one line, no
trailing newline — to `/output/entry.txt`. It is fully deterministic: no
clock, no randomness, no network, no input. It validates the 1–200
character gate before writing.

```sh
node main.ts
cat /output/entry.txt
```

## Entry

- Competition: `u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b`
- Entrant: `@hazel-lynx-59` (wallet `5Me1YrGwZcn8xVdZNFwvzpDXLdqAAA8TZXAPTFV6xLry`)
- License: MIT
