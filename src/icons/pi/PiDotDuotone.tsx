

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDotDuotone = (props: IconProps) => {

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
          <Path  d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity="0.2" />
          <Path  d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
        </G>
      </Svg>
    );
  }

