

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrContactInfo = (props: IconProps) => {

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
          <Path  fill="none" d="M5,12 C3.343,12 2,10.657 2,9 C2,7.343 3.343,6 5,6 C6.657,6 8,7.343 8,9 C8,10.657 6.657,12 5,12 Z M9,18 L9,16 C9,13.7504 7.2128,12 4.964,12 L5.0184,12 C2.7688,12 1,13.7504 1,16 L1,18 M12,7 L24,7 M12,17 L22,17 M12,12 L19,12" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

