

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCoffin = (props: IconProps) => {

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
          <Path d="M7 3l-2 6l2 12h6l2 -12l-2 -6z" />
          <Path d="M10 7v5" />
          <Path d="M8 9h4" />
          <Path d="M13 21h4l2 -12l-2 -6h-4" />
        </G>
      </Svg>
    );
  }

