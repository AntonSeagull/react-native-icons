

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAsterisk = (props: IconProps) => {

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
          <Path d="M12 12l8 -4.5" />
          <Path d="M12 12v9" />
          <Path d="M12 12l-8 -4.5" />
          <Path d="M12 12l8 4.5" />
          <Path d="M12 3v9" />
          <Path d="M12 12l-8 4.5" />
        </G>
      </Svg>
    );
  }

