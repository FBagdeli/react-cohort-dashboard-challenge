const SendButton = ({ newCommentButton, post }) => {
  return (
    <button className="send-comment-button" onClick={() => newCommentButton(post)}>
      <svg
        id="send-comment-svg"
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <title>send-email</title>
        <desc>Created with Sketch Beta.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch:type="MSPage"
        >
          <g
            id="Icon-Set-Filled"
            sketch:type="MSLayerGroup"
            transform="translate(-570.000000, -257.000000)"
            fill="#000000"
          >
            <path
              d="M580.407,278.75 C581.743,281.205 586,289 586,289 C586,289 601.75,258.5 602,258 L602.02,257.91 L580.407,278.75 L580.407,278.75 Z M570,272 C570,272 577.298,276.381 579.345,277.597 L601,257 C598.536,258.194 570,272 570,272 L570,272 Z"
              id="send-email"
              sketch:type="MSShapeGroup"
            ></path>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default SendButton;
