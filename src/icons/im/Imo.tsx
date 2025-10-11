

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imo = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M8 1c-2.209 0-4.209 0.896-5.657 2.343l-2.343-2.343v6h6l-2.243-2.243c1.086-1.086 2.586-1.757 4.243-1.757 3.314 0 6 2.686 6 6 0 1.792-0.786 3.401-2.032 4.5l1.323 1.5c1.661-1.466 2.709-3.611 2.709-6 0-4.418-3.582-8-8-8z" fill="#000000" />
        </G>
      </Svg>
    );
  }

