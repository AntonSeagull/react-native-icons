

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbListTree = (props: IconProps) => {

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
          <Path d="M9 6h11" />
          <Path d="M12 12h8" />
          <Path d="M15 18h5" />
          <Path d="M5 6v.01" />
          <Path d="M8 12v.01" />
          <Path d="M11 18v.01" />
        </G>
      </Svg>
    );
  }

