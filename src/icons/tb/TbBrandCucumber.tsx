

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandCucumber = (props: IconProps) => {

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
          <Path  d="M20 10.99c-.01 5.52 -4.48 10 -10 10.01v-2.26l-.01 -.01c-4.28 -1.11 -6.86 -5.47 -5.76 -9.75a8 8 0 0 1 9.74 -5.76c3.53 .91 6.03 4.13 6.03 7.78v-.01z" />
          <Path  d="M10.5 8l-.5 -1" />
          <Path  d="M13.5 14l.5 1" />
          <Path  d="M9 12.5l-1 .5" />
          <Path  d="M11 14l-.5 1" />
          <Path  d="M13 8l.5 -1" />
          <Path  d="M16 12.5l-1 -.5" />
          <Path  d="M9 10l-1 -.5" />
        </G>
      </Svg>
    );
  }

