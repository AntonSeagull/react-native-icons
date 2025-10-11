

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArchiveOutline = (props: IconProps) => {

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
          <Line  x1="256" y1="345.89" x2="256" y2="224" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M80,152V408a40.12,40.12,0,0,0,40,40H392a40.12,40.12,0,0,0,40-40V152" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

