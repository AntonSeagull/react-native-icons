

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowUpDashed = (props: IconProps) => {

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
          <Path d="M18 11l-6 -6" />
          <Path d="M6 11l6 -6" />
        </G>
      </Svg>
    );
  }

