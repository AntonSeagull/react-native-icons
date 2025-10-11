

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWorldBolt = (props: IconProps) => {

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
          <Path d="M20.985 12.52a9 9 0 1 0 -7.52 8.36" />
          <Path d="M3.6 9h16.8" />
          <Path d="M3.6 15h10.9" />
          <Path d="M11.5 3a17 17 0 0 0 0 18" />
          <Path d="M12.5 3c2.313 3.706 3.07 7.856 2.27 12" />
          <Path d="M19 16l-2 3h4l-2 3" />
        </G>
      </Svg>
    );
  }

