

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMeteorLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M96,122a38,38,0,1,0,38,38A38,38,0,0,0,96,122Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,96,186Zm124.24-62.24a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48-8.48l48-48A6,6,0,0,1,220.24,123.76Zm-56,8.48a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,8.48Zm64-64-16,16a6,6,0,0,1-8.48-8.48l16-16a6,6,0,0,1,8.48,8.48ZM123.76,91.76l72-72a6,6,0,0,1,8.48,8.48l-72,72a6,6,0,1,1-8.48-8.48ZM145.5,201a6,6,0,0,1,0,8.49,70,70,0,0,1-99-99l82.75-82.74a6,6,0,1,1,8.48,8.48L55,119a58,58,0,1,0,82,82A6,6,0,0,1,145.5,201Z" />
        </G>
      </Svg>
    );
  }

