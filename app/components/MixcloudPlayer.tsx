import { getMixcloudFeed, type Mix } from "../data/mixes";

export default function MixcloudPlayer({ mix }: { mix: Mix }) {
  const feed = getMixcloudFeed(mix.url);
  if (!feed) return null;

  return (
    <iframe
      src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=${encodeURIComponent(feed)}`}
      title={`Ascolta ${mix.title} su Mixcloud`}
      width="100%"
      height="180"
      loading="lazy"
      allow="autoplay; encrypted-media; fullscreen"
      style={{ border: 0, display: "block" }}
    />
  );
}
