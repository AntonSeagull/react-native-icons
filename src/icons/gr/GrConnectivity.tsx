

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrConnectivity = (props: IconProps) => {

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
          <Path  fill="none" d="M6,8 L6,12 L9,15 L15,9 L11,5 L5,5 L2.5,3 M17,7 L20,10 L20,17 M13,11 L16,14 M11,13 L14,16 M7,17 L10,20 L20,20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

