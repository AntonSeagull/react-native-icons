

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcFinePrint = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Circle  fill="#616161" cx="28" cy="29" r="11" />
          <Circle  fill="#90CAF9" cx="28" cy="29" r="9" />
          <Path  d="M30,31h-9.7c0.4,1.6,1.3,3,2.5,4H30V31z" />
          <Path  d="M20.3,27H30v-4h-7.3C21.5,24,20.7,25.4,20.3,27z" />
          <Path  d="M20.1,20H11v2h7.3C18.8,21.3,19.4,20.6,20.1,20z" />
          <Path  d="M17.1,24H11v2h5.4C16.6,25.3,16.8,24.6,17.1,24z" />
          <Path  d="M16,29c0-0.3,0-0.7,0.1-1H11v2h5.1C16,29.7,16,29.3,16,29z" />
          <Path  d="M16.4,32H11v2h6.1C16.8,33.4,16.6,32.7,16.4,32z" />
        </G>
      </Svg>
    );
  }

