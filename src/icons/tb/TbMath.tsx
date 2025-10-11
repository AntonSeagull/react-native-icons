

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMath = (props: IconProps) => {

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
          <Path d="M19 5h-7l-4 14l-3 -6h-2" />
          <Path d="M14 13l6 6" />
          <Path d="M14 19l6 -6" />
        </G>
      </Svg>
    );
  }

