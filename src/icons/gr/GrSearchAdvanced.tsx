

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrSearchAdvanced = (props: IconProps) => {

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
          <Path  fill="none" d="M15,16 L21,22 L15,16 Z M10,18 C13.8659932,18 17,14.8659932 17,11 C17,7.13400675 13.8659932,4 10,4 C6.13400675,4 3,7.13400675 3,11 C3,14.8659932 6.13400675,18 10,18 Z M20,1 L20,7 M17,4 L23,4" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

