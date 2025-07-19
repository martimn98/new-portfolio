"use client";
import Link from "next/link";
import Publication from "./components/Publication";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1>
          Beatriz <b>Campos Estrada</b> PhD
        </h1>
        <h3>
          I am a <b>Postdoctoral Researcher</b> in the{" "}
          <a href="https://www.mpia.de/institute/scientific-departments/atmospheric-physics-of-exoplanets">
            APEx
          </a>{" "}
          department at the{" "}
          <a href="https://www.mpia.de/en">
            Max Planck Institute for Astronomy
          </a>{" "}
          in Heidelberg, where I am part of the{" "}
          <a href="https://www2.mpia-hd.mpg.de/~molliere/group/">
            atmospheric modelling and retrievals group
          </a>{" "}
          . I focus on <b>connecting theory to observations of exoplanets</b>{" "}
          via different modelling techniques.
        </h3>
        <p>
          Currently, I am developing and validating a{" "}
          <b>
            retrieval framework for variable brown dwarfs and directly imaged
            planets
          </b>
          . This framework is tested on GCM simulations, from which I generate
          synthetic observations to assess how accurately key atmospheric
          parameters can be retrieved from current data, including insights into
          the origin of atmospheric variability.
        </p>
        <p>
          In addition to this, my experience includes{" "}
          <b>testing atmospheric escape models for sub-Neptunes</b>,{" "}
          <b>constraining the compositions of small exoplanets</b>, and{" "}
          <b>atmospheric forward modelling</b> of directly imaged planets and
          brown dwarfs with complex cloud formation.
        </p>
        <p>
          I hold a <b>joint PhD in Astrophysics</b> from the{" "}
          <b>University of Copenhagen</b> (Denmark) and the{" "}
          <b>Graz University of Technology</b> (Austria), completed in October
          2024 as part of the{" "}
          <a href="https://chameleon.iwf.oeaw.ac.at/">CHAMELEON</a> Marie-Curie
          innovative training network.
        </p>
        <p className="italic">
          If you're interested in collaborating or have GCM simulations you'd
          like to share for testing the retrieval framework, I'd love to hear
          from you!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2>
          <Link href="/publications">selected publications</Link>
        </h2>
        <div className="flex flex-col gap-4">
          <Publication
            title="The MSG model for cloudy sub-stellar atmospheres: A grid of self-consistent sub-stellar atmosphere models with microphysical cloud formation"
            author="Beatriz Campos Estrada"
            date="Feb 2025"
            journal="A&A"
            otherAuthors="David A. Lewis, Christiane Helling, Richard A. Booth, Francisco Ardévol Martínez, and Uffe G. Jørgensen"
            doi="https://doi.org/10.1051/0004-6361/202451562"
            ads="https://ui.adsabs.harvard.edu/abs/2025A&A...694A.275C"
          />
          <Publication
            title="On the likely magnesium-iron silicate dusty tails of catastrophically evaporating rocky planets"
            author="Beatriz Campos Estrada"
            otherAuthors="James E. Owen, Marija R. Jankovic, Anna Wilson, and Christiane Helling"
            date="Feb 2024"
            journal="MNRAS"
            doi="https://doi.org/10.1093/mnras/stae095"
            ads="https://ui.adsabs.harvard.edu/abs/2024MNRAS.528.1249C"
          />
        </div>
      </div>
    </main>
  );
}
