

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyKroneCzech = (props: IconProps) => {

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
          <Path  d="M19 6l-2 2l-2 -2" />
          <Path  d="M19 12h-2a3 3 0 0 0 0 6h2" />
        </G>
      </Svg>
    );
  }

