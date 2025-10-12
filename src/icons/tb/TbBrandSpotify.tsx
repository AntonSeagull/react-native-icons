

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandSpotify = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path  d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
          <Path  d="M9 15c1.5 -1 4 -1 5 .5" />
          <Path  d="M7 9c2 -1 6 -2 10 .5" />
        </G>
      </Svg>
    );
  }

