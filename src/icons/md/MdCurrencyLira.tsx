

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdCurrencyLira = (props: IconProps) => {

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
          <Path  d="M9,8.76V3h2v4.51L15,5v2.36l-4,2.51l0.01,2.35L15,9.72v2.36l-4,2.51V19c2.76,0,5-2.24,5-5h2c0,3.87-3.13,7-7,7H9v-5.16 l-3,1.88l0-2.36l3-1.88v-2.36L6,13l0-2.36L9,8.76z" />
        </G>
      </Svg>
    );
  }

