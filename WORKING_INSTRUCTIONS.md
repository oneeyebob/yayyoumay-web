# YayYouMay Web - Arbejdsinstruktioner

Marketingsite: yayyoumay.dk
Repo: oneeyebob/yayyoumay-web

---

## Opstartssekvent

Push til main deployer automatisk til yayyoumay.dk via Vercel. Ingen lokal dev server nodvendig for simple andringer.

Hvis lokal preview er nodvendig:
cd /Users/jakobedelfeldt/yayyoumay-web && git checkout main && git pull origin main && npm run dev -- --port 3002

Claude Code:
cd /Users/jakobedelfeldt/yayyoumay-web && claude

---

## Prompt-format regler

- Al kode Jakob skal paste ind i Claude Code skal altid samles i EN boks klar til copy/paste
- Hvis det kraever flere trin: lav separate bokse og skriv "Forst denne boks - afvent svar" og "Derefter denne boks"
- Bed altid Code om at udvide output med ctrl-O naar output kan vaere langt
- Print altid fuldt output uden opsummering medmindre andet er aftalt
- En prompt ad gangen - Jakob paster, venter paa svar, naeste prompt

---

## Kommunikationskonventioner

- /btw - sidenotat, ingen opfolgning nodvendig
- /ontopic - tilbage til hoved-trad
- Brug aldrig em dash, brug altid almindelig bindestreg (-)

---

## Session-slut tjekliste

1. git add -A && git commit -m "..." && git push origin main
2. Tjek deployment paa Vercel - skal vaere Ready inden session lukkes
3. Opdater STATUS.md hvis noget er rykket sig

---

## Worktree-advarsel

Claude Code opretter automatisk git worktrees (f.eks. claude/pensive-morse). Det medforer at andringer sker i worktree og ikke deployer til Vercel.

Tjek altid git branch --show-current og skift til main med:
cd /Users/jakobedelfeldt/yayyoumay-web && git checkout main && git pull origin main
