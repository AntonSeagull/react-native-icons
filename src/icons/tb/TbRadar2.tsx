

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRadar2 = (props: IconProps) => {

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
          <Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M15.51 15.56a5 5 0 1 0 -3.51 1.44" />
          <Path d="M18.832 17.86a9 9 0 1 0 -6.832 3.14" />
          <Path d="M12 12v9" />
        </G>
      </Svg>
    );
  }

