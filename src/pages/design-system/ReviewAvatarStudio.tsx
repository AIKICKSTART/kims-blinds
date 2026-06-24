import { useState, type ChangeEvent } from "react";
import { Badge } from "../../components/shared/BadgeTag";
import { Avatar, CustomerReviewCard } from "../../components/shared/DataDisplay";
import { reviewAvatarPresets } from "./designSystemData";

export function ReviewAvatarStudio() {
  const [presetIndex, setPresetIndex] = useState(0);
  const [uploadedSrc, setUploadedSrc] = useState("");
  const [avatarSize, setAvatarSize] = useState(112);
  const [zoom, setZoom] = useState(reviewAvatarPresets[0].zoom);
  const [focalX, setFocalX] = useState(Number.parseInt(reviewAvatarPresets[0].focalPoint.split("%")[0], 10));
  const [focalY, setFocalY] = useState(Number.parseInt(reviewAvatarPresets[0].focalPoint.split(" ")[1], 10));
  const [reviewerName, setReviewerName] = useState("Sarah M.");
  const [reviewerSuburb, setReviewerSuburb] = useState("Caringbah South");
  const [reviewText, setReviewText] = useState("The quote was clear, the screen looks clean, and the finished door still suits the front of the house.");

  const activePreset = reviewAvatarPresets[presetIndex];
  const avatarSrc = uploadedSrc || undefined;
  const avatarImage = uploadedSrc ? undefined : activePreset.image;
  const focalPoint = `${focalX}% ${focalY}%`;

  function handlePreset(index: number) {
    setPresetIndex(index);
    setUploadedSrc("");
    setFocalX(Number.parseInt(reviewAvatarPresets[index].focalPoint.split("%")[0], 10));
    setFocalY(Number.parseInt(reviewAvatarPresets[index].focalPoint.split(" ")[1], 10));
    setZoom(reviewAvatarPresets[index].zoom);
  }

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setUploadedSrc(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="review-avatar-studio">
      <section className="review-avatar-studio__controls" aria-label="Review avatar editor">
        <div className="review-avatar-studio__header">
          <Badge variant="success">Shared component</Badge>
          <div>
            <h3>Customer review avatar editor</h3>
            <p>Upload a local image, set the crop, choose the display size and write the review copy before it is promoted to a testimonial card.</p>
          </div>
        </div>

        <label className="review-avatar-uploader">
          <span>Upload customer photo</span>
          <strong>{uploadedSrc ? "Local image preview active" : "Choose image"}</strong>
          <input type="file" accept="image/*" onChange={handleUpload} />
        </label>

        <div className="review-avatar-presets" aria-label="Avatar image presets">
          {reviewAvatarPresets.map((preset, index) => (
            <button className={index === presetIndex && !uploadedSrc ? "is-selected" : undefined} type="button" key={preset.key} onClick={() => handlePreset(index)}>
              <Avatar label={preset.label} image={preset.image} focalPoint={preset.focalPoint} zoom={preset.zoom} size="sm" shape="squircle" consent="placeholder" />
              <span>{preset.label}</span>
            </button>
          ))}
        </div>

        <div className="review-avatar-sliders">
          <label>
            <span>Avatar size</span>
            <input type="range" min="72" max="132" value={avatarSize} onChange={(event) => setAvatarSize(Number(event.currentTarget.value))} />
            <strong>{avatarSize}px</strong>
          </label>
          <label>
            <span>Image zoom</span>
            <input type="range" min="1" max="1.42" step="0.01" value={zoom} onChange={(event) => setZoom(Number(event.currentTarget.value))} />
            <strong>{zoom.toFixed(2)}x</strong>
          </label>
          <label>
            <span>Crop X</span>
            <input type="range" min="28" max="72" value={focalX} onChange={(event) => setFocalX(Number(event.currentTarget.value))} />
            <strong>{focalX}%</strong>
          </label>
          <label>
            <span>Crop Y</span>
            <input type="range" min="24" max="76" value={focalY} onChange={(event) => setFocalY(Number(event.currentTarget.value))} />
            <strong>{focalY}%</strong>
          </label>
        </div>
      </section>

      <section className="review-avatar-studio__preview" aria-label="Customer review preview">
        <CustomerReviewCard
          quote={reviewText}
          name={reviewerName}
          suburb={reviewerSuburb}
          image={avatarImage}
          src={avatarSrc}
          focalPoint={focalPoint}
          zoom={zoom}
          avatarSize={avatarSize}
          photoConsent={uploadedSrc ? "pending" : "placeholder"}
          variant="feature"
          showConsentNote
        />

        <div className="review-avatar-fields">
          <label>
            <span>Reviewer name</span>
            <input value={reviewerName} onChange={(event) => setReviewerName(event.currentTarget.value)} />
          </label>
          <label>
            <span>Suburb</span>
            <input value={reviewerSuburb} onChange={(event) => setReviewerSuburb(event.currentTarget.value)} />
          </label>
          <label className="review-avatar-fields__wide">
            <span>Review text</span>
            <textarea value={reviewText} rows={4} onChange={(event) => setReviewText(event.currentTarget.value)} />
          </label>
        </div>

        <div className="review-avatar-rules">
          <article>
            <strong>Accepted formats</strong>
            <span>Square or portrait JPG/PNG/WebP. Keep faces centred with a calm, natural crop.</span>
          </article>
          <article>
            <strong>Component states</strong>
            <span>Image, initials fallback, pending review, verified customer and small/large testimonial sizes.</span>
          </article>
          <article>
            <strong>Privacy gate</strong>
            <span>Only publish a portrait after explicit customer approval. Use initials when consent is not confirmed.</span>
          </article>
        </div>
      </section>
    </div>
  );
}
