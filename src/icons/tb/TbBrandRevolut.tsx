

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandRevolut = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M5 10h3v10h-3z" />
          <Path d="M14.5 4h-9.5v3h9.4a1.5 1.5 0 0 1 0 3h-3.4v4l4 6h4l-5 -7h.5a4.5 4.5 0 1 0 0 -9z" />
        </G>
      </Svg>
    );
  }

