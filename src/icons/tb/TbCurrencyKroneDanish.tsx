

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyKroneDanish = (props: IconProps) => {

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
          <Path  d="M5 6v12" />
          <Path  d="M5 12c3.5 0 6 -3 6 -6" />
          <Path  d="M5 12c3.5 0 6 3 6 6" />
          <Path  d="M15 10v8" />
          <Path  d="M19 10a4 4 0 0 0 -4 4" />
          <Path  d="M20 18.01v-.01" />
        </G>
      </Svg>
    );
  }

