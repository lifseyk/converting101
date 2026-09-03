import type { ContentBlock } from "@/lib/types";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Lead } from "./Lead";
import { Definitions } from "./Definitions";
import { Methods } from "./Methods";
import { OtherList } from "./OtherList";
import { ComparisonTable } from "./ComparisonTable";
import { Prose } from "./Prose";
import { Callout } from "./Callout";
import { Closing } from "./Closing";

export function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "lead":
            return (
              <div key={i} className="py-8">
                <Lead text={block.text} />
              </div>
            );
          case "image":
            return (
              <div key={i} className="py-6">
                <ImagePlaceholder label={block.label} src={block.src} credit={block.credit} />
              </div>
            );
          case "definitions":
            return <Definitions key={i} block={block} />;
          case "methods":
            return <Methods key={i} block={block} />;
          case "otherList":
            return <OtherList key={i} block={block} />;
          case "table":
            return <ComparisonTable key={i} block={block} />;
          case "prose":
            return <Prose key={i} block={block} />;
          case "callout":
            return <Callout key={i} block={block} />;
          case "closing":
            return <Closing key={i} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
