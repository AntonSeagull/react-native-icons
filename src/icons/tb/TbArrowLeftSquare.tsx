

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowLeftSquare = (props: IconProps) => {

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
          <Path d="M17 12h-14" />
          <Path d="M6 9l-3 3l3 3" />
          <Path d="M21 14h-4v-4h4z" />
        </G>
      </Svg>
    );
  }

