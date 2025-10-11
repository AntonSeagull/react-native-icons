

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAntenna = (props: IconProps) => {

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
          <Path d="M20 4v8" />
          <Path d="M16 4.5v7" />
          <Path d="M12 5v16" />
          <Path d="M8 5.5v5" />
          <Path d="M4 6v4" />
          <Path d="M20 8h-16" />
        </G>
      </Svg>
    );
  }

