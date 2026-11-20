[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Rahullpc/gta6-clipper-01-clip3/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Rahullpc/gta6-clipper-01-clip3/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# gta6-clipper-01 — clip 3: "Jason Minum Protein Shake di GTA VI!"

Entry for the [make.fun](https://make.fun/bounty/gta6-clipper-01) bounty "Clip GTA 6 for the most YouTube views"
($500, top 20 share). Places go by the video's views at the deadline.

## The clip

GTA VI gameplay: Jason opening the fridge at home, drinking a Protein
Shake, walking around the house, then opening the fridge again and
drinking a Raine Water — the absurdity of a GTA criminal living an
ordinary, healthy domestic life — plus Windah Basudara's laughing
reaction in the facecam. The clip then pitches make.fun on screen
("Bikin klip pakai AI / dapat cuan di make.fun") in its last 5 seconds.

- Video (public Short): https://www.youtube.com/shorts/t6syFStLfQA
- Channel: @hu2dzwynnn
- Format: vertical 576x1024, 29.00 s

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`, where the gate reads it. That is
all the program has to do — the entry is the video, and the house reads
its views through the YouTube Data API.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
