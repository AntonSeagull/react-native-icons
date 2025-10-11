

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWorldDownload = (props: IconProps) => {

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
          <Path d="M21 12a9 9 0 1 0 -9 9" />
          <Path d="M3.6 9h16.8" />
          <Path d="M3.6 15h8.4" />
          <Path d="M11.578 3a17 17 0 0 0 0 18" />
          <Path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" />
          <Path d="M18 14v7m-3 -3l3 3l3 -3" />
        </G>
      </Svg>
    );
  }

