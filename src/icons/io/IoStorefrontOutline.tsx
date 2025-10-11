

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoStorefrontOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Line  fill="none" x1="448" y1="448" x2="448" y2="240" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Line  fill="none" x1="64" y1="240" x2="64" y2="448" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Line  fill="none" x1="32" y1="464" x2="480" y2="464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Path  fill="none" d="M382.47,48H129.53C107.74,48,88.06,60,79.6,78.46L36.3,173c-14.58,31.81,9.63,67.85,47.19,69q1,0,2,0c31.4,0,56.85-25.18,56.85-52.23,0,27,25.46,52.23,56.86,52.23S256,218.62,256,189.77c0,27,25.45,52.23,56.85,52.23s56.86-23.38,56.86-52.23c0,28.85,25.45,52.23,56.85,52.23q1,0,1.95,0c37.56-1.17,61.77-37.21,47.19-69L432.4,78.46C423.94,60,404.26,48,382.47,48Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Path  fill="none" d="M136,288h80a24,24,0,0,1,24,24v88a0,0,0,0,1,0,0H112a0,0,0,0,1,0,0V312A24,24,0,0,1,136,288Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Path  fill="none" d="M288,464V312a24,24,0,0,1,24-24h64a24,24,0,0,1,24,24V464" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
        </G>
      </Svg>
    );
  }

