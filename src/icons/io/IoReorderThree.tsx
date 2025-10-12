

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoReorderThree = (props: IconProps) => {

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
          <Line  x1="102" y1="256" x2="410" y2="256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44px" />
          <Line  x1="102" y1="176" x2="410" y2="176" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44px" />
          <Line  x1="102" y1="336" x2="410" y2="336" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44px" />
        </G>
      </Svg>
    );
  }

