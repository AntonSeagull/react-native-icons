

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCardsThin = (props: IconProps) => {

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
          <Path  d="M184,76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V88A12,12,0,0,0,184,76Zm4,124a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4ZM228,56V176a4,4,0,0,1-8,0V56a4,4,0,0,0-4-4H64a4,4,0,0,1,0-8H216A12,12,0,0,1,228,56Z" />
        </G>
      </Svg>
    );
  }

