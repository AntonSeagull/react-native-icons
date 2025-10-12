

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuShoppingBasket = (props: IconProps) => {

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
          <Path  d="m15 11-1 9" />
          <Path  d="m19 11-4-7" />
          <Path  d="M2 11h20" />
          <Path  d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
          <Path  d="M4.5 15.5h15" />
          <Path  d="m5 11 4-7" />
          <Path  d="m9 11 1 9" />
        </G>
      </Svg>
    );
  }

