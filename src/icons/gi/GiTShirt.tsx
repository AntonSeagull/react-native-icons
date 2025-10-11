

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTShirt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M32 144l48 64 64-32-16 304c64 16 192 16 256 0l-16-304 64 32 48-64-112-96-48-16c-16 64-112 64-128 0l-48 16z" fill="#000" />
        </G>
      </Svg>
    );
  }

