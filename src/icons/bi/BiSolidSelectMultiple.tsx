

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidSelectMultiple = (props: IconProps) => {

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
          <Path  d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6.933 12.481-3.274-3.274 1.414-1.414 1.726 1.726 4.299-5.159 1.537 1.281-5.702 6.84z" />
          <Path  d="M4 22h11v-2H4V8H2v12c0 1.103.897 2 2 2z" />
        </G>
      </Svg>
    );
  }

