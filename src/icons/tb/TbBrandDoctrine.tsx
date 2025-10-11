

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandDoctrine = (props: IconProps) => {

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
          <Path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <Path d="M9 14h6" />
          <Path d="M12 11l3 3l-3 3" />
          <Path d="M10 3l6.9 6" />
        </G>
      </Svg>
    );
  }

