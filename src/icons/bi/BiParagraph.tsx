

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiParagraph = (props: IconProps) => {

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
          <Path  d="M9 16h2v4h2V6h2v14h2V6h3V4H9c-3.309 0-6 2.691-6 6s2.691 6 6 6zM9 6h2v8H9c-2.206 0-4-1.794-4-4s1.794-4 4-4z" />
        </G>
      </Svg>
    );
  }

