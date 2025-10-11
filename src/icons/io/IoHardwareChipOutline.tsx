

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoHardwareChipOutline = (props: IconProps) => {

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
          <Line  x1="256" y1="80" x2="256" y2="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="336" y1="80" x2="336" y2="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="176" y1="80" x2="176" y2="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="256" y1="464" x2="256" y2="432" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="336" y1="464" x2="336" y2="432" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="176" y1="464" x2="176" y2="432" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="432" y1="256" x2="464" y2="256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="432" y1="336" x2="464" y2="336" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="432" y1="176" x2="464" y2="176" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="48" y1="256" x2="80" y2="256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="48" y1="336" x2="80" y2="336" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="48" y1="176" x2="80" y2="176" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

