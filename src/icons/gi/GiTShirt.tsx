

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTShirt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M32 144l48 64 64-32-16 304c64 16 192 16 256 0l-16-304 64 32 48-64-112-96-48-16c-16 64-112 64-128 0l-48 16z" />
        </G>
      </Svg>
    );
  }

