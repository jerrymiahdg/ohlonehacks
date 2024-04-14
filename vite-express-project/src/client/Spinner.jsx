const Spinner = () => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="10%"
  //     height="10%"
  //     viewBox="0 0 24 24"
  //   >
  //     <circle cx="4" cy="12" r="3" fill="currentColor">
  //       <animate
  //         id="svgSpinners3DotsBounce0"
  //         attributeName="cy"
  //         begin="0;svgSpinners3DotsBounce1.end+0.25s"
  //         calcMode="spline"
  //         dur="0.6s"
  //         keySplines=".33,.66,.66,1;.33,0,.66,.33"
  //         values="12;6;12"
  //       />
  //     </circle>
  //     <circle cx="12" cy="12" r="3" fill="currentColor">
  //       <animate
  //         attributeName="cy"
  //         begin="svgSpinners3DotsBounce0.begin+0.1s"
  //         calcMode="spline"
  //         dur="0.6s"
  //         keySplines=".33,.66,.66,1;.33,0,.66,.33"
  //         values="12;6;12"
  //       />
  //     </circle>
  //     <circle cx="20" cy="12" r="3" fill="currentColor">
  //       <animate
  //         id="svgSpinners3DotsBounce1"
  //         attributeName="cy"
  //         begin="svgSpinners3DotsBounce0.begin+0.2s"
  //         calcMode="spline"
  //         dur="0.6s"
  //         keySplines=".33,.66,.66,1;.33,0,.66,.33"
  //         values="12;6;12"
  //       />
  //     </circle>
  //   </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20%"
    height="20%"
    viewBox="0 0 24 24"
  >
    <g>
      <circle cx="12" cy="3" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotate0"
          attributeName="r"
          begin="0;svgSpinners12DotsScaleRotate2.end-0.5s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="16.5" cy="4.21" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotate1"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotate0.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="7.5" cy="4.21" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotate2"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotate4.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="19.79" cy="7.5" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotate3"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotate1.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="4.21" cy="7.5" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotate4"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotate6.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="21" cy="12" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotate5"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotate3.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="3" cy="12" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotate6"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotate8.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="19.79" cy="16.5" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotate7"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotate5.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="4.21" cy="16.5" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotate8"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotatea.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="16.5" cy="19.79" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotate9"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotate7.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="7.5" cy="19.79" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotatea"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotateb.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <circle cx="12" cy="21" r="1" fill="currentColor">
        <animate
          id="svgSpinners12DotsScaleRotateb"
          attributeName="r"
          begin="svgSpinners12DotsScaleRotate9.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          values="1;2;1"
        />
      </circle>
      <animateTransform
        attributeName="transform"
        dur="6s"
        repeatCount="indefinite"
        type="rotate"
        values="360 12 12;0 12 12"
      />
    </g>
  </svg>
);

export default Spinner;
