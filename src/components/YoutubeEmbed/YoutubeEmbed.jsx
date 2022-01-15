import React from "react";
import PropTypes from "prop-types";
import { VideoResponsive, VideoIframe } from "./Styles/YoutubeEmbedElements";

const YoutubeEmbed = ({ embedId }) => (
  <VideoResponsive>
    <VideoIframe
      width="853"
      height="480"
      // src={`https://player.vimeo.com/video/664456975?h=14093cf9cb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=${embedId}`}
      src={`https://player.vimeo.com/video/664486512?h=adacf68453&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoResponsive>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;