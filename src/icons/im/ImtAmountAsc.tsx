

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImtAmountAsc = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M5 12v-12h-2v12h-2.5l3.5 3.5 3.5-3.5h-2.5z" />
          <Path  d="M7 9h9v2h-9v-2z" />
          <Path  d="M7 6h7v2h-7v-2z" />
          <Path  d="M7 3h5v2h-5v-2z" />
          <Path  d="M7 0h3v2h-3v-2z" />
        </G>
      </Svg>
    );
  }

