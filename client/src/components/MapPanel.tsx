import { ArrowUpRight, MapPin } from "lucide-react";
import { park } from "@/data/parkContent";

export default function MapPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`map-panel ${compact ? "map-panel-compact" : ""}`} aria-labelledby="map-panel-title">
      <div className="map-panel-copy">
        <span className="eyebrow eyebrow-blue"><MapPin size={15} /> Find us in eMondlo</span>
        <h2 id="map-panel-title">Come and find us.</h2>
        <address>{park.address}</address>
        <p className="map-note">Approximate location: this map searches the supplied address, not a surveyed entrance pin. Allow time to locate the gate.</p>
        <a className="button button-primary" href={park.mapSearchUrl} target="_blank" rel="noreferrer">
          Get directions <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="map-frame">
        <iframe
          title="Google Maps search for Splash Kids Waterpark's supplied eMondlo address"
          src={park.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
