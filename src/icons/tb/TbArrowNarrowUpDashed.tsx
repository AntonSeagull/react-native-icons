

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowNarrowUpDashed = (props: IconProps) => {

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
          <Path d="M12 5v6m0 3v1.5m0 3v.5" />
          <Path d="M16 9l-4 -4" />
          <Path d="M8 9l4 -4" />
        </G>
      </Svg>
    );
  }

