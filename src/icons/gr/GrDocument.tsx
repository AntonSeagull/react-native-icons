

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDocument = (props: IconProps) => {

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
          <Path  fill="none" d="M14,1 L14,8 L21,8 M21,23 L3,23 L3,1 L15,1 L18,4 L21,7 L21,23 L21,23 L21,23 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

