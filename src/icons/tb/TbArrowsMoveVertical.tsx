

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsMoveVertical = (props: IconProps) => {

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
          <Path d="M9 18l3 3l3 -3" />
          <Path d="M12 15v6" />
          <Path d="M15 6l-3 -3l-3 3" />
          <Path d="M12 3v6" />
        </G>
      </Svg>
    );
  }

