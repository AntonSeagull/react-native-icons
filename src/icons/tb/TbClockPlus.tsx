

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbClockPlus = (props: IconProps) => {

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
          <Path d="M20.984 12.535a9 9 0 1 0 -8.468 8.45" />
          <Path d="M16 19h6" />
          <Path d="M19 16v6" />
          <Path d="M12 7v5l3 3" />
        </G>
      </Svg>
    );
  }

